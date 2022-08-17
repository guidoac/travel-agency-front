<template>
    <div>
        <MainBanner :locations="locations" />
    </div>
</template>

<script setup>
import { useLocationsStore } from '@/stores/locations';
import MainBanner from '@/components/Home/MainBanner';

const locations = useLocationsStore();

await locations.fetchCountries();
</script>
