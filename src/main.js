import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/assets/styles/index.scss'

// 引入全局组件
import './global'
// 引入mock
import '@/mock'

// 引入filters
import * as filters from '@/utils/filters'
console.log({ filters })
for (const key in filters) {
  Vue.filter(key, filters[key])
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
