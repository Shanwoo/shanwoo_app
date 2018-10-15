import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Enterprise from '@/pages/Enterprise'
import Transaction from '@/pages/Transaction'
import Market from '@/pages/Market'
import About from '@/pages/About'

Vue.use(Router)

export default new Router({
  // mode: history,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/enterprise',
      name: 'Enterprise',
      component: Enterprise
    },
    {
      path: '/transaction',
      name: 'Transaction',
      component: Transaction
    },
    {
      path: '/market',
      name: 'Market',
      component: Market
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
    // if (savedPosition) {
    //   // savedPosition is only available for popstate navigations.
    //   return savedPosition
    // } else {
    //   const position = {}
    //   // new navigation.
    //   // scroll to anchor by returning the selector
    //   if (to.hash) {
    //     position.selector = to.hash
    //   }
    //   // check if any matched route config has meta that requires scrolling to top
    //   if (to.matched.some(m => m.meta.scrollToTop)) {
    //     // cords will be used if no selector is provided,
    //     // or if the selector didn't match any element.
    //     position.x = 0
    //     position.y = 0
    //   }
    //   // if the returned position is falsy or an empty object,
    //   // will retain current scroll position.
    //   return position
    // }
  }
})
