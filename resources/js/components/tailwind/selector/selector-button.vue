<template>
  <button
    :id="id"
    type="button"
    aria-haspopup="listbox"
    :aria-expanded="isOpen"
    :aria-label="label()"
    class="form-control form-select w-full text-left"
    ref="button"
    @click.prevent="$emit('toggle')"
    @keydown.arrow-down.stop.prevent="$emit('open')"
  >
    <span v-if="display.length === 0" class="refine-selector-button-placeholder"> Choose an option </span>
    <span v-else class="refine-selector-button-selected">
      {{ display }}
    </span>
  </button>
</template>

<script>
export default {
  name: 'selector-button',
  props: {
    id: {
      type: String,
      required: true,
    },
    isOpen: {
      type: Boolean,
      required: true,
    },
    display: {
      type: String,
      required: true,
    },
  },
  methods: {
    label: function () {
      return this.display ? `${this.display} Selected` : 'Choose an option';
    },
    focus: function () {
      this.$refs.button.focus();
    },
  },
};
</script>
