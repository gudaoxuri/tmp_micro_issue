import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from './views/home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/page2',
    name: 'page2',
    component: () => import('./views/page2.vue')
  }
]

const router = createRouter({
  history: createWebHistory('/app1'),
    routes
})

export default router
