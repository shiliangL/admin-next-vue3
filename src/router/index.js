import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layoutApp/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/layoutPage/login.vue')
    },
    {
      path: '/',
      name: 'online',
      component: Layout,
      children: [
        {
          path: 'channel1',
          name: 'channel1',
          meta: { title: 'cameraOnline' },
          component: () => import('@/views/cameraOnline/channel1.vue')
        },
        {
          path: 'channel2',
          name: 'channel2',
          meta: { title: 'channel2' },
          component: () => import('@/views/cameraOnline/channel2.vue')
        },
        {
          path: 'channel3',
          name: 'channel3',
          meta: { title: 'channel3' },
          component: () => import('@/views/cameraOnline/channel3.vue')
        },
        {
          path: 'channel4',
          name: 'channel4',
          meta: { title: 'channel4' },
          component: () => import('@/views/cameraOnline/channel4.vue')
        },
      ]
    },
    {
      path: '/history',
      name: 'history',
      component: Layout,
      children: [
        {
          path: 'Channel1',
          name: 'Channel1',
          meta: { title: 'cameraOnline' },
          component: () => import('@/views/cameraOnline/index.vue')
        },
        {
          path: 'Channel2',
          name: 'Channel2',
          meta: { title: 'Channel2' },
          component: () => import('@/views/cameraOnline/index.vue')
        },
        {
          path: 'Channel3',
          name: 'Channel3',
          meta: { title: 'Channel3' },
          component: () => import('@/views/cameraRecord/index.vue')
        },
        {
          path: 'Channel4',
          name: 'Channel4',
          meta: { title: 'Channel4' },
          component: () => import('@/views/cameraRecord/index.vue')
        },
      ]
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
