<template>
  <transition v-on:before-enter="beforeEnter" v-on:before-leave="beforeLeave" v-on:enter="enter" v-on:leave="leave">
    <div ref="wrapper" v-show="show">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    show: {
      required: true,
      type: Boolean,
    },
  },

  data() {
    return {
      animating: false,
      open: null,
    };
  },

  created() {
    this.open = this.show;
  },

  methods: {
    outerHeight(el) {
      let height = el.offsetHeight;
      let style = getComputedStyle(el);

      height += parseInt(style.marginTop) + parseInt(style.marginBottom);
      return height;
    },

    beforeEnter: function () {
      this.$refs.wrapper.style.overflowY = 'hidden';
      this.$refs.wrapper.style.height = '0px';
    },

    beforeLeave: function () {
      this.$refs.wrapper.style.height = this.outerHeight(this.$refs.wrapper) + 'px';
      this.$refs.wrapper.style.overflowY = 'hidden';
    },

    enter: function (arg1, arg2) {
      let done = true ? arg1 : arg2;
      this.$nextTick(() => this.animate(true, +Date.now(), done));
    },

    leave: function (arg1, arg2) {
      let done = true ? arg1 : arg2;
      this.$nextTick(() => this.animate(false, +Date.now(), done));
    },

    animate: function (growing, start, done) {
      this.animating = true;

      let elapsedMs = +Date.now() - start;
      let progress = Math.min(elapsedMs / 350, 1);

      // https://gist.github.com/gre/1650294
      let factor = ((t) => t * t * t)(progress);

      let original = growing ? 0 : this.outerHeight(this.$refs.wrapper.children.item(0));
      let destination = growing ? this.outerHeight(this.$refs.wrapper.children.item(0)) : 0;

      let height = original + (destination - original) * factor;

      this.$refs.wrapper.style.height = height + 'px';

      if (progress === 1) {
        if (growing) {
          this.$refs.wrapper.style.height = null;
          this.$refs.wrapper.style.overflowY = null;
        }

        this.animating = false;
        this.open = growing;

        return done();
      }

      requestAnimationFrame(() => {
        this.animate(growing, start, done);
      });
    },
  },
};
</script>
