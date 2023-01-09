<template>
  <div>
    <slide-down :show="!collapsed">
      <div>
        <query-builder
          :errors="errors"
          @keydown.native.enter="submit"
          v-model:blueprint="filter.blueprint"
          :conditions="filter.conditions"
          :flavor="flavor"
        />

        <div class="text-right">
          <button @click.prevent="collapsed = !collapsed" class="text-sm mr-6 text-80">Collapse</button>
          <button @click.prevent="submit" class="btn btn-default btn-primary">Filter</button>
        </div>
      </div>
    </slide-down>
    <slide-down :show="collapsed">
      <div class="border rounded-lg shadow border-50 p-4 text-80 bg-white flex items-center justify-between text-sm">
        <div>{{ collapsedText }}</div>
        <button class="text-80" @click.prevent="collapsed = !collapsed">Expand Filter</button>
      </div>
    </slide-down>
  </div>
</template>

<script>
import { QueryBuilder } from '@hammerstone/refine-vue2-dev';
import novaFlavor from '../flavors/nova';
import SlideDown from './SlideDown';
import store from 'store2';

export default {
  props: ['card', 'resourceName'],

  components: {
    SlideDown,
    QueryBuilder,
  },

  data() {
    let filter = _.toPlainObject(this.card.filter);

    return {
      flavor: novaFlavor,

      errors: {},
      lastAppliedBlueprint: filter.blueprint,
      collapsed: store.get('refine-collapsed', false),
      filter: filter,
    };
  },

  created() {
    Nova.$on('validation-error', (response) => {
      if (response === false) {
        return;
      }

      let errors = response?.data?.errors;

      if (!errors) {
        return;
      }

      let rebuilt = {};

      Object.keys(errors).map((k) => {
        let uid = k.split('.')[0];
        rebuilt[uid] = [...(rebuilt[uid] || []), ...errors[k]];
      });

      this.errors = rebuilt;
    });
  },

  mounted() {
    // When the page initially loads, we only want to update from
    // the stable ID if there is an ID. Otherwise we will just
    // show the blueprint that the backend has provided.
    let id = _.get(this, `$route.query.${this.refineParameterName}`);

    if (id) {
      this.updateBlueprintFromStableId(id);
    }
  },

  computed: {
    refineParameterName() {
      return `${this.resourceName}_refine`;
    },

    collapsedText() {
      return this.calculateCollapsedText(this.lastAppliedBlueprint);
    },
  },

  watch: {
    $route(to, from) {
      if (to.query[this.refineParameterName] !== from.query[this.refineParameterName]) {
        this.updateBlueprintFromStableId(to.query[this.refineParameterName], true);
      }
    },

    collapsed(val) {
      store.set('refine-collapsed', val);
    },
  },

  methods: {
    updateBlueprintFromStableId(id, refresh = false) {
      this.errors = {};

      Nova.request()
        .post('/nova-vendor/refine-nova/destabilize', { id })
        .then(({ data }) => {
          // Without this here, the clauses in a condition won't change on
          // back/next navigation. I'll need to have Sean or Jeff look
          // more closely at the blueprint store to figure out why.
          this.$nextTick(() => {
            this.lastAppliedBlueprint = data.blueprint;
            this.filter.blueprint = data.blueprint;
          });

          if (refresh) {
            Nova.$emit('refresh-resources');
          }
        });
    },

    calculateCollapsedText(blueprint) {
      let count = blueprint.filter((item) => item.type === 'criterion').length;

      if (count === 0) {
        return 'No filter conditions applied.';
      }

      if (count === 1) {
        return '1 filter condition applied.';
      }

      return `${count} filter conditions applied.`;
    },

    submit() {
      Nova.request()
        // Because of the way Nova works, we have to make a round trip to
        // stabilize the blueprint, and then pop it in the querystring.
        .post('/nova-vendor/refine-nova/stabilize', {
          type: this.filter.type,
          blueprint: this.filter.blueprint,
        })
        .then(({ data }) => {
          // Put the new stable id in the querystring, and then the router will take over.
          this.updateQueryString({
            // Reset to the first page, just like Nova does when
            // a user changes a filter.
            [`${this.resourceName}_page`]: 1,
            [this.refineParameterName]: data.id,
          });
        });
    },

    updateQueryString(value) {
      this.$router.push({ query: _.defaults(value, this.$route.query) }).catch((error) => {
        if (error.name != 'NavigationDuplicated') {
          throw error;
        }
      });
    },
  },
};
</script>
