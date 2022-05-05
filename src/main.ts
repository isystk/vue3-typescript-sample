import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import routes from 'pages-generated'
import './styles/app.scss'

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')