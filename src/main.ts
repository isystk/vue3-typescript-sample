import { createApp } from 'vue'
import App from './App.vue'
import '@/styles/app.scss'
import vuetify from '@/plugins/vuetify'
import i18n from '@/plugins/i18n'
import router from '@/router'
import { createHead } from '@vueuse/head'

const app = createApp(App)

// Components
const pageContext = import.meta.globEager('./components/**/*.vue')
Object.keys(pageContext).forEach((key) => {
  const paths = key
    .split('/')
    .filter((path) => path !== '.' && path !== 'components')
  const name = paths.pop().split('.')[0]
  return app.component([...paths, name].join(''), pageContext[key].default)
})

app.use(router)
app.use(vuetify)
app.use(i18n)
app.use(createHead())
app.mount('#app')

console.log('Env', import.meta.env)
