export default {
  name: 'renderless-refinement',
  inject: ['updateInput'],
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  provide() {
    return {
      refinementId: this.id,
    };
  },
  render() {
    if (this.$slots?.default) {
      return this.$slots.default();
    }
  },
};
