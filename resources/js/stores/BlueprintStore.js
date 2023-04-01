import { defineStore } from 'pinia'

import stored from '@/lib/stored'

export const useBlueprintStore = defineStore('Blueprint', {
  state() {
    return {
      stored: stored,
      blueprint: [],
    }
  },

  actions: {
    saveCurrentBlueprint(name) {
      // Unselect the currently selected stored filter
      this.resetSelectedStoredFilter()

      // Push the current one into the saved array
      this.stored.push({
        name: name,
        blueprint: JSON.parse(JSON.stringify(this.blueprint)),
        selected: true,
      })
    },

    resetSelectedStoredFilter() {
      this.stored.forEach(f => (f.selected = false))
    },
  },
})
