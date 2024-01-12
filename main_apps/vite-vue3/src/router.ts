import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from './views/home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/app1/:pathMatch(.*)*',
    name: 'vite',
    component: () => import('./views/child.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
