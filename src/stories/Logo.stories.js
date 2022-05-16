import { storiesOf } from '@storybook/vue3'
import vueRouter from 'storybook-vue3-router'
import Logo from '@/components/Logo.vue'

storiesOf('Common/Logo', module)
  .addDecorator(vueRouter())
  .add('Basic', () => ({
    components: { Logo },
    template: `<Logo />`,
  }))
