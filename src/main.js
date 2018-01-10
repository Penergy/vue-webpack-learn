// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import navbar from '@/components/Navbar'
import CommonTopBar from '@/components/CommonTopBar'
import HeaderWrapper from '@/components/HeaderWrapper'
import CustomArticle from '@/components/CustomArticle'
import CustomFooter from '@/components/CustomFooter'

Vue.config.productionTip = false
console.log(CommonTopBar)

Vue.component('CommonTopBar', {
  render: CommonTopBar.render,
  data: CommonTopBar.data
})

Vue.component('HeaderWrapper', {
  render: HeaderWrapper.render,
  data: HeaderWrapper.data
})

Vue.component('CustomArticle', {
  render: CustomArticle.render,
  data: CustomArticle.data
})

Vue.component('CustomFooter', {
  render: CustomFooter.render,
  data: CustomFooter.data
})

Vue.component('navbar', {
  render: navbar.render,
  data: navbar.data
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
