import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Basket from '../views/Basket.vue';
import Product from '../views/Product.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Basket-page',
    name: 'Basket-page',
    component: Basket
  },
  {
    path: '/product-page',
    name: 'Product-page',
    component: Product
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
