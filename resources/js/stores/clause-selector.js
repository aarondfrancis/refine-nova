class ClauseSelector {
  constructor(id) {
    this.clauses = {};
    this.selectedClauseId = '';
    this.id = id;
  }

  registerClause(clause) {
    // todo: set selectedClauseId if clauses is empty
    // which basically means set it to the firs clause provided in
    // the list. It can be overridden by a clause that specifies
    // selected.
    const { id: clauseId } = clause;
    if (this.clauses[clauseId]) {
      throw new Error(`A clause with id ${clauseId} has already been registered for condition ${this.id}.`);
    }

    this.clauses = {
      ...this.clauses,
      [clauseId]: clause,
    };
  }

  selectClause(clauseId) {
    this.selectedClauseId = clauseId;
  }
}

export default ClauseSelector;
