<template>
  <select
    :value="modelValue"
    @input="event => $emit('update:modelValue', event.target.value)"
    class="w-full rounded-md border-gray-300 py-1 pl-2 pr-10 text-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
  >
    <option disabled value="">Please select one</option>
    <option v-for="clause in condition.meta.clauses" :value="clause.id">
      {{ clause.display }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    condition: {
      type: Object,
      required: true,
    },

    modelValue: {
      type: String,
      required: false,
      default() {
        return ''
      },
    },
  },

  emits: ['update:modelValue'],
}
</script>
