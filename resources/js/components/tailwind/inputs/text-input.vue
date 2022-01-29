<template>
    <input
        class="form-control form-input form-input-bordered"
        type="text"
        :value="value"
        @input="$emit('input', { value: $event.target.value })"
    />
</template>

<script>
export default {
    name: 'refine-text-input',
    props: {
        value: {
            type: String,
            required: false,
            default: '',
        },
    },
};
</script>
