import { createApp } from 'vue'
import App from './App.vue'
import '@/styles/app.scss'
import vuetify from '@/plugins/vuetify'
import i18n from '@/plugins/i18n'
import router from '@/router'

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.use(i18n)
app.mount('#app')

console.log('Env', import.meta.env)
