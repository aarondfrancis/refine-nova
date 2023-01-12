<template>
  <button>
    <heroicon-plus />
    <div class="pt-px text-xs font-bold">{{ __('Or') }}</div>
  </button>
</template>

<script>
import HeroiconPlus from './HeroIconPlus'

export default {
  inheritAttrs: true,
  components: {
    HeroiconPlus,
  },
}
</script>
