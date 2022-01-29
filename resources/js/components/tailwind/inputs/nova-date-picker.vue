<template>
    <date-time-picker
        class="w-full form-control form-input form-input-bordered"
        autocomplete="off"
        :value="date"
        alt-format="Y-m-d"
        date-format="Y-m-d"
        :placeholder="placeholder"
        :enable-time="false"
        :enable-seconds="false"
        @input.prevent=""
        @change="handleChange"
    />
</template>

<script>
export default {
    props: {
        date: {
            type: String,
            required: false,
        },
    },

    data() {
        return {
            hasError: false,
        };
    },

    methods: {
        handleChange(value) {
            this.hasError = false;
            this.$emit('input', {
                date: value,
            });
        },
        handleInputError: function () {
            this.hasError = true;
        },
    },
};
</script>
