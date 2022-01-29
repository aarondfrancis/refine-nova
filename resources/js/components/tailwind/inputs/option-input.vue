<template>
  <selector
    :isMultiSelect="multiple"
    @select-option="selectOption"
    @deselect-option="deselectOption"
  >
    <selector-option
      v-for="{ id, display } in options"
      :key="id"
      :id="id"
      :display="display"
      :selected="isSelected(id)"
    />
  </selector>
</template>

<script>
import { Selector, SelectorOption } from "../selector";

export default {
  name: "refine-option-input",
  components: {
    Selector,
    SelectorOption,
  },
  props: {
    selected: {
      type: Array,
      required: false,
      default: () => [],
    },
    options: {
      type: Array,
      required: true,
    },
    multiple: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  methods: {
    selectOption({ selectedOptions }) {
      const selected = selectedOptions.map(({ id }) => id);
      this.$emit("input", { selected });
    },
    deselectOption({ selectedOptions }) {
      const selected = selectedOptions.map(({ id }) => id);
      this.$emit("input", { selected });
    },
    isSelected(id) {
      let selected = false;

      this.selected.forEach((selectedId) => {
        if (selectedId === id) {
          selected = true;
        }
      });

      return selected;
    },
  },
};
</script>
