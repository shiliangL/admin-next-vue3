import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layoutApp/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout,
      children: [
        {
          path: 'pinia',
          name: 'pinia',
          meta: { title: 'pinia' },
          component: () => import('@/views/HomeView.vue')
        },
        {
          path: 'about',
          name: 'about',
          meta: { title: 'about' },
          component: () => import('@/views/AboutView.vue')
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/layoutPage/login.vue')
    },
    {
      path: '/401',
      name: 'page401',
      component: () => import('@/layoutPage/401.vue')
    },
    {
      path: '/404',
      name: 'page404',
      component: () => import('@/layoutPage/404.vue')
    },
    { path: '/:catchAll(.*)', name: 'CatchAll', redirect: '/404', hidden: true }
  ]
})

export default router
