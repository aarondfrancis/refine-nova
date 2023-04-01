import { defineStore } from 'pinia'
import stored from '@/lib/stored'
import uid from '@/lib/uid'

export const useBlueprintStore = defineStore('Blueprint', {
  state() {
    return {
      stored: stored,
      blueprint: [],
    }
  },

  actions: {
    loadBlueprint(blueprint) {
      // Ensure that all blueprint criterion have a UID.
      this.blueprint = blueprint.map(item => {
        if (item.type === 'criterion' && !item.uid) {
          item.uid = uid()
        }

        return item
      })
    },

    addCriterion(condition, input = {}) {
      if (this.blueprint.length === 0) {
        this.blueprint.push({
          depth: 1,
          type: 'conjunction',
          word: 'and',
          uid: uid(),
        })
      }

      this.blueprint.push({
        depth: 1,
        type: 'criterion',
        condition_id: condition.id,
        input: input,
        uid: uid(),
      })
    },

    removeCriterion(index) {
      /**
       To support 'groups' there is some complicated logic for deleting criterion.

       Imagine this simplified blueprint: [eq, and, sw, or, eq]

       User clicks to delete the last eq. We also have to delete the preceding or
       otherwise we're left with a hanging empty group

       What if the user deletes the sw? We have to clean up the preceding and.

       Imagine another scenario: [eq or sw and ew]
       Now we delete the first eq but this time we need to clean up the or.

       These conditionals cover these cases.
       **/

      let previous = this.blueprint[index - 1]
      let next = this.blueprint[index + 1]

      const nextIsOr = next?.word === 'or'
      const previousIsOr = previous?.word === 'or'

      const nextIsRightParen = nextIsOr || !next
      const previousIsLeftParen = previousIsOr || !previous

      const isFirstInGroup = previousIsLeftParen && !nextIsRightParen
      const isLastInGroup = previousIsLeftParen && nextIsRightParen
      const isLastCriterion = !previous && !next

      if (isLastCriterion) {
        this.blueprint = []
      } else if (isLastInGroup && previousIsOr) {
        this.blueprint.splice(index - 1, 2)
      } else if (isLastInGroup && !previous) {
        this.blueprint.splice(index, 2)
      } else if (isFirstInGroup) {
        this.blueprint.splice(index, 2)
      } else {
        this.blueprint.splice(index - 1, 2)
      }

      return this.blueprint
    },

    updateInput(index, input) {
      this.blueprint[index].input = input
    },

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
