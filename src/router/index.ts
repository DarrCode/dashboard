import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login/Login.vue'),
    },
    {
        path: '/',
        redirect: 'login',
        name: 'Layout',
        component: () => import('@/components/Layout/Layout.vue'),
        children: [
            {
                path: 'dashboard',
                name: 'Dashboard',
                component: () => import('@/views/Dashboard/Dashboard.vue'),
            },
        ],
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
