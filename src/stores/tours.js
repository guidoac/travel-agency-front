import { defineStore } from 'pinia';
import plugin from '@/plugins/http';

export const useToursStore = defineStore('tours', {
    state: () => ({
        tours: []
    }),
    actions: {
        async fetchTours(countryId) {
            try {
                const tours = await plugin.$api.get('/company1/tours', {
                    params: {
                        country: countryId
                    }
                });

                console.log(tours);
                this.tours = tours.data;
            } catch (err) {
                console.log(err);
            }
        }
    }
});
