<template>
  <div class="flex flex-wrap gap-x-2">
    <template v-for="(item, index) in blueprint">
      <Condition
        v-if="item.type === 'criterion'"
        :condition="conditionForCriterion(item)"
        :input="item.input"
        :auto-open="autoOpen"
        @update:input="value => handleInputUpdate(index, value)"
        @remove="remove(index)"
      />
    </template>

    <add-button @add="add" :conditions="filter.conditions" group-type="and" />
    <!--    <add-button :conditions="filter.conditions" group-type="or" />-->
  </div>
</template>

<script>
import Condition from './Conditions/Condition'
import AddButton from './Conditions/AddButton'
import { useBlueprintStore } from '@/stores/BlueprintStore'
import { storeToRefs } from 'pinia'

export default {
  components: {
    AddButton,
    Condition,
  },

  props: {
    filter: {
      required: true,
      type: Object,
    },
  },

  data() {
    return {
      autoOpen: false,
      blueprint: storeToRefs(useBlueprintStore()).blueprint,
    }
  },

  created() {
    //
    //
    // // If the blueprint is already pretty long, let's just leave it alone.
    // if (blueprint.length >= 7) {
    //   return
    // }
    //
    // // Otherwise let's gather up all the unused conditions
    // let unusedConditions = this.filter.conditions.filter(
    //   c => blueprint.findIndex(i => i?.condition_id === c.id) === -1
    // )
    //
    // // And push empty versions into the blueprint
    // while (blueprint.length < 7 && unusedConditions.length > 0) {
    //   blueprint.push({
    //     depth: 1,
    //     type: 'conjunction',
    //     word: 'and',
    //   })
    //
    //   blueprint.push({
    //     depth: 1,
    //     uid: uid(),
    //     type: 'criterion',
    //     condition_id: unusedConditions.shift().id,
    //     input: {},
    //   })
    // }
  },

  methods: {
    add(condition) {
      // Auto-open is checked in the condition on mount only, so
      // all the currently existing conditions will not be
      // opened, but the new one will.
      this.autoOpen = true

      // Switch it back off after 10ms, which is enough time for
      // the new component to mount and open itself.
      setTimeout(() => (this.autoOpen = false), 10)

      useBlueprintStore().addCriterion(condition)
    },

    remove(index) {
      useBlueprintStore().removeCriterion(index)

      Nova.$emit('submit-refine')
    },

    conditionForCriterion(criterion) {
      return this.filter.conditions.find(c => c.id === criterion.condition_id)
    },

    handleInputUpdate(index, input) {
      useBlueprintStore().updateInput(index, input)

      Nova.$emit('submit-refine')
    },
  },
}
</script>
