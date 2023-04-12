import { defineStore } from 'pinia'
import uid from '@/lib/uid'
import isEqual from 'lodash/isEqual'

export const useBlueprintStore = defineStore('Blueprint', {
  state() {
    return {
      stored: [],
      blueprint: [],
    }
  },

  getters: {
    selectedStoredFilter() {
      return this.stored.find(f => f.selected)
    },
  },

  actions: {
    loadStoredFilters(blueprints) {
      this.stored = blueprints
      this.resetSelectedStoredFilter()
    },

    loadBlueprint(blueprint) {
      blueprint = JSON.parse(JSON.stringify(blueprint))

      // Ensure that all blueprint criterion have a UID.
      this.blueprint = blueprint.map(item => {
        if (item.type === 'criterion' && !item.hasOwnProperty('uid')) {
          item.uid = uid()
        }

        return item
      })

      this.resetSelectedStoredFilter()
    },

    removeStoredFilter(id) {
      this.stored = this.stored.filter(filter => filter.id !== id)
    },

    withoutUuids(blueprint) {
      // Make a non-reactive copy of the blueprint and remove all the UIDs.
      return JSON.parse(JSON.stringify(blueprint)).map(item => {
        delete item.uid
        return item
      })
    },

    blueprintsMatch(a, b) {
      return isEqual(this.withoutUuids(a), this.withoutUuids(b))
    },

    resetSelectedStoredFilter() {
      if (this.selectedStoredFilter) {
        this.selectedStoredFilter.selected = false
      }

      this.potentiallySelectStoredFilter()
    },

    potentiallySelectStoredFilter() {
      this.stored.forEach(filter => {
        if (this.blueprintsMatch(filter.state.blueprint, this.blueprint)) {
          filter.selected = true
        }
      })
    },

    addCriterion(condition, input = {}) {
      if (this.blueprint.length > 0) {
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

      this.resetSelectedStoredFilter()
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

      this.resetSelectedStoredFilter()
    },

    updateInput(index, input) {
      this.blueprint[index].input = input

      this.resetSelectedStoredFilter()
    },
  },
})
