<template>
  <nova-date-picker :date="date1" @input="handleInput" v-bind="$attrs" />
</template>

<script>
import NovaDatePicker from './nova-date-picker';

export default {
  name: 'refine-date-input',
  props: {
    date1: {
      type: String,
      required: false,
    },
  },
  components: {
    NovaDatePicker,
  },
  methods: {
    handleInput: function ({ date }) {
      this.$emit('input', { date1: date });
    },
  },
};
</script>
