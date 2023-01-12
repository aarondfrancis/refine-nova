<template>
  <date-time-picker
    class="w-full form-control form-input form-input-bordered"
    autocomplete="off"
    :value="date"
    alt-format="Y-m-d"
    date-format="Y-m-d"
    :placeholder="placeholder"
    :enable-time="false"
    :enable-seconds="false"
    @input.prevent=""
    @change="handleChange"
  />
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
      default: new Date().toISOString().split('T')[0],
    },
  },

  methods: {
    handleChange(value) {
      this.$emit('input', { value })
    },
  },
}
</script>
