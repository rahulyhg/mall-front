import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import store from './store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: `/${store.getters.locale.locale}`
    },
    {
      path: '/:locale',
      name: 'home',
      component: Home
    },
    {
      path: '/:locale/about-us/:page?',
      name: 'about',
      props: true,
      component: () => import('./views/About.vue')
    },
    {
      path: '/:locale/stores/:cat?',
      name: 'stores',
      props: true,
      component: () => import('./views/Stores.vue')
    },
    {
      path: '/:locale/store/details/:store?',
      name: 'singleStore',
      props: true,
      component: () => import('./views/SingleStore.vue')
    },
    {
      path: '/:locale/whats-new/:cat?/:id?',
      name: 'whats-new',
      props: true,
      component: () => import('./views/News.vue')
    },
    {
      path: '/:locale/entertainment',
      name: 'entertainment',
      props: true,
      component: () => import('./views/Entertainment.vue')
    },
    {
      path: '/:locale/login',
      name: 'login',
      props: true,
      component: () => import('./views/Login.vue')
    },
    {
      path: '/:locale/register',
      name: 'registration',
      props: true,
      component: () => import('./views/Registration.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  let language = to.params.locale
  if (language) {
    const languages = store.getters.languages
    languages.forEach(function (object, index) {
      if (object.locale === language) {
        store.commit('SET_LOCALE', object.locale)
      }
    })
    next()
  }
})

export default router
