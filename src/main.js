import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/assets/styles/index.scss'
import Vconsole from 'vconsole'

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

// 如果不是生产环境
if (process.env !== 'production') {
  // eslint-disable-next-line no-new
  new Vconsole()
}

// 阻止启动生产消息
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
