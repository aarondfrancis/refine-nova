import { inject, onUnmounted } from '@vue/composition-api';

export default (id, props, context) => {
  const criterion = inject('criterion');
  const updateInput = inject('updateInput');
  const refinementId = inject('refinementId');
  const builderModeActive = inject('builderModeActive');
  const setValue = (input) => {
    updateInput(input, refinementId);
  };

  if (!criterion) {
    throw new Error('A clause must be used within a criterion.');
  }

  if (!builderModeActive) {
    updateInput({ clause: id }, refinementId);
    // eslint-disable-next-line no-unused-vars
    const { clause, ...values } = criterion.input;
    if (Object.keys(props).length > 0 && Object.keys(values).length === 0) {
      updateInput({ ...props }, refinementId);
    }
  }

  onUnmounted(() => {
    if (!builderModeActive) {
      // only mark the clause as empty if when unmounting no other
      // clause has been selected. Mounting/unmounting happens in the
      // order that the components were rendered.
      if (criterion.input.clause === id) {
        updateInput({ clause: undefined }, refinementId);
      }
    }
  });

  return () => {
    if (context.slots.default) {
      return context.slots.default({
        setValue,
        ...criterion.input,
      });
    }
    return null;
  };
};
