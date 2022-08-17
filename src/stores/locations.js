import { defineStore } from 'pinia';
import { inject } from 'vue';

export const useLocationsStore = defineStore('locations', {
    state: () => ({
        countries: []
    }),
    actions: {
        async fetchCountries() {
            const $api = inject('$api');
            const countries = await $api.get('/countries');

            this.countries = countries.data;
        }
    }
});
