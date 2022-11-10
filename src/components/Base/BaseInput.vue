<template>
    <div class="flex flex-col">
        <div class="pl-2 pb-1 text-admin-primary-dark font-bold text-lg">
            <slot name="label" />
        </div>

        <div
            class="flex grow justify-between bg-slate-50 rounded-2xl border border-admin-secondary-light shadow-sm hover:shadow-md transition-shadow ease items-center"
            :class="{
                'p-4': size === 'normal',
                'px-4 py-2': size === 'small'
            }"
        >
            <div>
                <slot name="left-icon" />
                <input
                    class="mx-2"
                    :placeholder="placeholder"
                    :type="type"
                    :value="modelValue"
                    @input="updateValue"
                />
            </div>
            <slot name="right-icon" class="self-end" />
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const emit = defineEmits(['update:modelValue']);

defineProps({
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

    modelValue: {
        type: String || Number,
        default: ''
    },

    size: {
        type: String,
        default: 'normal',
        required: false
    }
});

const updateValue = (event) => {
    emit('update:modelValue', event.target.value);
};
</script>

<style lang="scss" scoped></style>
