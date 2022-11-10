import { defineStore } from 'pinia';
import plugin from '@/plugins/http';
import router from '@/router';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: {}
    }),

    actions: {
        async signIn(email, password) {
            try {
                const { data } = await plugin.$api.post('/auth/signin', {
                    email,
                    password
                });

                localStorage.setItem('user', data.data.access_token);

                console.log(router);
                router.push({ name: 'admin.home' });
            } catch (e) {
                console.log(e);
            }
        }
    }
});
