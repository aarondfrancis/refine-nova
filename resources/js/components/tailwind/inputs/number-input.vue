<template>
  <input
    class="form-control form-input form-input-bordered"
    type="number"
    :value="currentValue"
    @input="handleInputChange"
    v-bind="metaAttributes"
  />
</template>

<script>
export default {
  name: 'refine-number-input',
  data() {
    return {
      currentValue: this.value,
    };
  },
  props: {
    value: {
      type: Number,
      required: false,
    },
    meta: {
      type: Object,
      required: false,
      default: () => {
        return {};
      },
    },
  },
  computed: {
    metaAttributes() {
      // A set of allowable attributes that can be passed
      // in from the outside, usually the backend.
      return ['min', 'max', 'step', 'placeholder'].reduce((carry, prop) => {
        if (Object.prototype.hasOwnProperty.call(this.meta, prop)) {
          if (this.meta[prop] !== '') {
            carry[prop] = this.meta[prop];
          }
        }

        return carry;
      }, {});
    },
  },
  methods: {
    handleInputChange: function (event) {
      const inputValue = event.target.value;
      const newValue = Number(inputValue);

      if (isNaN(newValue)) {
        // Don't emit. Only update with valid inputs so the
        // blueprint won't be updated with garbage and
        // we won't throw proptype errors.
        this.currentValue = inputValue;
      } else {
        this.currentValue = newValue;
        this.$emit('input', { value1: newValue });
      }
    },
  },
};
</script>
