<template>
  <!-- Everything is teleported, so we hide the empty card -->
  <div class="hidden">
    <Teleport v-if="savedFiltersTarget" :to="savedFiltersTarget">
      <StoredFilterTabs />
    </Teleport>

    <Teleport v-if="queryBuilderTarget" :to="queryBuilderTarget">
      <div class="flex items-baseline border-b pl-4 py-3">
        <QueryBuilder
          :errors="errors"
          :blueprint="blueprint"
          @update:blueprint="blueprint => updateBlueprint(blueprint)"
          :filter="filter"
          :conditions="filter.conditions"
        />

        <StoredFilterModal />
      </div>
    </Teleport>

    <Teleport v-if="fieldSelectorTarget" :to="fieldSelectorTarget">
      <FieldSelector :fields="card.fields">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 13.5l3 3m0 0l3-3m-3 3v-6m1.06-4.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
          />
        </svg>
      </FieldSelector>
    </Teleport>
  </div>
</template>

<script>
import QueryBuilder from './QueryBuilder/QueryBuilder.vue'
import FieldSelector from './FieldSelector.vue'
import toPlainObject from 'lodash/toPlainObject'
import forEach from 'lodash/forEach'
import StoredFilterModal from './QueryBuilder/StoredFilterModal.vue'
import StoredFilterTabs from './QueryBuilder/StoredFilterTabs.vue'
import { storeToRefs } from 'pinia'
import { useBlueprintStore } from '../stores/BlueprintStore'

export default {
  props: ['card', 'resourceName'],

  components: {
    StoredFilterModal,
    StoredFilterTabs,
    FieldSelector,
    QueryBuilder,
  },

  data() {
    let filter = toPlainObject(this.card.filter)

    let store = useBlueprintStore()

    // Load the filter into the store.
    store.$patch({
      blueprint: filter.blueprint,
    })

    return {
      queryBuilderTarget: null,
      fieldSelectorTarget: null,
      savedFiltersTarget: null,
      errors: {},
      lastAppliedBlueprint: filter.blueprint,
      filter: filter,
      blueprint: storeToRefs(store).blueprint,
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
    this.addQueryBuilderTarget()
    this.addFieldSelectorTarget()
    this.addSavedFilterTarget()

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
  },

  watch: {
    blueprint() {
      this.submit()
    },
  },

  methods: {
    addQueryBuilderTarget() {
      let toolBarItemsRight = document.querySelector(
        '[dusk="filter-selector"]'
      ).parentNode

      let queryBuilderTarget = document.createElement('div')
      queryBuilderTarget.setAttribute('id', 'refine-builder-target')

      let header = toolBarItemsRight.closest(
        '.flex.flex-col.md\\:flex-row.md\\:items-center.py-3.border-b.border-gray-200.dark\\:border-gray-700'
      )

      header.parentNode.insertBefore(queryBuilderTarget, header)

      this.queryBuilderTarget = queryBuilderTarget
    },

    addFieldSelectorTarget() {
      this.fieldSelectorTarget = document.querySelector(
        '[dusk="filter-selector"]'
      ).parentNode
    },

    addSavedFilterTarget() {
      let parent = this.queryBuilderTarget.parentNode

      let target = document.createElement('div')
      target.setAttribute('id', 'refine-saved-filters-target')

      parent.parentNode.insertBefore(target, parent)

      this.savedFiltersTarget = target
    },

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
            this.blueprint = data.blueprint
          })

          if (refresh) {
            Nova.$emit('refresh-resources')
          }
        })
    },

    updateBlueprint(blueprint) {
      console.log('updating')
      this.blueprint = blueprint

      this.submit()
    },

    submit() {
      this.errors = {}

      Nova.request()
        // Because of the way Nova works, we have to make a round trip to
        // stabilize the blueprint, and then pop it in the querystring.
        .post('/nova-vendor/refine-nova/stabilize', {
          type: this.filter.type,
          blueprint: this.blueprint,
          // This is the FQCN of the Nova resource, if they are using
          // the AdHocFilter.
          resource: this.filter.resource,
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
