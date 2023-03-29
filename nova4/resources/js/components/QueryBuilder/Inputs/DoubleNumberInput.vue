<template>
  <div class="flex items-center">
    <arrow-uturn-up-icon
      class="w-4 h-4 mr-2 shrink-0 text-blue-700 rotate-90"
    />
    <input
      type="number"
      class="border rounded-md text-sm flex flex-auto w-0 border-gray-300 px-1 py-1"
      placeholder="0"
      :value="input.value1"
      @input="event => changeInput('value1', event.target.value)"
    />
    <div class="mx-2">
      {{ meta('joiner', 'and') }}
    </div>
    <input
      type="number"
      class="border rounded-md text-sm flex flex-auto w-0 border-gray-300 px-1 py-1"
      placeholder="0"
      :value="input.value2"
      @input="event => changeInput('value2', event.target.value)"
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
        value2: null,
      }
    },
    quicklook(input, condition, clause) {
      let value1 = input.value1 ?? '?'
      let value2 = input.value2 ?? '?'

      return `${value1} to ${value2}`
    },
  },
}
</script>
