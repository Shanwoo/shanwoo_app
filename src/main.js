// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import i18n from './lang'
// import { Menu, Submenu, MenuItem, Container, Aside, Main, Carousel, CarouselItem, Button, Select } from 'element-ui'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
axios.defaults.baseURL = process.env.BASE_URL
Vue.use(ElementUI)
// Vue.use(Menu)
// Vue.use(Submenu)
// Vue.use(MenuItem)
// Vue.use(Container)
// Vue.use(Aside)
// Vue.use(Main)
// Vue.use(Carousel)
// Vue.use(CarouselItem)
// Vue.use(Button)
// Vue.use(Select)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  store,
  components: { App },
  template: '<App/>'
})
