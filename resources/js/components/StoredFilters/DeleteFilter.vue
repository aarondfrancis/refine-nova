<template>
  <button
    @click="openModal"
    class="flex items-center ml-auto mr-2 rounded px-2 py-1 text-sm text-gray-500 bg-white hover:bg-gray-100 cursor-pointer"
  >
    <plus-icon class="w-4 h-4 rotate-45 mr-px" />
    Remove this filter
  </button>

  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-50">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 backdrop-blur-sm backdrop-brightness-75" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"
            >
              <div class="sm:flex sm:items-start">
                <div
                  class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
                >
                  <ExclamationTriangleIcon
                    class="h-6 w-6 text-red-600"
                    aria-hidden="true"
                  />
                </div>
                <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle
                    as="h3"
                    class="text-base font-semibold leading-6 text-gray-900"
                    >Delete filter
                  </DialogTitle>
                  <div class="mt-2">
                    <p class="text-gray-500">
                      Are you sure you want to delete this filter? It will no
                      longer appear as one of your saved filters.
                    </p>
                    <p class="mt-4 text-gray-500">
                      You can always re-create it.
                    </p>
                  </div>
                </div>
              </div>
              <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                  @click="destroy"
                >
                  Delete
                </button>
                <button
                  type="button"
                  class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  @click="closeModal"
                >
                  Cancel
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
import { useBlueprintStore } from '@/stores/BlueprintStore'

import { PlusIcon } from '@heroicons/vue/20/solid'
import { ExclamationTriangleIcon } from '@heroicons/vue/24/outline'

import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
  Switch,
  SwitchLabel,
  SwitchDescription,
  SwitchGroup,
} from '@headlessui/vue'

export default {
  components: {
    PlusIcon,
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    Switch,
    SwitchLabel,
    SwitchDescription,
    SwitchGroup,
    ExclamationTriangleIcon,
  },

  props: {
    filter: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      isOpen: false,
    }
  },

  methods: {
    destroy() {
      let store = useBlueprintStore()
      let id = store.selectedStoredFilter.id

      store.removeStoredFilter(id)

      // Nova.request()
      //   .delete(`/nova-vendor/refine-nova/stored/${id}`)
      //   .then(function () {
      //     store.removeStoredFilter(id)
      //     Nova.success('Filter removed.')
      //   })

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
