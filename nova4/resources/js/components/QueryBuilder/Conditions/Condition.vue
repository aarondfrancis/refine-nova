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
      @hide="resetInternal"
    >
      <ConditionPopoverButton :filled="filled">
        <template #filled>
          <!-- X button to clear input -->
          <div
            @click.prevent="clearInput"
            class="bg-gray-400 mr-1 rounded-full"
          >
            <plus-icon class="w-3 h-3 text-white rotate-45" />
          </div>

          {{ condition.display }}

          <div class="w-px mx-1 h-4 border-l border-gray-300 shrink-0" />

          <div class="text-indigo-600">
            {{ quicklook }}
          </div>

          <chevron-down-icon class="w-3 h-3 ml-1 text-gray" />
        </template>

        <template #empty>
          <!-- Standard plus sign -->
          <div class="bg-gray-400 mr-1 rounded-full">
            <plus-icon class="w-3 h-3 text-white" />
          </div>

          {{ condition.display }}
        </template>
      </ConditionPopoverButton>

      <PopoverPanel
        v-slot="{ close }"
        class="z-20 w-72 rounded-lg shadow-lg border border-gray-300 text-sm"
      >
        <FloatArrow
          class="absolute !left-0 ml-2 z-0 bg-white w-5 h-5 rotate-45 border border-gray-300"
        />

        <div class="p-3 rounded-lg relative z-10 bg-white">
          <ClauseSelector :condition="condition" v-model="internal.clause" />
          <component
            v-if="selectedClauseObject.component"
            v-model:input="internal"
            :is="selectedClauseObject.component"
            class="mt-2"
            :condition="condition"
            :clause="selectedClauseObject"
          />

          <button
            @click="handleApply(close)"
            class="mt-4 w-full bg-indigo-600 text-white rounded-md shadow border border-indigo-500 py-1"
          >
            Apply
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
import ClauseSelector from './ClauseSelector.vue'
import { toPlainObject } from 'lodash'
import { resolveComponent } from 'vue'

export default {
  components: {
    ClauseSelector,
    ConditionPopoverButton,
    Float,
    FloatArrow,
    Popover,
    PopoverPanel,
    PopoverOverlay,
    PlusIcon,
  },

  props: {
    condition: {
      type: Object,
      required: true,
    },

    input: {
      type: Object,
      required: false,
      default() {
        return {}
      },
    },
  },

  emits: ['update:input', 'remove'],

  data() {
    return {
      // Our internal cache of the input. We don't emit
      // an update until the apply button is pressed
      internal: {},
    }
  },

  watch: {
    input: {
      deep: true,
      immediate: true,
      handler(val) {
        // Update our internal cache any time the prop changes.
        this.internal = this.modifyIncomingInput(val)
      },
    },
  },

  computed: {
    selectedClauseObject() {
      if (!this.internal.clause) {
        return {}
      }

      return (
        this.condition.meta.clauses.find(c => c.id === this.internal.clause) ??
        {}
      )
    },

    quicklook() {
      if (!this.selectedClauseObject.component) {
        return this.selectedClauseObject.display
      }
      // This is kind of wacky, but it works. We resolve the input component
      // and ask it what the quicklook text should be. Note that `this`
      // inside of the component will be null, so we have to pass in
      // all the information that might be needed.
      let component = resolveComponent(this.selectedClauseObject.component)

      if (component?.methods?.quicklook) {
        return component.methods.quicklook(
          this.internal,
          this.condition,
          this.selectedClauseObject
        )
      }
    },

    filled() {
      return !!this.internal?.clause
    },
  },

  methods: {
    modifyIncomingInput(val) {
      return JSON.parse(JSON.stringify(val))
    },

    handleApply(close) {
      this.$emit('update:input', this.internal)
      close()
    },

    // Clear our internal representation of the input. This
    // happens when the panel is closed without saving.
    resetInternal() {
      this.internal = this.modifyIncomingInput(this.input)
    },

    // Clear the input altogether. This is happens when
    // the little X button is pressed.
    clearInput() {
      this.$emit('update:input', {})
      this.$emit('remove')
    },
  },
}
</script>
