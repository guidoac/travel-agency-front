<template>
    <div>
        <div class="relative">
            <img :src="banner" />

            <div
                class="country-row absolute right-0 text-secondary flex flex-row py-20 pl-10"
            >
                <div
                    :key="`country-${index}`"
                    v-for="(country, index) in countries"
                    class="text-6xl uppercase flex flex-row items-center transition-all"
                    :class="{
                        'text-9xl': selectedCountry === index
                    }"
                    @mouseover="selectedCountry = index"
                    @mouseleave="selectedCountry = null"
                >
                    {{ country.name }}

                    <div class="border-b-4 border-tertiary/50 divider" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
    locations: String
});

const locations = ref(props.locations);
const countries = locations.value.countries;
var selectedCountry = ref(3);
const banner = countries[0].photos[0].url;
</script>

<style lang="scss" scoped>
.divider {
    width: 8rem;
}

.country-row {
    top: 45%;
}
</style>
