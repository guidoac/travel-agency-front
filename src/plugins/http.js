import axios from 'axios';

axios.defaults.baseURL = process.env.VUE_APP_API_URL;
axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem('user')}`;

export default {
    install(app) {
        app.config.globalProperties.$api = axios;
        app.provide('$api', axios);
    },

    $api: axios
};
