import { app } from '@storybook/vue3'
import vuetify from '@/plugins/vuetify'
import i18n from '@/plugins/i18n'
app.use(vuetify)
app.use(i18n)
import '@/styles/app.scss'

export const decorators = [
  (story) => ({
    components: { story },
    template: '<v-app><story /></v-app>',
  }),
]
