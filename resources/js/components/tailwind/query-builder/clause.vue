<template>
    <renderless-clause v-bind="input" v-slot="{ setValue }">
        <!-- clause selector -->
        <selector @select-option="switchClause" innerClass="refine-clause-selector">
            <selector-option
                v-for="{ id: clauseId, display, component, meta: clauseMeta } in meta.clauses"
                :key="clauseId"
                :id="clauseId"
                :display="display"
                :selected="input.clause === clauseId"
            >
                <div>
                    <component
                        v-if="component"
                        :is="component"
                        v-bind="{ ...meta, ...clauseMeta, ...input }"
                        @input="setValue"
                    />
                </div>
            </selector-option>
        </selector>
    </renderless-clause>
</template>

<script>
import { RenderlessClause } from '../../renderless';
import { Selector, SelectorOption } from '../selector';
import * as inputs from '../inputs';

export default {
    name: 'clause',
    props: {
        input: {
            type: Object,
            default: () => {
                return {};
            },
        },
        meta: {
            type: Object,
            required: true,
        },
    },
    methods: {
        switchClause: function ({ selectedOption: nextClause }) {
            this.$emit('switch-clause', nextClause);
        },
    },
    components: {
        RenderlessClause,
        SelectorOption,
        Selector,
        ...inputs,
    },
};
</script>
