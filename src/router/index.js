


import { createWebHashHistory } from 'vue-router';
import { createRouter } from 'vue-router';
import View_Collections from '../views/View_Collections.vue';

export const routes = [
    {
        name: 'home',
        id: 1,
        path: '/',
        component: () => View_Collections,
    },
    {
        name: 'about',
        id: 2,
        path: '/about',
        component: () => import('../views/View_SneakersAbout.vue'),
    },
    {
        name: 'women',
        id: 3,
        path: '/',
        component: () => import('../views/View_Women.vue'),
    },
    {
        name: 'men',
        id: 4,
        path: '/',
        component: () => import('../views/View_Men.vue'),
    },
    {
        name: 'contact',
        id: 5,
        path: '/contact',
        component: () => import('../views/View_SneakersContact.vue'),
    },
    {
        name: 'productPage',
        id: 6,
        path: '/product-page',
        component: () => import('../views/View_Product.vue'),
        // children: [
        //     {}
        // ]
    },
];


const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;