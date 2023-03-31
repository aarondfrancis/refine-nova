<template>
  <div>
    <Datepicker
      :modelValue="modelValue"
      @update:modelValue="event => $emit('update:modelValue', event)"
      :auto-apply="true"
      :enable-time-picker="false"
      :month-change-on-scroll="false"
      model-type="yyyy-MM-dd"
      :clearable="false"
      :week-start="0"
      :alt-position="
        () => {
          return {
            top: '13px',
            left: '0px',
            transform: 'translate(0,0)',
          }
        }
      "
      format="yyyy-MM-dd"
      :teleport="`#${uid}`"
    >
      <template #arrow-right>
        <chevron-right-icon class="w-4 h-4 text-gray-400" />
      </template>
      <template #arrow-left>
        <chevron-left-icon class="w-4 h-4 text-gray-400" />
      </template>
      <template #dp-input="{ value, onInput, onEnter, onTab, onClear }">
        <input
          type="text"
          placeholder="Select date"
          :class="inputClass"
          class="border rounded-md text-sm border-gray-300 pl-7 pr-0 py-1"
          :value="value"
        />
      </template>
      <template #input-icon>
        <calendar-days-icon class="w-4 h-4 ml-2" />
      </template>
    </Datepicker>
    <div :id="uid" class="relative" />
  </div>
</template>

<script>
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  CalendarDaysIcon,
} from '@heroicons/vue/20/solid'
import Datepicker from '@vuepic/vue-datepicker'
import uid from '@/lib/uid'

export default {
  components: {
    ChevronRightIcon,
    ChevronLeftIcon,
    CalendarDaysIcon,
    Datepicker,
  },

  emits: ['update:modelValue'],

  props: {
    inputClass: {
      required: false,
      type: String,
      default() {
        return 'w-32'
      },
    },
    modelValue: {
      required: true,
    },
  },

  data() {
    return {
      uid: uid(),
    }
  },
}
</script>
