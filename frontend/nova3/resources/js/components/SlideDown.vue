<template>
  <transition v-on:before-enter="beforeEnter" v-on:before-leave="beforeLeave" v-on:enter="enter" v-on:leave="leave">
    <div v-show="show">
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

    beforeEnter: function (wrapper) {
      wrapper.style.overflowY = 'hidden';
      wrapper.style.height = '0px';
    },

    beforeLeave: function (wrapper) {
      wrapper.style.overflowY = 'hidden';
      wrapper.style.height = wrapper.style.offsetHeight + 'px';
    },

    enter: function (wrapper, done) {
      setTimeout(() => {
        let start = +Date.now();
        this.animate(true, start, wrapper, done);
      }, 0);
    },

    leave: function (wrapper, done) {
      setTimeout(() => {
        let start = +Date.now();
        this.animate(false, start, wrapper, done);
      }, 0);
    },

    animationIsDone(growing) {
      this.animating = false;
      this.open = growing;
    },

    animate: function (growing, start, wrapper, done) {
      this.animating = true;

      let elapsedMs = +Date.now() - start;
      let progress = Math.min(elapsedMs / 350, 1);

      // https://gist.github.com/gre/1650294
      let factor = ((t) => t * t * t)(progress);

      let original = growing ? 0 : this.outerHeight(wrapper.firstChild);
      let destination = growing ? this.outerHeight(wrapper.firstChild) : 0;

      let height = original + (destination - original) * factor;

      wrapper.style.height = height + 'px';

      if (progress === 1) {
        if (growing) {
          wrapper.style.height = null;
          wrapper.style.overflowY = null;
        }

        this.animationIsDone(growing);
        return done();
      }

      requestAnimationFrame(() => {
        this.animate(growing, start, wrapper, done);
      });
    },
  },
};
</script>
