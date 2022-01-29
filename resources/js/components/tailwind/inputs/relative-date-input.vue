<template>
    <div class="refine-relative-date-wrapper">
        <div>
            <input
                class="form-control form-input form-input-bordered"
                type="number"
                name="days"
                :value="amount"
                @input="updateAmount"
            />
        </div>

        <selector @select-option="updateUnit">
            <selector-option v-for='unit in units'
                             :key='unit.id'
                             :id="id('unit-' + unit.id)"
                             :display="unit.display"
            />
        </selector>

        <selector @select-option="updateModifier">
            <selector-option v-for='modifier in modifiers'
                             :key='modifier.id'
                             :id="id('modifier-' + modifier.id)"
                             :display="modifier.display"
            />
        </selector>
    </div>
</template>

<script>
    import {Selector, SelectorOption} from "../selector";
    import {uid} from '../../../mixins';

    export default {
        name: 'refine-date-input',
        components: {
            Selector,
            SelectorOption,
        },
        mixins: [uid],
        props: {
            amount: {
                type: [String, Number],
                required: false,
            },
            units: {
                type: Array,
                required: true,
            },
            modifiers: {
                type: Array,
                required: true,
            },
            unit: {
                type: String,
                required: false,
            },
            modifier: {
                type: String,
                required: false,
            },
        },
        created() {
            const {modifier} = this;
            this.$emit('input', {modifier});
        },
        methods: {
            id(seed) {
                return `${this.uid}-${seed}`;
            },
            updateModifier: function (nextOption) {
                this.$emit('input', {modifier: nextOption.id})
            },
            updateAmount: function (event) {
                const amount = event.target.value;
                this.$emit('input', {amount});
            },
            updateUnit: function (nextOption) {
                this.$emit('input', {unit: nextOption.id})
            },
        },
    };
</script>
