import axios from 'axios';

export default {
    install(app) {
        axios.defaults.baseURL = process.env.VUE_APP_API_URL;

        app.config.globalProperties.$api = axios;

        app.provide('$api', axios);
    }
};
