import { defineStore } from 'pinia'

import blueprint from '@/lib/blueprint'
import stored from '@/lib/stored'

export const useBlueprintStore = defineStore('Blueprint', {
  state() {
    return {
      saved: stored,
      blueprint: blueprint,
    }
  },

  actions: {
    saveCurrentBlueprint(name) {
      // Unselect the currently selected stored filter
      this.resetSelectedSavedFilter()

      // Push the current one into the saved array
      this.saved.push({
        name: name,
        blueprint: JSON.parse(JSON.stringify(this.blueprint)),
        selected: true,
      })
    },

    resetSelectedSavedFilter() {
      this.saved.forEach(f => (f.selected = false))
    },
  },
})
