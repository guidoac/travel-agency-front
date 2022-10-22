<template>
    <div>
        <div class="relative">
            <img class="banner-img w-screen" :src="banner" />

            <div
                class="country-row absolute right-0 text-secondary flex flex-row py-20 pl-10"
            >
                <div
                    :key="`country-${country.id}`"
                    v-for="country in countries"
                    class="flex flex-row items-center transition-all country-row-item"
                    :class="{
                        'text-9xl': countrySelected === country.id,
                        'text-4xl': countrySelected !== country.id
                    }"
                    @click="selectCountry(country.id)"
                >
                    <div class="px-4">
                        <p class="country-name uppercase font-highlight">
                            {{ country.name }}
                        </p>

                        <p
                            v-if="countrySelected === country.id"
                            class="text-lg"
                        >
                            <BaseIcon icon="arrow-right-long" class="pr-2" />
                            view more
                        </p>
                    </div>

                    <div class="border-b-4 border-tertiary/50 divider" />
                </div>
            </div>

            <div
                class="social-media-row bottom-10 right-20 absolute text-tertiary text-xl"
            >
                <a href="#" class="mr-2">
                    <BaseIcon icon="facebook-f" type="brands" />
                </a>
                <a href="#" class="mr-2">
                    <BaseIcon icon="instagram" type="brands" />
                </a>
                <a href="#">
                    <BaseIcon icon="twitter" type="brands" />
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineEmits, defineProps } from 'vue';
import BaseIcon from '@/components/BaseIcon';

const emit = defineEmits(['country-selected']);
const props = defineProps(['locations', 'country-selected']);

console.log(props.locations);
const countries = ref(props.locations.countries);
const banner = countries.value[0].banner;

function selectCountry(countryId) {
    emit('country-selected', countryId);
}
</script>

<style lang="scss" scoped>
.divider {
    width: 8rem;
}

.country-row {
    top: 43%;

    &-item {
        .country-name {
            line-height: 0.6;
        }
    }
}

.banner-img {
    height: 45rem;
}

.social-media-row {
    a {
        @apply hover:bg-primary px-3 py-2 rounded-lg transition-all hover:text-white;
    }
}
</style>
