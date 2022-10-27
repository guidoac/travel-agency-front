<template>
    <component :is="layouts[finalLayout]" />
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

import LayoutDefault from '@/layouts/LayoutDefault';

const route = useRoute();
const layouts = {
    default: LayoutDefault
};

const finalLayout = computed(() => {
    return route.meta.layout || 'default';
});
</script>

<style lang="scss">
#app {
    font-family: 'Aeroport', Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
}
</style>
