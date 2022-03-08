<template>
  <div class="refine-relative-date-wrapper">
    <div>
      <input
        class="form-control form-input form-input-bordered"
        type="number"
        name="days"
        :value="amount"
        @input="updateAmount"
      />
    </div>

    <selector @select-option="updateUnit">
      <selector-option v-for="unit in units" :key="unit.id" :id="unit.id" :display="unit.display" />
    </selector>

    <selector @select-option="updateModifier">
      <selector-option v-for="modifier in modifiers" :key="modifier.id" :id="modifier.id" :display="modifier.display" />
    </selector>
  </div>
</template>

<script>
import { Selector, SelectorOption } from '../selector';
import { uid } from '../../../mixins';

export default {
  name: 'refine-date-input',
  components: {
    Selector,
    SelectorOption,
  },
  mixins: [uid],
  props: {
    amount: {
      type: [String, Number],
      required: false,
    },
    units: {
      type: Array,
      required: true,
    },
    modifiers: {
      type: Array,
      required: true,
    },
    unit: {
      type: String,
      required: false,
    },
    modifier: {
      type: String,
      required: false,
    },
  },
  created() {
    const { modifier } = this;
    this.$emit('input', { modifier });
  },
  methods: {
    updateModifier({ selectedOptions }) {
      const selected = selectedOptions.map(({ id }) => id);
      this.$emit('input', { modifier: selected[0] });
    },
    updateAmount: function (event) {
      const amount = event.target.value;
      this.$emit('input', { amount });
    },
    updateUnit: function ({ selectedOptions }) {
      const selected = selectedOptions.map(({ id }) => id);
      this.$emit('input', { unit: selected[0] });
    },
  },
};
</script>
