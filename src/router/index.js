import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Enterprise from '@/pages/Enterprise'
import Market from '@/pages/Market'
import About from '@/pages/About'

Vue.use(Router)

export default new Router({
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
  ]
})
