import { createRouter, createWebHistory } from "vue-router";
import Home from '../pages/index.vue';
import BestList from '../pages/products/bestList/index.vue';
import ProductList from '../pages/products/list/index.vue';
import ProductDetail from '../pages/products/detail/_id.vue';
import ProductReviews from '../pages/products/reviews/index.vue';
import ProductReviewDetail from '../pages/products/reviews/detail/_id.vue';

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
        },
        {
            path: '/products/:id',
            name: 'ProductDetail',
            component: ProductDetail 
        },
        {
            path: '/products/reviews',
            name: 'ProductReviews',
            component: ProductReviews
        },
        {
            path: '/products/review/:id',
            name: 'ProductReviewDetail',
            component: ProductReviewDetail
        }
    ]
});

export default router;

//  /
//  /todos
//  /todos/create
//  /todos/:id