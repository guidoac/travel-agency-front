<template>
    <div class="container mx-auto bg-white">
        <div class="flex flex-row">
            <p class="text-4xl text-secondary">TOURS</p>
            <p>{{ countrySelected.description }}</p>
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
    tours: {
        type: Object,
        required: true
    },

    countrySelected: {
        type: Object,
        required: true
    }
});

const tours = ref(props.tours);
console.log('props', tours.value.tours);
</script>

<style lang="scss" scoped></style>
