const conditionProps = {
  created() {
    if (!this.condition && !this.id) {
      throw new Error('You must provide either a condition object or an ID to the condition component');
    }
  },
  props: {
    id: {
      type: String,
      required: false,
    },
    condition: {
      type: Object,
      required: false,
    },
  },
};

export { conditionProps };
