import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import routes from 'pages-generated'
import './styles/app.scss'
import vuetify from './plugins/vuetify'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount('#app')
