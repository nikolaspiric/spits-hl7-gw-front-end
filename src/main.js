import Vue from 'vue'
import App from './App'
import router from './router'
import Dashboard from '@/components/Dashboard'
import MySidebar from '@/components/MySidebar'
import Home from '@/components/Home'




Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
