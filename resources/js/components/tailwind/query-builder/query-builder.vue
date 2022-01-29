<template>
  <renderless-query-builder
    :blueprint="blueprint"
    :conditions="conditions"
    @change="onChange"
    v-slot="{ groupedBlueprint, replaceCriterion, insertCriterion, addGroup, removeCriterion, conditionFor }"
  >
    <div>
      <!-- When there are no conditions, we need to show something reasonable instead of just "+ OR"-->
      <div v-if="blueprint.length === 0">
        <div
          class="border rounded-lg shadow border-60 p-2 text-80 bg-white flex items-center justify-between text-sm mb-4"
        >
          <button @click="addGroup" class="text-sm flex items-center p-2" tabindex="0" type="button">
            <heroicon-plus />
            <span class="pt-px text-80">Add condition</span>
          </button>
        </div>
      </div>
      <div v-else>
        <div v-for="(group, index) in groupedBlueprint" :key="index">
          <div class="border rounded-lg shadow border-60">
            <div
              class="border-b border-50 py-3 pl-2 bg-white w-full"
              :class="{ 'rounded-t-lg': index === 0 }"
              v-for="(criterion, index) in group"
              :key="criterion.uid"
            >
              <renderless-condition
                v-bind="conditionFor({ id: criterion.condition_id, ...criterion })"
                v-slot="{ switchClause }"
              >
                <criterion
                  @switch-clause="({ id: clause }) => switchClause(clause)"
                  @remove-condition="removeCriterion(criterion.position)"
                  @switch-condition="
                    (nextCondition) => replaceCriterion(criterion.position, conditionFor(nextCondition))
                  "
                  :conditionId="criterion.condition_id"
                  :conditions="conditions"
                  :errors="errors[index]"
                  :input="criterion.input"
                />
              </renderless-condition>
            </div>
            <button
              @click="insertCriterion(group[group.length - 1].position)"
              class="text-sm flex items-center p-2"
              tabindex="0"
              type="button"
            >
              <heroicon-plus />
              <span class="pt-px text-80">And</span>
            </button>
          </div>
          <!--
            After every group that is *not* the last group, add an "or"
            divider to make it clear to the user that groups are or'ed.
          -->
          <div v-if="index < groupedBlueprint.length - 1" class="my-2 text-80 flex items-center">
            <div class="border-t w-4 border-60"></div>
            <div class="mx-2 text-sm">Or</div>
            <div class="border-t w-full border-60 mr-1"></div>
          </div>
        </div>
        <!-- The "add an or" button -->
        <button @click="addGroup" type="button" class="text-sm flex items-center p-2">
          <heroicon-plus />
          <span class="pt-px text-90">Or</span>
        </button>
      </div>
    </div>
    <!-- wrapper div -->
  </renderless-query-builder>
</template>
<script>
import Criterion from './criterion';
import { RenderlessQueryBuilder, RenderlessCondition } from '../../renderless';
import HeroiconPlus from '../../heroicon-plus';

export default {
  name: 'query-builder',
  model: {
    prop: 'blueprint',
    event: 'change',
  },
  props: {
    blueprint: {
      required: false,
      type: Array,
      default: () => {
        return [];
      },
    },
    conditions: {
      required: true,
      type: Array,
    },
    errors: {
      required: false,
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  methods: {
    onChange(newBlueprint) {
      // bubble up the change event.
      this.$emit('change', newBlueprint);
    },
  },
  created() {
    if (this.conditions.length === 0) {
      throw new Error('You must provide at least one condition to the query builder.');
    }
  },
  components: {
    HeroiconPlus,
    Criterion,
    RenderlessCondition,
    RenderlessQueryBuilder,
  },
};
</script>
