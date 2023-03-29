<template>
  <div class="flex items-center">
    <arrow-uturn-up-icon
      class="w-4 h-4 mr-2 shrink-0 text-blue-700 rotate-90"
    />
    <div class="flex flex-wrap">
      <div class="flex mb-2">
        <input
          type="number"
          class="border rounded-md text-sm w-20 border-gray-300 px-1 py-1 mr-1"
          placeholder="0"
          :value="input.amount"
          @input="event => changeInput('amount', event.target.value)"
        />

        <select
          :value="input.unit"
          @input="event => changeInput('unit', event.target.value)"
          class="w-full rounded-md border-gray-300 py-1 pl-2 pr-10 text-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
        >
          <option disabled value="">Please select one</option>
          <option v-for="unit in units" :value="unit.id">
            {{ unit.display }}
          </option>
        </select>
      </div>
      <select
        :value="input.modifier"
        @input="event => changeInput('modifier', event.target.value)"
        class="w-full rounded-md border-gray-300 py-1 pl-2 pr-10 text-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
      >
        <option disabled value="">Please select one</option>
        <option v-for="modifier in modifiers" :value="modifier.id">
          {{ modifier.display }}
        </option>
      </select>
    </div>
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

  computed: {
    modifiers() {
      return this.meta('modifiers', [])
    },

    units() {
      return this.meta('units', [])
    },
  },

  methods: {
    defaults() {
      return {
        amount: null,
        unit: null,
        modifier: null,
      }
    },

    quicklook(input, condition, clause) {
      let amount = input.amount
      let unit = clause.meta.units.find(u => u.id === input.unit)?.display

      let modifier = clause.meta.modifiers.find(
        m => m.id === input.modifier
      )?.display

      return (amount ?? '?') + ' ' + (unit ?? '?') + ' ' + (modifier ?? '?')
    },
  },
}
</script>
