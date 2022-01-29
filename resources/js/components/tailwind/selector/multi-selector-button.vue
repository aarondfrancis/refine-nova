<template>
    <div
        :id="id"
        aria-haspopup="listbox"
        :aria-label="label()"
        :aria-expanded="isOpen"
        class="form-control form-select w-full text-left flex items-center"
        ref="button"
        @click.prevent="$emit('toggle')"
        @keydown.enter.stop.prevent="$emit('open')"
        @keydown.arrow-down.stop.prevent="$emit('open')"
        tabindex="0"
    >
    <span v-if="selectedOptions.length === 0" class="refine-multi-selector-button-placeholder">
      Choose an option
    </span>
        <span
            v-else
            v-for="{ id, display } in selectedOptions"
            class="refine-multi-selector-button-selected"
            :key="id"
        >
      {{ display }}
      <span
          class="refine-multi-selector-button-deselect-icon-wrapper"
          @click.prevent="$emit('deselect-option', id)"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="refine-multi-selector-button-deselect-icon" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </span>
    </span>
    </div>
</template>

<script>
    export default {
        name: 'multi-selector-button',
        props: {
            id: {
                type: String,
                required: true,
            },
            isOpen: {
                type: Boolean,
                required: true,
            },
            selectedOptions: {
                type: Array,
                required: true,
            },
        },
        methods: {
            label: function () {
                const combinedOptions = this.selectedOptions
                    .map(({display}) => display)
                    .join(', ');

                const labelText = `${combinedOptions} Selected`

                return this.selectedOptions.length === 0 ? 'Choose an option' : labelText;
            },

            focus: function () {
                this.$refs.button.focus();
            },
        },
    }
</script>
