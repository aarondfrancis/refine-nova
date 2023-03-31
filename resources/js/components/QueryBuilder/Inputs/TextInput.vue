<template>
  <div class="flex items-center">
    <arrow-uturn-up-icon class="w-4 h-4 mr-2 text-primary-500 rotate-90" />
    <input
      type="text"
      class="form-control form-input form-input-bordered"
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
      let value =
        input.value?.length > 15
          ? input.value.slice(0, 15) + '...'
          : input.value

      return `${clause.display.toLowerCase()} ${value ?? '?'}`
    },
  },
}
</script>
