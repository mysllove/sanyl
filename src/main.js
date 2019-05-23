import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import iView from 'iview'
import animate from 'animate.css'
import 'iview/dist/styles/iview.css'
import './assets/fonts/typeface.css'
Vue.use(iView)
Vue.use(animate)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
