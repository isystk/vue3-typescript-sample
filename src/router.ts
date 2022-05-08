import { createRouter, createWebHistory } from 'vue-router'
import routes from 'pages-generated'
import NotFound from '@/pages/404.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [...routes, { path: '/:catchAll(.*)', component: NotFound }],
})
