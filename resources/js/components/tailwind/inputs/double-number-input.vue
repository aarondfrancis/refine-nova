<template>
  <div class="refine-double-number-wrapper">
    <number-input :meta="meta" :value="value1" @input="updateFirstValue" />
    <span class="refine-double-number-joiner" v-if="joinWord">{{ joinWord }}</span>
    <number-input :meta="meta" :value="value2" @input="updateSecondValue" />
  </div>
</template>

<script>
import NumberInput from './number-input';

export default {
  name: 'refine-double-number-input',
  computed: {
    joinWord() {
      // @TODO Meta helper
      return Object.prototype.hasOwnProperty.call(this.meta, 'joiner') ? this.meta.joiner : 'and';
    },
  },
  methods: {
    updateFirstValue: function ({ value1 }) {
      this.$emit('input', { value1: value1 });
    },
    updateSecondValue: function ({ value1 }) {
      this.$emit('input', { value2: value1 });
    },
  },
  props: {
    value1: {
      type: [String, Number],
      required: false,
    },
    value2: {
      type: [String, Number],
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
  components: {
    NumberInput,
  },
};
</script>
