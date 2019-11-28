import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import bus from './bus'
import vuetify from './plugins/vuetify'
import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$http = axios

new Vue({
  router,
  store,
  vuetify,
  bus,
  render: h => h(App)
}).$mount('#app')
