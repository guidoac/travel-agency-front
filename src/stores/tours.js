import { defineStore } from 'pinia';
import plugin from '@/plugins/http';
import { useCompaniesStore } from './companies';

export const useToursStore = defineStore('tours', {
    state: () => ({
        tours: []
    }),
    actions: {
        async fetchTours(countryId) {
            const companies = useCompaniesStore();

            try {
                const tours = await plugin.$api.get(
                    `${companies.company.alias}/tours`,
                    {
                        params: {
                            country: countryId
                        }
                    }
                );

                console.log(tours);
                this.tours = tours.data;
            } catch (err) {
                console.log(err);
            }
        }
    }
});
