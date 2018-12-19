import Vue from 'vue'
import App from './app'
import router from './router'
import Vine from '@/'

import DemoBox from './components/demo-box'

Vue.use(Vine)
Vue.component(DemoBox.name, DemoBox)

if (process.env.NODE_ENV !== 'production') {
  Vue.config.productionTip = false
}

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
