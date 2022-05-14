import Header from '@/components/Header.vue'
import { storiesOf } from '@storybook/vue3'
// import StoryRouter from 'storybook-vue-router'

// import router from '@/router'

storiesOf('Common/Header', module)
  // .addDecorator(StoryRouter({}, router.options))
  .add('Header', () => ({
    template: '<Header />',
  }))
