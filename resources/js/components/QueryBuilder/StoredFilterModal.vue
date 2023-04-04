<template>
  <button
    @click="openModal"
    class="flex items-center ml-auto mr-2 rounded px-2 py-1 text-sm text-gray-500 bg-white hover:bg-gray-100 cursor-pointer"
  >
    <plus-icon class="w-3 h-3" />
    Save this filter
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
              class="filter-none w-full max-w-xl transform overflow-hidden rounded bg-white border text-left align-middle shadow-lg transition-all"
            >
              <DialogTitle class="text-gray-900 bg-white p-4">
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
                      class="form-control form-input form-input-bordered w-full"
                      placeholder="My favorite customers"
                      aria-describedby="name-description"
                    />
                  </div>
                  <p class="mt-2 text-sm text-gray-500" id="name-description">
                    Enter a memorable name for your filter.
                  </p>
                </div>

                <!--                <SwitchGroup-->
                <!--                  as="div"-->
                <!--                  class="mt-4 flex items-center justify-between"-->
                <!--                >-->
                <!--                  <span class="flex flex-grow flex-col">-->
                <!--                    <SwitchLabel-->
                <!--                      as="span"-->
                <!--                      class="text-base font-semibold text-gray-900"-->
                <!--                      passive-->
                <!--                    >-->
                <!--                      Make filter public-->
                <!--                    </SwitchLabel>-->
                <!--                    <SwitchDescription-->
                <!--                      as="span"-->
                <!--                      class="text-sm text-gray-500 pr-8"-->
                <!--                    >-->
                <!--                      Allow anyone to see this filter.-->
                <!--                    </SwitchDescription>-->
                <!--                  </span>-->
                <!--                  <Switch-->
                <!--                    v-model="shared"-->
                <!--                    :class="[-->
                <!--                      shared ? 'bg-primary-600' : 'bg-gray-200',-->
                <!--                      'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2',-->
                <!--                    ]"-->
                <!--                  >-->
                <!--                    <span-->
                <!--                      aria-hidden="true"-->
                <!--                      :class="[-->
                <!--                        shared ? 'translate-x-5' : 'translate-x-0',-->
                <!--                        'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',-->
                <!--                      ]"-->
                <!--                    />-->
                <!--                  </Switch>-->
                <!--                </SwitchGroup>-->
              </div>

              <div class="p-4 flex justify-end">
                <button
                  type="button"
                  class="flex items-center border border-gray-300 shadow px-3 py-1 rounded mr-4"
                  @click="closeModal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  class="flex py-1 px-3 shadow rounded text-white focus:outline-none ring-primary-200 dark:ring-gray-600 focus:ring bg-primary-500 hover:bg-primary-400 active:bg-primary-600 dark:text-gray-800 font-bold"
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
import { useBlueprintStore } from '@/stores/BlueprintStore'

import { PlusIcon } from '@heroicons/vue/20/solid'
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
      name: null,
      shared: false,
    }
  },

  methods: {
    save() {
      let store = useBlueprintStore()

      Nova.request()
        .post('/nova-vendor/refine-nova/stored', {
          name: this.name,
          state: {
            type: this.filter.type,
            blueprint: store.blueprint,
            // This is the FQCN of the Nova resource, if they are using
            // the AdHocFilter.
            resource: this.filter.resource,
          },
        })
        .then(({ data }) => {
          console.log(data)
        })

      // post
      // add to the store
      // select in the store
      // dont update the table because it's already good

      // store.saveCurrentBlueprint(this.name)

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
