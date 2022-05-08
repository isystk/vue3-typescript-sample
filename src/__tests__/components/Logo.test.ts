import { mount } from '@vue/test-utils'
// import { router } from '@/router'
import Logo from '@/components/Logo.vue'

test('Logo', () => {
  const wrapper = mount(Logo, {
    global: {
      // plugins: [router],
    },
  })
  expect(wrapper.element).toMatchSnapshot()
})
