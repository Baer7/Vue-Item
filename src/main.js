import Vue from 'vue'
import App from './App.vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

// 2. 手动安装 
Vue.use(MintUI)
//组件
import { Header,Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//底部
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
//路由
import router from './router/'
import './css/common.less'


new Vue({
  el: '#app',
  render: h => h(App),
  router
})
