<template>
  <selector 
    @select-option="selectRefinement" 
    innerClass="mr-4"
    class="pt-4"
  >
  <selector-option
    v-for="{id, meta, display} in refinements"
    :key="id"  
    :id="id"
    :display="display"
    :selected="!!input[id]"
  >
    <renderless-refinement 
      :id="id"
    >
      <clause
        :meta="meta"
        :input="input[id]"
        @switch-clause="({ id: clause }) => updateInput({ clause }, id)"
      />
    </renderless-refinement>
  </selector-option>
  </selector>
</template>

<script>
import { Selector, SelectorOption } from "../selector";
import { RenderlessRefinement } from '../../renderless';
import Clause from './clause';

export default {
  name: 'refinements',
  inject: ['updateInput', 'switchRefinement'],
  components: {
    Clause,
    RenderlessRefinement,
    Selector,
    SelectorOption,
  },
  props: {
    refinements: {
      required: true,
      type: Array,
    },
    input: {
      required: false,
      type: Object,
      default: () => { return {}; },
    },
  }, 
  methods: {
    selectedRefinementId() {
      let selectedId;
      this.refinements.forEach(({ id }) => {
        if (this.input[id]) {
          selectedId = id;
        }
      });

      return selectedId;
    },
    
    selectRefinement({ selectedOption }) {
      const { id: nextId } = selectedOption;
      this.switchRefinement(this.selectedRefinementId(), nextId);
    },
  },
}
</script>