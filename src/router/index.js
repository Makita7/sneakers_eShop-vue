


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
        path: '/women',
        component: () => import('../views/View_Women.vue'),
    },
    {
        name: 'men',
        id: 4,
        path: '/men',
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
        children: [
            {
                name: 'fall-bliss',
                path: '/product-page/fall-bliss',
                component: () => import( /* webpackChunkName: "fall-bliss"*/ '../views/Child_Product_Views/View_Product_fall-bliss.vue' )
            },
            {
                name: 'nike-superRep-go',
                path: '/product-page/nike-superRep-go',
                component: () => import( /* webpackChunkName: "nike-superRep-go"*/ '../views/Child_Product_Views/View_Product_nike-air-force1.vue' )
            },
            {
                name: 'nike-air-force1',
                path: '/product-page/nike-air-force1',
                component: () => import( /* webpackChunkName: "nike-air-force1"*/ '../views/Child_Product_Views/View_Product_nike-superRep-go.vue' )
            },
        ]
    },
];


const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;