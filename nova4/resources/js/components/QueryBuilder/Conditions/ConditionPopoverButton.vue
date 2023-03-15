<template>
  <div>
    <!-- Input is empty -->
    <PopoverButton
      class="flex items-center rounded-full pl-2 pr-2 py-1 text-xs font-semibold border text-gray-500 bg-white hover:bg-gray-100 cursor-pointer"
      :class="[filled ? 'border-gray-300' : 'border-dashed border-gray-400']"
    >
      <slot v-if="filled" name="filled" />
      <slot v-if="!filled" name="empty" />
    </PopoverButton>
  </div>
</template>

<script>
import { PopoverButton } from '@headlessui/vue'

export default {
  components: {
    PopoverButton,
  },

  props: {
    filled: {
      required: true,
      type: Boolean,
    },
  },
}
</script>
