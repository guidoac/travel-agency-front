<template>
    <div>
        <MainBanner
            :locations="locations"
            :country-selected="countrySelected"
            @country-selected="selectCountry"
        />
        <ToursList :tours="tours" :country-selected="countrySelected" />
    </div>
</template>

<script setup>
import { ref } from '@vue/reactivity';

import { useToursStore } from '@/stores/tours';
import { useLocationsStore } from '@/stores/locations';

import MainBanner from '@/components/Home/MainBanner';
import ToursList from '@/components/Home/ToursList';

const locations = useLocationsStore();
await locations.fetchCountries();

const tours = useToursStore();

var countrySelected = ref('27fb5056-3d33-469c-9442-ce70475b3b82');

async function selectCountry(countryId) {
    const res = await tours.fetchTours(countryId);

    console.log('res home', res);
}
</script>
