const optionProps = {
  props: {
    id: {
      type: String,
      required: true,
    },
    display: {
      type: String,
      required: false,
    },
    selected: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};

export { optionProps };
