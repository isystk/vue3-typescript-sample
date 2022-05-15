import vueRouter from 'storybook-vue3-router'
import Header from '@/components/Header.vue'
import { provideStore } from '@/store/index'
import { injectStore } from '@/store'

export default {
  title: 'Common/Header',
  component: Header,
}

const Template = (args) => ({
  components: { Header },
  setup: () => {
    return { ...args }
  },
  template: '<Header />',
})
Template.decorators = [vueRouter(), provideStore()]

export const LoggedIn = Template.bind({})
LoggedIn.args = {}

export const LoggedOut = Template.bind({})
LoggedOut.args = {}
