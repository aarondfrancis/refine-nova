<template>
    <renderless-query-builder
        :blueprint="blueprint"
        :conditions="conditions"
        @change="onChange"
        v-slot="{ groupedBlueprint, replaceCriterion, insertCriterion, addGroup, removeCriterion, conditionFor }"
    >
        <div class="">
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
                        <!-- Heroicon name: plus -->
                        <svg
                            class="h-4 w-4 -mt-px text-80"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <span class="pt-px text-80">And</span>
                    </button>
                </div>
                <div v-if="index < groupedBlueprint.length - 1" class="my-2 text-80 flex items-center">
                    <div class="border-t w-4 border-60"></div>
                    <div class="mx-2 text-sm">Or</div>
                    <div class="border-t w-full border-60 mr-1"></div>
                </div>
            </div>
            <button @click="addGroup" type="button" class="text-sm flex items-center p-2">
                <!-- Heroicon name: plus -->
                <svg
                    class="h-4 w-4 -mt-px text-90"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fill-rule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clip-rule="evenodd"
                    />
                </svg>
                <span class="pt-px text-90">Or</span>
            </button>
        </div>
        <!-- wrapper div -->
    </renderless-query-builder>
</template>
<script>
import Criterion from './criterion';
import { RenderlessQueryBuilder, RenderlessCondition } from '../../renderless';

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
        Criterion,
        RenderlessCondition,
        RenderlessQueryBuilder,
    },
};
</script>
