import { createRouter, createWebHistory } from 'vue-router'
import { isAuthenticated } from '@/utilities/aws'
import { Url } from '@/constants/url'
// import routes from 'pages-generated'
import NotFound from '@/pages/404.vue'
import Top from '@/pages/index.vue'
import Post from '@/pages/posts/[id].vue'
import Login from '@/pages/login/index.vue'
import SignUp from '@/pages/signup/index.vue'
import Member from '@/pages/member/index.vue'

const routes = [
  { path: Url.TOP, name: 'Top', component: Top },
  { path: `${Url.POSTS}/:id`, name: 'Post', component: Post },
  { path: Url.LOGIN, name: 'Login', component: Login },
  { path: Url.SIGNUP, name: 'SignUp', component: SignUp },
  {
    path: Url.MEMBER,
    name: 'Member',
    component: Member,
    meta: { requiresAuth: true },
  },
]

const authorizeToken = (to, from, next) => {
  if (to.matched.some((page) => page.meta.requiresAuth)) {
    isAuthenticated((session, result) => {
      if (!result) {
        next(Url.LOGIN)
      } else {
        next()
      }
    })
  } else {
    next()
  }
}

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes, { path: '/:catchAll(.*)', component: NotFound }],
})
router.beforeEach(authorizeToken)

export default router
