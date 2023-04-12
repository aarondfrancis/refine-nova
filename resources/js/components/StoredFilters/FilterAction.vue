<template>
  <div>
    <DeleteFilter v-if="selectedStoredFilter" :filter="filter" />
    <SaveFilter v-else :filter="filter" />
  </div>
</template>

<script>
import { useBlueprintStore } from '@/stores/BlueprintStore'
import { mapState } from 'pinia'
import SaveFilter from './SaveFilter.vue'
import DeleteFilter from './DeleteFilter.vue'

export default {
  components: { DeleteFilter, SaveFilter },
  props: {
    filter: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {}
  },

  computed: {
    ...mapState(useBlueprintStore, ['selectedStoredFilter']),
  },

  methods: {},
}
</script>
