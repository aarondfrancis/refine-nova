export default {
  name: 'renderless-refinement',
  inject: ['updateInput'],
  props: {
    id: {
      type: String,
      required: true,
    }
  },
  provide() {
    return {
      refinementId: this.id,
    };
  },
  render() {
    if (this.$scopedSlots?.default) {
      return this.$scopedSlots.default();
    }
  }
};
