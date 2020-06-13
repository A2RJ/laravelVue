window.Vue = require('vue');

import Vue from 'vue';
import App from './layouts/App.vue';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import { Plugin } from 'vue-fragment';
import Vue2Filters from 'vue2-filters'

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(Plugin)
Vue.use(Vue2Filters)

import AllJurnals from './views/AllJurnals.vue';
import Input from './views/Input.vue';
import LPK from './views/LPK.vue';
import Aktivitas from './views/Aktivitas.vue';
import ArusKas from './views/ArusKas.vue';

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Input
    },
    {
        name: 'Jurnal',
        path: '/jurnal',
        component: AllJurnals
    },
    {
        name: 'LPK',
        path: '/LPK',
        component: LPK
    },
    {
        name: 'Aktivitas',
        path: '/Aktivitas',
        component: Aktivitas
    },
    {
        name: 'Arus Kas',
        path: '/arusKas',
        component: ArusKas
    }
];


// const router = new VueRouter({ routes });
const router = new VueRouter({
    mode: 'history',
    routes: routes
});

const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
});