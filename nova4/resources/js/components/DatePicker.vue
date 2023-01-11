<template>
  <div>
    <input
      type="date"
      class="form-control form-input form-input-bordered"
      ref="dateTimePicker"
      :value="date"
      @change="handleChange"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: true,
  props: {
    date: {
      type: String,
      required: false,
    },
  },

  data() {
    return {
      hasError: false,
    };
  },

  methods: {
    handleChange(event) {
      // let value = event?.target?.value ?? event

      // console.log('changed', value);
      this.hasError = false;
      this.$emit('input', { time: 'asdf', date: 'test', bar: 'asdf' });
      // this.$emit('input', {date: value});
    },
    handleInputError: function () {
      this.hasError = true;
    },
  },
};
</script>
