<template>
  <div class="flex items-center">
    <arrow-uturn-up-icon class="w-4 h-4 mr-2 text-blue-700 rotate-90" />
    <input
      type="number"
      class="border rounded-md text-sm w-20 border-gray-300 px-1 py-1"
      placeholder="0"
      :value="input.value1"
      @input="event => changeInput('value1', event.target.valueAsNumber)"
    />
  </div>
</template>

<script>
import InputMixin from '../mixins/InputMixin'

export default {
  mixins: [InputMixin],

  methods: {
    defaults() {
      return {
        value1: null,
      }
    },

    quicklook(input, condition, clause) {
      return input.value1
    },
  },
}
</script>
