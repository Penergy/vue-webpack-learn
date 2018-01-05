// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import navbar from '@/components/Navbar.vue'

Vue.config.productionTip = false
console.log(navbar)

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
