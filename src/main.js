import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// 2. 手动安装 VueRouter 
Vue.use(MintUI)
Vue.use(VueRouter)
//顶部
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
//底部
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import router from './router.js'
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
