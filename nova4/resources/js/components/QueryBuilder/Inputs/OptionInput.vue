<template>
  <div class="items-center">
    <div class="mt-2 flex items-center" v-for="option in options">
      <input
        v-model="input.selected"
        v-if="multiple"
        :value="option.id"
        type="checkbox"
        :id="`c${condition.id}-o${option.id}`"
        class="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 focus:ring-2"
      />

      <input
        v-model="input.selected[0]"
        v-else
        :value="option.id"
        type="radio"
        :id="`c${condition.id}-o${option.id}`"
        class="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 focus:ring-indigo-500 focus:ring-2"
      />

      <label :for="`c${condition.id}-o${option.id}`" class="ml-2 text-sm">
        {{ option.display }}
      </label>
    </div>
  </div>
</template>

<script>
import InputMixin from '../mixins/InputMixin'

export default {
  mixins: [InputMixin],

  computed: {
    options() {
      return this.condition.meta.options
    },

    multiple() {
      return this.meta('multiple', false)
    },
  },

  methods: {
    defaults() {
      return {
        selected: [],
      }
    },

    modifyInput(value) {
      // Vue won't turn `selected` into an array if it is
      // not one, so it messes up all the checkboxes.
      if (!Array.isArray(value?.selected)) {
        value.selected = []
      }

      return value
    },

    onClauseChange() {
      if (!this.multiple) {
        this.changeInput('selected', this.input.selected.slice(0, 1))
      }
    },

    quicklook(input, condition) {
      if (!input?.selected?.length) {
        return
      }

      let max = 2
      let remainder = input.selected.length - max

      return (
        input.selected
          .slice(0, max)
          // Turn IDs into displays
          .map(id => condition.meta.options.find(o => o.id === id).display)
          .join(', ') + (remainder > 0 ? `, and ${remainder} more` : '')
      )
    },
  },
}
</script>
