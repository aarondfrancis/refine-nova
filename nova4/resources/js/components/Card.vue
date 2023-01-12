<template>
  <div class="refine-nova-card">
    <!--
          Because we use a Tailwind prefix, we have to inject our own "dark" class here.
          All of our CSS is generated as e.g. `.refine-nova-card .dark .pl-4 {}`
          and by default the .dark class goes on the documentElement.
     -->
    <div :class="{ dark: dark }">
      <slide-down :show="!collapsed">
        <div>
          <query-builder
            :errors="errors"
            v-model:blueprint="filter.blueprint"
            :conditions="filter.conditions"
            :flavor="flavor"
          />

          <div class="text-right">
            <button
              @click.prevent="collapsed = !collapsed"
              class="text-sm mr-6 text-80"
            >
              {{ __('Collapse') }}
            </button>
            <button
              @click.prevent="submit"
              class="flex-shrink-0 shadow rounded focus:outline-none ring-primary-200 dark:ring-gray-600 focus:ring bg-primary-500 hover:bg-primary-400 active:bg-primary-600 text-white dark:text-gray-800 inline-flex items-center font-bold px-4 h-9 text-sm flex-shrink-0"
            >
              Filter
            </button>
          </div>
        </div>
      </slide-down>
      <slide-down :show="collapsed">
        <div
          class="border rounded-lg shadow border-50 p-4 text-80 bg-white flex items-center justify-between text-sm"
        >
          <div>{{ collapsedText }}</div>
          <button class="text-80" @click.prevent="collapsed = !collapsed">
            {{ __('Expand Filter') }}
          </button>
        </div>
      </slide-down>

      <Teleport v-if="target" :to="target">
        <test style="order: -1" :fields="card.fields"></test>
      </Teleport>
    </div>
  </div>
</template>

<script>
// Instead of recreating any logic, we'll just watch what Nova does and go off of that.
function getDarkMode() {
  return document.documentElement.classList.contains('dark')
}

import Test from './FieldSelector.vue'
import { QueryBuilder } from '@hammerstone/refine-vue3'
import novaFlavor from '../flavors/nova4'
import SlideDown from './SlideDown'
import store from 'store2'
import toPlainObject from 'lodash/toPlainObject'
import forEach from 'lodash/forEach'

export default {
  props: ['card', 'resourceName'],

  components: {
    Test,
    SlideDown,
    QueryBuilder,
  },

  data() {
    let filter = toPlainObject(this.card.filter)

    return {
      flavor: novaFlavor,
      dark: false,
      target: null,
      errors: {},
      lastAppliedBlueprint: filter.blueprint,
      collapsed: store.get('refine-collapsed', false),
      filter: filter,
    }
  },

  created() {
    Nova.$on('validation-error', response => {
      if (response === false) {
        return
      }

      let errors = response?.data?.errors

      if (!errors) {
        return
      }

      let rebuilt = {}

      Object.keys(errors).map(k => {
        let uid = k.split('.')[0]
        rebuilt[uid] = [...(rebuilt[uid] || []), ...errors[k]]
      })

      this.errors = rebuilt

      Nova.error(this.__('There was a problem submitting the filter.'))
    })
  },

  mounted() {
    this.dark = getDarkMode()

    let el = document.querySelector('[dusk="filter-selector"]')

    this.target = el.parentNode

    let observer = new MutationObserver(() => {
      this.dark = getDarkMode()
    })

    // Watch for class changes on the documentElement
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    // When the page initially loads, we only want to update from
    // the stable ID if there is an ID. Otherwise we will just
    // show the blueprint that the backend has provided.
    let params = new URLSearchParams(window.location.search)

    if (params.has(this.refineParameterName)) {
      this.updateBlueprintFromStableId(params.get(this.refineParameterName))
    }
  },

  computed: {
    refineParameterName() {
      return `${this.resourceName}_refine`
    },

    collapsedText() {
      return this.__(this.calculateCollapsedText(this.lastAppliedBlueprint))
    },
  },

  watch: {
    collapsed(val) {
      store.set('refine-collapsed', val)
    },
  },

  methods: {
    updateBlueprintFromStableId(id, refresh = false) {
      this.errors = {}

      Nova.request()
        .post('/nova-vendor/refine-nova/destabilize', { id })
        .then(({ data }) => {
          // Without this here, the clauses in a condition won't change on
          // back/next navigation. I'll need to have Sean or Jeff look
          // more closely at the blueprint store to figure out why.
          this.$nextTick(() => {
            this.lastAppliedBlueprint = data.blueprint
            this.filter.blueprint = data.blueprint
          })

          if (refresh) {
            Nova.$emit('refresh-resources')
          }
        })
    },

    calculateCollapsedText(blueprint) {
      let count = blueprint.filter(item => item.type === 'criterion').length

      if (count === 0) {
        return 'No filter conditions applied.'
      }

      if (count === 1) {
        return '1 filter condition applied.'
      }

      return `${count} filter conditions applied.`
    },

    submit() {
      this.errors = {}

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
          })
        })
    },

    // This is basically copied from the InteractsWithQueryString
    // Nova mixin, but with a few modifications.
    updateQueryString(value) {
      let searchParams = new URLSearchParams(window.location.search)
      let page = this.$inertia.page

      forEach(value, (v, i) => {
        searchParams.set(i, v || '')
      })

      if (page.url !== `${window.location.pathname}?${searchParams}`) {
        page.url = `${window.location.pathname}?${searchParams}`

        window.history.pushState(
          page,
          '',
          `${window.location.pathname}?${searchParams}`
        )
      }

      Nova.$emit('query-string-changed', searchParams)
      Nova.$emit('refresh-resources')
    },
  },
}
</script>
