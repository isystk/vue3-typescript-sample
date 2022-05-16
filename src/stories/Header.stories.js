import { storiesOf } from '@storybook/vue3'
import vueRouter from 'storybook-vue3-router'
import Header from '@/components/Header.vue'
// import { provideStore } from '@/store/index'

storiesOf('Common/Header', module)
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
