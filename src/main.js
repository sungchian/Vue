import Vue from 'vue'
import App from './App.vue'
import store from '@/store' 
import router from '@/router'
//關閉正式環境下提示功能，這裡先打開

Vue.config.productionTip = true

//初始化應用程序，使用render 函式將App 元件渲染出來
//然後將應用程序綁定在 DOM 上面，該 DOM 的 ID 是 #app
const vue = new Vue({
  router,
  store,
  render: h => h(App)
})

vue.$mount('#app')
