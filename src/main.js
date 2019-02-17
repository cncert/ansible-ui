import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/icon/iconfont.css'


Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });
// 传入一个全局配置对象。该对象目前支持 size 与 zIndex 字段。
//size 用于改变组件的默认尺寸，zIndex 设置弹框的初始 z-index（默认值：2000）

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
