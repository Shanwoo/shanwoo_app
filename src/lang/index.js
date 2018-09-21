import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n) // 通过插件的形式挂载

const i18n = new VueI18n({
  locale: 'zh', // 语言标识
  // this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'zh': require('./langFile/zh.json'), // 中文语言包
    'en': require('./langFile/en.json') // 英文语言包
  }
})

export default i18n
