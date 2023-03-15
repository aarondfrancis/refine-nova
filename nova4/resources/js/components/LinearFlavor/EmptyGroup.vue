<template>
  <div class="bg-gray-100 px-2 py-1 rounded-md">
    <button class="flex" @click="addGroup">Click to add a filter</button>
  </div>
</template>

<script>
export default {
  props: ['addGroup'],
}
</script>
