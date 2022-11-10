<template>
    <button
        :class="{
            'btn-primary': type === 'primary'
        }"
        :type="submit ? 'submit' : ''"
        @click="$emit('click')"
    >
        {{ label }}
    </button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
    label: {
        type: String,
        required: true
    },

    type: {
        type: String,
        required: false,
        default: 'primary'
    },

    submit: {
        type: Boolean,
        default: false,
        required: false
    }
});

defineEmits(['click']);
</script>

<style lang="scss" scoped>
.btn-primary {
    @apply bg-admin-primary text-white font-semibold rounded-2xl px-8 py-3 transition-colors;

    &:hover {
        @apply bg-admin-primary-2;
    }
}
</style>
