import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Basket from '../views/Basket.vue';

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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
