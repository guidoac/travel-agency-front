import { defineStore } from 'pinia';

export const useCompaniesStore = defineStore('companies', {
    state: () => ({
        company: {
            alias: 'agenciafoda'
        }
    }),

    getters: {
        company(state) {
            return state.company;
        }
    }
});
