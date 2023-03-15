<template>
  <div class="flex items-center">
    <arrow-uturn-up-icon class="w-4 h-4 mr-2 text-indigo-700 rotate-90" />
    <input
      type="text"
      class="border rounded-md text-sm w-full border-gray-300 px-1 py-1"
      :value="input.value"
      @input="event => changeInput('value', event.target.value)"
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
        value: null,
      }
    },

    quicklook(input, condition, clause) {
      if (input.value?.length > 15) {
        return input.value.slice(0, 15) + '...'
      }

      return input.value
    },
  },
}
</script>
