import { defineStore } from 'pinia';
import plugin from '@/plugins/http';

export const useLocationsStore = defineStore('locations', {
    state: () => ({
        countries: []
    }),
    actions: {
        async fetchCountries() {
            const countries = await plugin.$api.get('/countries');

            this.countries = countries.data.data;
        }
    },
    getters: {
        getCountryById(id) {
            return this.countries.find((country) => country.id === id);
        }
    }
});
