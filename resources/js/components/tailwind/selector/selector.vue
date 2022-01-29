<template>
  <div>
    <renderless-selector
      v-slot="{ actions, isOpen, isClosed, selectedOptions, highlightedOption, options }"
      @select-option="$emit('select-option', arguments[0])"
      @deselect-option="$emit('deselect-option', arguments[0])"
    >
      <div class="refine-selector-wrapper">
        <!-- Select dropdown -->
        <div
          class="refine-selector"
          :class="innerClass"
          :id="`listbox-${selectorId}`"
          v-click-away="actions.close"
          :aria-labelledby="buttonId"
        >
          <multi-selector-button
            v-if="isMultiSelect"
            :id="buttonId"
            :isOpen="isOpen"
            :selectedOptions="selectedOptions"
            @toggle="toggle(actions)"
            @open="open(actions)"
            @deselect-option="deselectOption(...arguments, actions)"
            ref="button"
          />
          <selector-button
            v-else
            :id="buttonId"
            :isOpen="isOpen"
            :display="selectedOptions[0] ? selectedOptions[0].display : ''"
            @toggle="toggle(actions)"
            @open="open(actions)"
            ref="button"
          />
          <selector-listbox
            :selectedOption="selectedOptions[0]"
            :isClosed="isClosed"
            ref="listBox"
            @highlight-next-option="highlightNextOption(actions)"
            @highlight-previous-option="highlightPreviousOption(actions)"
            @select-option="selectOption(highlightedOption.id, actions)"
            @close="close(actions)"
            v-slot="{ createItemId }"
          >
            <selector-list-item
              v-for="option in options"
              :id="createItemId(option.id)"
              :key="option.id"
              :optionId="option.id"
              :optionDisplay="option.display"
              :selected="isSelected(option, selectedOptions)"
              :isHighlighted="highlightedOption && option.id === highlightedOption.id"
              :ref="option.id"
              @mouseenter="actions.highlightOption(option)"
              @mouseleave="actions.highlightOption(null)"
              @click="selectOption(option.id, actions)"
            />
          </selector-listbox>
        </div>
        <!-- Custom options -->
        <div class="refine-selector-custom-options-wrapper">
          <slot></slot>
        </div>
      </div>
    </renderless-selector>
  </div>
</template>
<script>
import RenderlessSelector from '../../renderless/selector';
import { uid } from '../../../mixins';
import SelectorButton from './selector-button';
import SelectorListbox from './selector-listbox';
import SelectorListItem from './selector-list-item';
import MultiSelectorButton from './multi-selector-button.vue';
import ClickAway from '../../../directives/click-away';

export default {
  name: 'selector',
  mixins: [uid],
  inject: ['builderModeActive'],
  props: {
    isMultiSelect: {
      type: Boolean,
      required: false,
      default: false,
    },
    innerClass: {
      type: String,
      required: false,
      default: '',
    },
  },
  computed: {
    selectorId() {
      return this.uid;
    },
    buttonId() {
      return `button-${this.selectorId}`;
    },
  },
  mounted() {
    if (this.builderModeActive) {
      this.$refs.button.focus();
    }
  },
  directives: {
    clickAway: new ClickAway(),
  },
  methods: {
    isSelected(option, selectedOptions) {
      let selected = false;

      selectedOptions.forEach((selectedOption) => {
        if (option.id === selectedOption.id) {
          selected = true;
        }
      });

      return selected;
    },
    deselectOption(optionId, { toggleOption }) {
      toggleOption(optionId);
    },
    async selectOption(optionId, actions) {
      const { clearOptions, selectOption, toggleOption } = actions;
      const { isMultiSelect } = this;

      if (isMultiSelect) {
        toggleOption(optionId);
      } else {
        clearOptions();
        selectOption(optionId);
        this.close(actions);
      }
    },
    scrollIntoView(optionId) {
      if (optionId) {
        const listItem = this.$refs[optionId][0];
        listItem.scrollIntoView();
      }
    },
    async close({ close }) {
      const { isClosed } = await close();
      if (isClosed) {
        this.$refs.button?.focus();
      }
    },
    async open({ open }) {
      const { selectedOption } = await open();
      this.$refs.listBox.focus();
      this.scrollIntoView(selectedOption?.id);
    },
    async toggle({ toggle }) {
      const { isOpen, selectedOption } = await toggle();

      if (isOpen) {
        this.$refs.listBox.focus();
        this.scrollIntoView(selectedOption?.id);
      } else {
        this.$refs.button.focus();
      }
    },
    async highlightNextOption({ highlightNextOption }) {
      const { highlightedOption } = await highlightNextOption();
      this.scrollIntoView(highlightedOption?.id);
    },
    async highlightPreviousOption({ highlightPreviousOption }) {
      const { highlightedOption } = await highlightPreviousOption();
      this.scrollIntoView(highlightedOption?.id);
    },
  },
  components: {
    MultiSelectorButton,
    RenderlessSelector,
    SelectorListItem,
    SelectorButton,
    SelectorListbox,
  },
};
</script>
