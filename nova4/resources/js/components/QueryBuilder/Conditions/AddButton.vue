<template>
  <Popover>
    <Float
      portal
      arrow
      placement="bottom-start"
      :offset="10"
      enter="transition duration-100 ease-out"
      enter-from="scale-90 opacity-0 origin-top-left"
      enter-to="scale-100 opacity-100"
      leave="transition duration-100 ease-in"
      leave-from="scale-100 opacity-100 origin-top-left"
      leave-to="scale-90 opacity-0"
    >
      <ConditionPopoverButton
        class="opacity-75 hover:opacity-100"
        :filled="false"
      >
        <template #empty>
          <!-- Standard plus sign -->
          <div class="bg-gray-400 mr-1 rounded-full">
            <plus-icon class="w-3 h-3 text-white" />
          </div>
          Add condition
        </template>
      </ConditionPopoverButton>

      <PopoverPanel
        v-slot="{ close }"
        class="z-20 w-72 rounded-lg shadow-lg border border-gray-300 text-sm"
      >
        <FloatArrow
          class="absolute !left-0 ml-2 z-0 bg-white w-5 h-5 rotate-45 border border-gray-300"
        />

        <div class="py-2 px-2 rounded-lg relative z-10 bg-white">
          <button
            v-for="condition in conditions"
            @click.prevent="$emit('add', condition) || close()"
            class="py-1 px-2 rounded w-full hover:bg-indigo-600 hover:text-white text-left"
          >
            {{ condition.display }}
          </button>
        </div>
      </PopoverPanel>
    </Float>
  </Popover>
</template>

<script>
import { PlusIcon } from '@heroicons/vue/24/outline'
import { Popover, PopoverPanel, PopoverOverlay } from '@headlessui/vue'
import { Float, FloatArrow } from '@headlessui-float/vue'
import ConditionPopoverButton from './ConditionPopoverButton.vue'

export default {
  components: {
    ConditionPopoverButton,
    Float,
    FloatArrow,
    Popover,
    PopoverPanel,
    PopoverOverlay,
    PlusIcon,
  },

  emits: ['add'],

  props: {
    groupType: {
      type: String,
      required: true,
    },
    conditions: {
      type: Array,
      required: true,
    },
  },
}
</script>
