<template>
  <div class="refine-selector-listbox-wrapper">
    <ul
      tabindex="-1"
      role="listbox"
      :aria-activedescendant="selectedOption ? createItemId(selectedOption.id) : ''"
      class="refine-selector-listbox shadow list-reset border border-50 rounded-lg"
      :class="{ 'refine-selector-listbox-hidden': isClosed }"
      ref="listBox"
      @keydown.arrow-down.stop.prevent="$emit('highlight-next-option')"
      @keydown.arrow-up.stop.prevent="$emit('highlight-previous-option')"
      @keydown.enter.stop.prevent="$emit('select-option')"
      @keydown.escape.stop.prevent="$emit('close')"
      @keydown.tab.stop.prevent="$emit('close')"
    >
      <slot :createItemId="createItemId"></slot>
    </ul>
  </div>
</template>

<script>
 import { uid } from '../../../mixins';

 export default {
   name: 'selector-listbox',
   mixins: [uid],
   props: {
     isClosed: {
       type: Boolean,
       required: false,
       default: true,
     },
     selectedOption: {
       type: Object,
       required: false,
     },
   },
   methods: {
     focus: function() {
       this.$refs.listBox.focus();
     },
     createItemId: function(optionId) {
       return `listbox-option-${this.uid}-${optionId}`
     },
   },
 };
</script>
