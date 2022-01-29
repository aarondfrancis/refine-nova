<script>
import { reactive, nextTick } from '@vue/composition-api';
import SelectorStore from '../../../stores/selector';

export default {
  name: 'renderless-selector',
  data() {
    return {
      selector: reactive(new SelectorStore()),
      isClosed: true,
      highlightedOption: null,
    };
  },
  provide() {
    return {
      selector: this.selector,
    };
  },
  computed: {
    selectedOptions() {
      return this.selector.selectedOptions;
    },
    firstSelectedOption() {
      return this.selectedOptions[0] || this.selector.options[0];
    },
    isOpen() {
      return !this.isClosed;
    },
    actions: function () {
      const {
        clearOptions,
        close,
        highlightNextOption,
        highlightPreviousOption,
        highlightOption,
        open,
        selectOption,
        selectedOptions,
        toggle,
        toggleOption,
      } = this;

      return {
        clearOptions,
        close,
        highlightNextOption,
        highlightPreviousOption,
        highlightOption,
        open,
        selectOption,
        selectedOptions,
        toggle,
        toggleOption,
      };
    },
    state: function () {
      const { isClosed, isOpen, selectedOptions, highlightedOption } = this;

      return {
        isClosed,
        isOpen,
        selectedOptions,
        highlightedOption,
        options: this.selector.options,
      };
    },
  },
  methods: {
    nextTick() {
      return nextTick().then(() => {
        return {
          actions: this.actions,
          ...this.state,
        };
      });
    },
    close() {
      if (!this.isClosed) {
        this.isClosed = true;
      }
      return this.nextTick();
    },
    open() {
      this.isClosed = false;
      this.highlightedOption = this.firstSelectedOption;
      return this.nextTick();
    },
    toggle() {
      if (this.isClosed) {
        this.open();
      } else {
        this.close();
      }
      return this.nextTick();
    },
    toggleOption(optionId) {
      const { selector, highlightOption } = this;
      const { selectedOption } = selector.toggleOption(optionId);
      if (selectedOption) {
        this.selectOption(optionId);
      } else {
        this.deselectOption(optionId);
      }
      return highlightOption(selector.findOption(optionId));
    },
    clearOptions() {
      this.selector.clearSelectedOptions();
    },
    deselectOption(optionId) {
      this.$emit('deselect-option', this.selector.deselectOption(optionId));
    },
    selectOption(optionId) {
      this.$emit('select-option', this.selector.selectOption(optionId));
    },
    highlightOption(option) {
      this.highlightedOption = option;
      return this.nextTick();
    },
    highlightNextOption() {
      const nextOption = this.highlightedOption?.nextOption;

      if (nextOption) {
        this.highlightedOption = nextOption;
      }
      return this.nextTick();
    },
    highlightPreviousOption() {
      const previousOption = this.highlightedOption?.previousOption;
      if (previousOption) {
        this.highlightedOption = previousOption;
      }
      return this.nextTick();
    },
  },
  render() {
    if (this.$scopedSlots?.default) {
      return this.$scopedSlots.default({
        actions: this.actions,
        ...this.state,
      });
    }
    return null;
  },
};
</script>
