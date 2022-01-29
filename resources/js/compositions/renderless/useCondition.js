import { inject, provide, onUnmounted } from '@vue/composition-api';

export default (id, props, context) => {
  const blueprint = inject('blueprint');
  const builderModeActive = inject('builderModeActive');

  if (!id) {
    throw new Error('useCondition requires an id.');
  }

  if (!context) {
    throw new Error('useCondition requires a Vue context.');
  }

  if (!blueprint) {
    throw new Error('Conditions must be rendered within a query.');
  }

  // in builder mode we don't add/remove/update conditions on lifecycle methods
  // instead this behavior is delegated to the query builder.
  let criterion;
  if (!builderModeActive) {
    criterion = blueprint.addCriterion({
      id,
      depth: 0,
    });
  } else {
    criterion = blueprint.findCriterion(props.uid);
  }

  const updateInput = (updates, refinementId) => blueprint.updateInput(criterion, updates, refinementId);
  const switchClause = (clause) => blueprint.switchClause(criterion, clause);
  const switchRefinement = (oldRefinementId, newRefinementId) => {
    blueprint.switchRefinement(criterion, oldRefinementId, newRefinementId);
  };

  provide('criterion', criterion);
  provide('criterionMeta', props.meta)
  provide('updateInput', updateInput);
  provide('switchRefinement', switchRefinement);

  // This is overriden by refinement components
  provide('refinementId', null);

  onUnmounted(() => {
    // Again, in builder mode adding/removing criterions
    // is relegated to the query builder.
    if(!builderModeActive) {
      blueprint.removeCriterion(blueprint.indexOfCriterion(criterion));
    }
  });

  // Renderless condition doesn't accept a criterion prop, this
  // reference to props.condition is an outdated interface that is
  // only used by the non builder mode components. 
  // TODO: update non builder components to use the same props
  // as renderless condition. (see conditionProps in mixins/condition.js)
  let clauses = null;
  if (props?.condition?.meta?.clauses) {
    clauses = props.condition.meta.clauses.map((clause) => {
      return clause.component;
    });
  }

  return () => {
    if (context.slots.default) {
      return context.slots.default({ 
        clauses, 
        criterion, 
        updateInput, 
        switchClause 
      });
    }
    return null;
  };
};
