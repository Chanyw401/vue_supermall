import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import toast from './components/common/toast'//引用toast.js
import VueLazyload from "vue-lazyload";

Vue.config.productionTip = false
// Vue.probeType.$bus = new Vue()
Vue.use(toast)  //图片懒加载
Vue.use(VueLazyload,{
  loading:require('./assets/img/profile/cart.svg')
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
