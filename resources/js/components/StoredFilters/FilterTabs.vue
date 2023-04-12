<template>
  <div class="ml-4 flex gap-x-3">
    <div
      v-for="filter in stored"
      @click="select(filter)"
      class="py-1 px-1 -mb-px font-bold cursor-pointer"
      :class="
        filter.selected
          ? 'border-primary-500 border-b-2 text-primary-500'
          : 'text-gray-400 border-b hover:text-gray-700 hover:border-gray-400'
      "
    >
      {{ filter.name }}
    </div>
  </div>
</template>

<script>
import { useBlueprintStore } from '@/stores/BlueprintStore'
import { mapState, storeToRefs } from 'pinia'

export default {
  data() {
    let store = useBlueprintStore()

    return {
      stored: store.stored,
    }
  },

  computed: {
    ...mapState(useBlueprintStore, ['stored']),
    // selectedFilter() {
    //   return this.stored.find(f => f.selected)
    // },
  },

  methods: {
    select(filter) {
      useBlueprintStore().loadBlueprint(filter.state.blueprint)

      Nova.$emit('submit-refine')
    },
  },
}
</script>
