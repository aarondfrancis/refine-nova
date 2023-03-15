export default {
  add(blueprint, condition) {
    //
  },
  remove(blueprint, index) {
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
    blueprint = JSON.parse(JSON.stringify(blueprint))

    let previous = blueprint[index - 1]
    let next = blueprint[index + 1]

    const nextIsOr = next?.word === 'or'
    const previousIsOr = previous?.word === 'or'

    const nextIsRightParen = nextIsOr || !next
    const previousIsLeftParen = previousIsOr || !previous

    const isFirstInGroup = previousIsLeftParen && !nextIsRightParen
    const isLastInGroup = previousIsLeftParen && nextIsRightParen
    const isLastCriterion = !previous && !next

    if (isLastCriterion) {
      blueprint = []
    } else if (isLastInGroup && previousIsOr) {
      blueprint.splice(index - 1, 2)
    } else if (isLastInGroup && !previous) {
      blueprint.splice(index, 2)
    } else if (isFirstInGroup) {
      blueprint.splice(index, 2)
    } else {
      blueprint.splice(index - 1, 2)
    }

    return blueprint
  },
}
