<template>
  <div class="">
<!--    <ul class="refine-criterion-errors">-->
<!--      <li-->
<!--        class="refine-criterion-error"-->
<!--        v-for="error in errors"-->
<!--        :key="error.id"-->
<!--      >-->
<!--        {{ error.message }}-->
<!--      </li>-->
<!--    </ul>-->

    <div class="flex items-start">
        <div class=''>
      <selector @select-option="switchCondition" inner-class='mr-4'>
        <selector-option
          v-for="{ id, display, meta, refinements } in conditions"
          :key="id"
          :id="id"
          :display="display"
          :selected="conditionId === id"
        >
          <div>
            <clause :input="input" :meta="meta" @switch-clause="switchClause" />
            <refinements v-if="refinements && refinements.length > 0" :input="input" :refinements="refinements" />
          </div>
        </selector-option>
      </selector>
        </div>
        <button @click.prevent="$emit('remove-condition')" type="button" class="ml-auto py-2 px-4 flex items-center text-60">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                    fill-rule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                />
            </svg>
        </button>
    </div>
  </div>
</template>

<script>
import { Selector, SelectorOption } from "../selector";
import Clause from './clause';
import Refinements from './refinements.vue';

export default {
  name: "criterion",
  props: {
    conditions: {
      required: true,
      type: Array,
    },
    conditionId: {
      type: String,
      required: true,
    },
    input: {
      type: Object,
      required: true,
    },
    errors: {
      type: Array,
      required: false,
      default: () => { return []; },
    },
  },
  methods: {
    switchCondition: function ({ selectedOption: nextCondition }) {
      this.$emit("switch-condition", nextCondition);
    },
    switchClause: function (nextClause) {
      this.$emit("switch-clause", nextClause);
    },
  },
  components: {
    Clause,
    Refinements,
    SelectorOption,
    Selector,
  },
};
</script>
