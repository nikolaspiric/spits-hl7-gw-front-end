import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Dashboard from '@/components/Dashboard'
import MySidebar from '@/components/MySidebar'
import Home from '@/components/Home'
import Navbar from '@/components/Navbar'

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
	
  routes: [
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: Dashboard,
    },
	{
	
      path: '',
      name: 'Home',
      component: Home	
		
	}
  ]
})
