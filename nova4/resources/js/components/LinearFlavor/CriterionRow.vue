<template>
  <div class="flex bg-gray-100 rounded mr-2 relative pr-1 group">
    <slot name="selector"></slot>
    <button
      @click="$emit('remove-condition')"
      class="z-10 opacity-0 group-hover:opacity-100 cursor-pointer transition duration-1000 absolute top-0 right-0 -mt-2 -mr-2 bg-red-700 p-px text-white rounded-full"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="3.5"
        stroke="currentColor"
        class="w-3 h-3"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>
</template>
