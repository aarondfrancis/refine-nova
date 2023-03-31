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
import uid from '@/lib/uid'
import { toPlainObject } from 'lodash'
import BlueprintHelper from '@/blueprint'
import { useBlueprintStore } from '@/stores/BlueprintStore'

export default {
  components: {
    AddButton,
    Condition,
  },

  props: {
    blueprint: {
      required: true,
      type: Object,
    },

    filter: {
      required: true,
      type: Object,
    },
  },

  emits: ['update:blueprint'],

  data() {
    return {
      autoOpen: false,
    }
  },

  created() {
    let blueprint = []
    let modified = false

    // Ensure that all blueprint criterion have a UID.
    this.blueprint.map(item => {
      let copy = toPlainObject(item)

      if (item.type === 'criterion' && !item.uid) {
        copy.uid = uid()
        modified = true
      }

      blueprint.push(copy)
    })

    if (modified) {
      this.emitUpdate(blueprint)
    }

    // If the blueprint is already pretty long, let's just leave it alone.
    if (blueprint.length >= 7) {
      return
    }

    // Otherwise let's gather up all the unused conditions
    let unusedConditions = this.filter.conditions.filter(
      c => blueprint.findIndex(i => i?.condition_id === c.id) === -1
    )

    // And push empty versions into the blueprint
    while (blueprint.length < 7 && unusedConditions.length > 0) {
      blueprint.push({
        depth: 1,
        type: 'conjunction',
        word: 'and',
      })

      blueprint.push({
        depth: 1,
        uid: uid(),
        type: 'criterion',
        condition_id: unusedConditions.shift().id,
        input: {},
      })
    }
  },

  methods: {
    add(condition) {
      this.autoOpen = true
      setTimeout(() => (this.autoOpen = false), 10)

      this.blueprint.push({
        depth: 1,
        type: 'conjunction',
        word: 'and',
      })

      this.blueprint.push({
        depth: 1,
        type: 'criterion',
        condition_id: condition.id,
        input: {},
      })
    },

    remove(index) {
      this.emitUpdate(BlueprintHelper.remove(this.blueprint, index))
    },

    conditionForCriterion(criterion) {
      return this.filter.conditions.find(c => c.id === criterion.condition_id)
    },

    handleInputUpdate(index, input) {
      let copy = this.blueprint
      copy[index].input = input

      this.emitUpdate(copy)
    },

    emitUpdate(blueprint) {
      useBlueprintStore().resetSelectedStoredFilter()

      this.$emit('update:blueprint', blueprint)
    },
  },
}
</script>
