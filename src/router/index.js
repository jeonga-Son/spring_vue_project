import { createRouter, createWebHistory } from "vue-router";
import Home from '../pages/index.vue';
import BestList from '../pages/products/bestList/index.vue';
import ProductList from '../pages/products/list/index.vue';
// import ProductDetail from '../pages/products/detail/_id.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/products/bestList',
            name: 'BestList',
            component: BestList
        },
        {
            path: '/products/list',
            name: 'ProductList',
            component: ProductList
        }
        // },
        // {
        //     path: '/products/detail/:id',
        //     name: 'ProductDetail',
        //     component: ProductDetail // /todos/create나 TodoCreate를 찾으면 경로를 걸어준다.
        // }
    ]
});

export default router;

//  /
//  /todos
//  /todos/create
//  /todos/:id