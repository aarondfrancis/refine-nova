<template>
    <renderless-option :id="id" :display="display" :selected="selected">
        <slot></slot>
    </renderless-option>
</template>

<script>
import { RenderlessOption } from '../../renderless';
import { optionProps } from '../../../mixins';

export default {
    name: 'selector-option',
    mixins: [optionProps],
    components: {
        RenderlessOption,
    },
};
</script>
