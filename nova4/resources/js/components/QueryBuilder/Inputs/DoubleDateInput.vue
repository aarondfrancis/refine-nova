<template>
  <div class="flex items-center">
    <custom-datepicker
      input-class="w-full"
      :model-value="input.date1"
      @update:model-value="value => changeInput('date1', value)"
    />
    <div class="mx-2">
      {{ meta('joiner', 'and') }}
    </div>
    <custom-datepicker
      input-class="w-full"
      :model-value="input.date2"
      @update:model-value="value => changeInput('date2', value)"
    />
  </div>
</template>

<script>
import InputMixin from '../mixins/InputMixin'
import CustomDatepicker from '../CustomDatepicker'

export default {
  mixins: [InputMixin],

  components: {
    CustomDatepicker,
  },

  methods: {
    defaults() {
      return {
        date1: null,
      }
    },
    quicklook(input, condition, clause) {
      let date1 = input.date1 ?? '?'
      let date2 = input.date2 ?? '?'

      return `${date1} to ${date2}`
    },
  },
}
</script>
