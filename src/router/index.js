import { createRouter, createWebHistory } from 'vue-router';
import admin from './admin';
import travely from './travely';

import HomePage from '../pages/HomePage.vue';

console.log([...admin, ...travely]);
const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    ...admin,
    ...travely
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
