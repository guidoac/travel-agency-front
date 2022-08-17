import { createApp } from 'vue';
import { createPinia } from 'pinia';
import _merge from 'lodash/merge';
import '@/assets/scss/main.scss';

import App from './App.vue';
import router from './router';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);

var plugins = require.context('./plugins');

plugins.keys().forEach((key) => {
    var res = plugins(key).default;

    app.use(res);
    pinia.use(({ store }) => {
        _merge(store, app.config.globalProperties);
    });
});

app.mount('#app');
