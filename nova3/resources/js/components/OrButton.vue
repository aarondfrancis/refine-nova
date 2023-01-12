<template>
  <button v-on="$listeners">
    <heroicon-plus />
    <span class="pt-px">{{ __('Or') }}</span>
  </button>
</template>

<script>
import HeroiconPlus from './HeroIconPlus';

export default {
  inheritAttrs: true,
  components: {
    HeroiconPlus,
  },
};
</script>
