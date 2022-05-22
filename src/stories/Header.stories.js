import { storiesOf } from '@storybook/vue3'
import vueRouter from 'storybook-vue3-router'
import Header from '@/components/pages/Header.vue'
// import { provideStore } from '@/store/index'

storiesOf('pages/Header', module)
  // .addDecorator(provideStore())
  .addDecorator(vueRouter())
  .add('LoggedIn', () => ({
    components: { Header },
    template: `<Header />`,
  }))
  .add('LoggedOut', () => ({
    components: { Header },
    template: `<Header />`,
  }))
