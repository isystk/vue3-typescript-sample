import Logo from '@/components/Logo.vue'

export default {
  title: 'Common/Logo',
  component: Logo,
}

const Template = (args) => ({
  components: { Logo },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { ...args }
  },
  // Then, the spread values can be accessed directly in the template
  template: '<Logo />',
})

export const Basic = Template.bind({})
Basic.args = {}
