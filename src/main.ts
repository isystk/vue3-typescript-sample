import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import routes from 'pages-generated'
import '@/styles/app.scss'
import vuetify from '@/plugins/vuetify'
import i18n from '@/plugins/i18n'
import NotFound from '@/pages/404.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes, { path: '/:catchAll(.*)', component: NotFound }],
})

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.use(i18n)
app.mount('#app')

console.log('Env', import.meta.env)
