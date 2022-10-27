<template>
    <div class="flex flex-col">
        <div class="pl-2 pb-1 text-admin-primary-dark font-bold text-lg">
            <slot name="label" />
        </div>

        <div
            class="flex grow justify-between p-4 bg-slate-50 rounded-2xl border border-admin-secondary-light shadow-sm hover:shadow-md transition-shadow ease items-center"
        >
            <div>
                <slot name="left-icon" />
                <input
                    class="mx-2"
                    :placeholder="props.placeholder"
                    :type="props.type"
                    :value="props.value"
                    @input="$emit('input', $event.target.value)"
                />
            </div>
            <slot name="right-icon" class="self-end" />
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    type: {
        type: String,
        default: 'text',
        required: false
    },

    placeholder: {
        type: String,
        default: '',
        required: false
    },

    value: {
        type: String || Number,
        default: ''
    }
});
</script>

<style lang="scss" scoped></style>
