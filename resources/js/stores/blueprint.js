const getNextUid = function () {
  const r1 = ~~(Math.random() * (10000) + 10000);
  const r2 = ~~(Date.now() / 1000);

  return `${r1}-${r2}`;
}

const criterion = (id, depth, meta, refinements) => {
  const uid = getNextUid();
  const [firstRefinement] = refinements || [];

  const condition = {
    condition_id: id,
    depth,
    type: 'criterion',
    input: {
      clause: meta?.clauses[0].id,
      ...(firstRefinement && {
        [firstRefinement.id]: {
          clause: firstRefinement?.meta?.clauses[0]?.id,
        },
      }),
    },
    uid,
  };

  return condition;
};

const or = function (depth) {
  depth = depth === undefined ? 0 : depth;
  return {
    depth,
    type: 'conjunction',
    word: 'or',
  };
};

const and = function (depth) {
  depth = depth === undefined ? 1 : depth;
  return {
    depth,
    type: 'conjunction',
    word: 'and',
  };
};

class Blueprint {
  constructor(initialBlueprint, conditions, onChange) {
    initialBlueprint = initialBlueprint || [];
    conditions = conditions || [];

    this.conditions = conditions;

    this.blueprint = this.mapBlueprint(initialBlueprint);

    this.blueprintChanged = () => {
      if (onChange) {
        onChange([...this.blueprint]);
      }
    };
  }

  mapBlueprint(blueprint) {
    return blueprint.map((condition) => {
      return {
        uid: getNextUid(),
        ...condition,
        id: condition.condition_id,
      };
    });
  }

  updateBlueprint(newBlueprint) {
    this.blueprint = this.mapBlueprint(newBlueprint);
  }

  groupedBlueprint() {
    if (this.blueprint.length === 0) {
      return [];
    }

    const groupedBlueprint = [];

    // start with an empty group
    groupedBlueprint.push([]);

    this.blueprint.forEach((piece, index) => {
      if (piece.word === 'or') {
        groupedBlueprint.push([]);
      } else if (piece.word === 'and') {
        return;
      } else {
        groupedBlueprint[groupedBlueprint.length - 1].push({
          ...piece,
          position: index,
        });
      }
    });

    return groupedBlueprint;
  }

  indexOfCriterion({ uid }) {
    let index = -1;
    for (let i = 0; i < this.blueprint.length; i++) {
      if (this.blueprint[i].uid === uid) {
        index = i;
        break;
      }
    }
    return index;
  }

  replaceCriterion(previousIndex, nextCriterion) {
    const { meta, id, refinements } = this.findCondition(nextCriterion.id);
    const newCriterion = criterion(id, 1, meta, refinements);
    this.blueprint.splice(previousIndex, 1, newCriterion);
    this.blueprintChanged();
  }

  removeCriterion(position) {
    /**
         To support 'groups' there is some complicated logic for deleting criterion.

         Imagine this simplified blueprint: [eq, and, sw, or, eq]

         User clicks to delete the last eq. We also have to delete the preceding or
         otherwise we're left with a hanging empty group

         What if the user deletes the sw? We have to clean up the preceding and.

         Imagine another scenario: [eq or sw and ew]
         Now we delete the first eq but this time we need to clean up the or.

         These conditionals cover these cases.
         **/
    const { blueprint } = this;
    const previous = blueprint[position - 1];
    const next = blueprint[position + 1];

    const nextIsOr = next && next.word === 'or';
    const previousIsOr = previous && previous.word === 'or';

    const nextIsRightParen = nextIsOr || !next;
    const previousIsLeftParen = previousIsOr || !previous;

    const isFirstInGroup = previousIsLeftParen && !nextIsRightParen;
    const isLastInGroup = previousIsLeftParen && nextIsRightParen;
    const isLastCriterion = !previous && !next;

    if (isLastCriterion) {
      this.blueprint = [];
    } else if (isLastInGroup && previousIsOr) {
      blueprint.splice(position - 1, 2);
    } else if (isLastInGroup && !previous) {
      blueprint.splice(position, 2);
    } else if (isFirstInGroup) {
      blueprint.splice(position, 2);
    } else {
      blueprint.splice(position - 1, 2);
    }
    this.blueprintChanged();
  }

  findCriterion(uid) {
    const conditionIndex = this.indexOfCriterion({ uid });
    return this.blueprint[conditionIndex];
  }

  addGroup() {
    const { blueprint, conditions } = this;
    const condition = conditions[0];
    const { meta, refinements } = condition;

    if (blueprint.length > 0) {
      blueprint.push(or());
    }
    blueprint.push(criterion(condition.id, 1, meta, refinements));

    this.blueprintChanged();
  }

  addCriterion(newCriterion) {
    const { id, depth } = newCriterion;
    const { blueprint } = this;
    const generatedCriterion = criterion(id, depth);
    if (blueprint.length === 0) {
      blueprint.push(generatedCriterion);
    } else {
      blueprint.splice(blueprint.length, 0, and(), generatedCriterion);
    }

    this.blueprintChanged();
    return generatedCriterion;
  }

  insertCriterion(previousPosition) {
    const { blueprint, conditions } = this;
    const condition = conditions[0];
    const { meta, refinements } = condition;

    blueprint.splice(previousPosition + 1, 0, and(), criterion(condition.id, 1, meta, refinements));

    this.blueprintChanged();
    return blueprint[previousPosition + 1];
  }

  findRefinement(conditionId, findId) {
    const { refinements } = this.findCondition(conditionId);

    let result;
    refinements.forEach((refinement) => {
      if (refinement.id === findId) {
        result = refinement;
      }
    });
    return result;
  }

  findCondition(conditionId) {
    let foundCondition = this.conditions[0];

    this.conditions.forEach((condition) => {
      if (condition.id === conditionId) {
        foundCondition = condition;
      }
    });

    return foundCondition;
  }

  switchClause({ uid, id }, clause, refinementId) {
    const { meta } = this.findCondition(id);
    const criterion = this.findCriterion(uid);

    if (Array.isArray(meta.options)) {
      criterion.input = {
        clause,
      };
    } else {
      this.updateInput({ uid }, { clause }, refinementId);
    }
  }

  switchRefinement({ uid, id }, oldRefinementId, newRefinementId) {
    const nextRefinement = this.findRefinement(id, newRefinementId);
    const criterion = this.findCriterion(uid);
    const input = { ...criterion.input };

    // Have to copy and swap out the input
    // because deleting and adding properties is
    // not observable by vue's reactivity system.
    // https://vuejs.org/v2/guide/reactivity.html#For-Objects
    delete input[oldRefinementId];
    input[newRefinementId] = {
      clause: nextRefinement.meta.clauses[0].id,
    };
    criterion.input = input;
  }

  updateInput({ uid }, updates, refinementId) {
    // Do the update iteratively on the input object to preserve it
    // as an observable to anything that references it. Swapping it out
    // means you can't pass it directly to anything you would always have
    // to reference condition.input everywhere versus just passing input.
    const condition = this.findCriterion(uid);
    Object.keys(updates).forEach((key) => {
      if (refinementId) {
        condition.input[refinementId][key] = updates[key];
      } else {
        condition.input[key] = updates[key];
      }
    });
    this.blueprintChanged();
  }
}

export default Blueprint;
