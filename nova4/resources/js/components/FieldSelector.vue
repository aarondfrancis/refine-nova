<template>
  <Dropdown
    :handle-internal-clicks="false"
    class="flex h-9 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
    dusk="field-selector"
    @menu-closed="menuClosed"
  >
    <span class="sr-only">Filter Dropdown</span>
    <DropdownTrigger class="toolbar-button px-2">
      <slot>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z"
          />
        </svg>
      </slot>
    </DropdownTrigger>

    <template #menu>
      <DropdownMenu width="180">
        <ScrollWrap :height="350" class="bg-white dark:bg-gray-900">
          <div
            ref="theForm"
            class="divide-y divide-gray-200 dark:divide-gray-800 divide-solid"
          >
            <!-- Per Page -->
            <div class="pt-2 pb-3">
              <h3 class="px-3 text-xs uppercase font-bold tracking-wide">
                Download As
              </h3>
              <div class="mt-1 px-3">
                <CheckboxWithLabel
                  class="mt-2"
                  v-for="(option, i) in value"
                  :key="option.name"
                  :name="option.name"
                  :checked="option.checked"
                  @input="toggle($event, i)"
                >
                  {{ option.label }}
                </CheckboxWithLabel>
              </div>
            </div>
          </div>
        </ScrollWrap>
      </DropdownMenu>
    </template>
  </Dropdown>
</template>
<script>
import forEach from 'lodash/forEach'
import isEqual from 'lodash/isEqual'

let last = []

export default {
  props: {
    fields: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selected: [],
      value: this.fields,
    }
  },
  created() {
    last = this.filtered()
  },
  methods: {
    filtered() {
      return this.fields
        .filter(f => f.checked)
        .map(f => f.value)
        .sort()
    },

    toggle(event, i) {
      this.value[i].checked = event.target.checked
    },

    menuClosed() {
      let now = this.filtered()

      if (isEqual(last, now)) {
        return
      }

      last = now

      this.updateQueryString({
        refined_fields: now,
      })
    },

    // This is basically copied from the InteractsWithQueryString
    // Nova mixin, but with a few modifications.
    updateQueryString(value) {
      let searchParams = new URLSearchParams(window.location.search)
      let page = this.$inertia.page

      forEach(value, (v, i) => {
        searchParams.set(i, v || '')
      })

      if (page.url !== `${window.location.pathname}?${searchParams}`) {
        page.url = `${window.location.pathname}?${searchParams}`

        window.history.pushState(
          page,
          '',
          `${window.location.pathname}?${searchParams}`
        )
      }

      Nova.$emit('query-string-changed', searchParams)
      Nova.$emit('refresh-resources')
    },
  },
}
</script>
