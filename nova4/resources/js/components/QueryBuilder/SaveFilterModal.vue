<template>
  <button
    @click="openModal"
    class="flex items-center ml-auto mr-2 rounded px-2 py-1 text-sm text-gray-500 bg-white hover:bg-gray-100 cursor-pointer"
  >
    <plus-icon class="w-3 h-3" />
    Save this filter
  </button>

  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text font-medium text-gray-900 bg-white p-4"
              >
                Save filter
              </DialogTitle>
              <div
                class="p-4 bg-gray-100 border-t border-b flex flex-col space-y-6"
              >
                <div>
                  <label
                    for="name"
                    class="text-base font-semibold text-gray-900"
                    >Filter name</label
                  >
                  <div class="mt-2">
                    <input
                      v-model="name"
                      type="name"
                      name="name"
                      id="name"
                      class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="My favorite customers"
                      aria-describedby="name-description"
                    />
                  </div>
                  <p class="mt-2 text-sm text-gray-500" id="name-description">
                    Enter a memorable name for your filter.
                  </p>
                </div>
              </div>

              <div class="p-4 flex justify-between">
                <button
                  type="button"
                  class="flex items-center border border-gray-300 shadow px-3 py-1 rounded text-sm"
                  @click="closeModal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  class="flex border bg-indigo-600 text-white rounded shadow border border-indigo-500 py-1 px-3"
                  @click="save"
                >
                  Save
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { useBlueprintStore } from '../stores/BlueprintStore'

import { PlusIcon } from '@heroicons/vue/20/solid'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

export default {
  components: {
    PlusIcon,
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
  },

  data() {
    return {
      isOpen: false,
      name: null,
    }
  },

  methods: {
    save() {
      useBlueprintStore().saveCurrentBlueprint(this.name)

      this.closeModal()
    },

    openModal() {
      this.isOpen = true
    },

    closeModal() {
      this.isOpen = false
    },
  },
}
</script>
