import Vue from 'vue'
//import Router from 'vue-router'
import Router from './mrouter'
import HelloWorld from '@/components/HelloWorld'
import HelloVue from '@/components/HelloVue'


Vue.use(Router) // router.install(Vue)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

    {
      path: '/hellovue',
      name: 'Hellovue',
      component: HelloVue
    },
    
  ]
})
