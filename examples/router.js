import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'demo-nav',
      component: () => import('./components/demo-nav')
    },
    {
      path: '/sendcode',
      name: 'demo-sendcode',
      component: () => import('@/components/sendcode/demo')
    }
  ]
})

export default router
