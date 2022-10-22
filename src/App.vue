<template>
    <Suspense>
        <component :is="layouts[finalLayout]" />
    </Suspense>
</template>

<script setup>
import DefaultLayout from '@/layouts/LayoutDefault';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const layouts = {
    default: DefaultLayout
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
