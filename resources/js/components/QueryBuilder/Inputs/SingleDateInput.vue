<template>
  <div class="flex items-center">
    <arrow-uturn-up-icon class="w-4 h-4 mr-2 text-blue-700 rotate-90" />
    <custom-datepicker
      :model-value="input.date1"
      @update:model-value="value => changeInput('date1', value)"
    />
  </div>
</template>

<script>
import InputMixin from '../mixins/InputMixin'
import CustomDatepicker from '../CustomDatepicker'

export default {
  components: {
    CustomDatepicker,
  },

  mixins: [InputMixin],

  methods: {
    defaults() {
      return {
        date1: null,
      }
    },

    quicklook(input, condition, clause) {
      return input.date1 ?? ''
    },
  },
}
</script>
