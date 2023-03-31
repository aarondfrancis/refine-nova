<template>
  <div class="flex items-center">
    <arrow-uturn-up-icon
      class="w-4 h-4 mr-2 shrink-0 text-primary-500 rotate-90"
    />
    <div class="flex flex-wrap">
      <div class="flex mb-2">
        <input
          type="number"
          class="border rounded-md text-sm w-20 mr-2 w-0 border-gray-300 px-1 py-1"
          placeholder="0"
          :value="input.amount"
          @input="event => changeInput('amount', event.target.value)"
        />

        <div class="flex relative">
          <select
            :value="input.unit"
            @input="event => changeInput('unit', event.target.value)"
            class="w-full block form-control form-select form-control-sm form-select-bordered"
          >
            <option disabled value="">Please select one</option>
            <option v-for="unit in units" :value="unit.id">
              {{ unit.display }}
            </option>
          </select>
          <svg
            class="flex-shrink-0 pointer-events-none form-select-arrow"
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="6"
            viewBox="0 0 10 6"
          >
            <path
              class="fill-current"
              d="M8.292893.292893c.390525-.390524 1.023689-.390524 1.414214 0 .390524.390525.390524 1.023689 0 1.414214l-4 4c-.390525.390524-1.023689.390524-1.414214 0l-4-4c-.390524-.390525-.390524-1.023689 0-1.414214.390525-.390524 1.023689-.390524 1.414214 0L5 3.585786 8.292893.292893z"
            ></path>
          </svg>
        </div>
      </div>
      <div class="flex w-full relative">
        <select
          :value="input.modifier"
          @input="event => changeInput('modifier', event.target.value)"
          class="w-full block form-control form-select form-control-sm form-select-bordered"
        >
          <option disabled value="">Please select one</option>
          <option v-for="modifier in modifiers" :value="modifier.id">
            {{ modifier.display }}
          </option>
        </select>
        <svg
          class="flex-shrink-0 pointer-events-none form-select-arrow"
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="6"
          viewBox="0 0 10 6"
        >
          <path
            class="fill-current"
            d="M8.292893.292893c.390525-.390524 1.023689-.390524 1.414214 0 .390524.390525.390524 1.023689 0 1.414214l-4 4c-.390525.390524-1.023689.390524-1.414214 0l-4-4c-.390524-.390525-.390524-1.023689 0-1.414214.390525-.390524 1.023689-.390524 1.414214 0L5 3.585786 8.292893.292893z"
          ></path>
        </svg>
      </div>
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
