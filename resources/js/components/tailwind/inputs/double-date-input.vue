<template>
    <div class="flex items-center">
        <nova-date-picker :date="date1" @input="updateFirstDate" v-bind="$attrs" />
        <p class="px-2">{{ joiner }}</p>
        <nova-date-picker :date="date2" @input="updateSecondDate" v-bind="$attrs" />
    </div>
</template>

<script>
import NovaDatePicker from './nova-date-picker';

export default {
    name: 'refine-double-date-input',
    components: {
        NovaDatePicker,
    },
    props: {
        date1: {
            type: String,
            required: false,
        },
        date2: {
            type: String,
            required: false,
        },
        joiner: {
            type: String,
            required: false,
            default: 'and',
        },
    },
    methods: {
        updateFirstDate: function ({ date }) {
            this.$emit('input', { date1: date });
        },
        updateSecondDate: function ({ date }) {
            this.$emit('input', { date2: date });
        },
    },
};
</script>
