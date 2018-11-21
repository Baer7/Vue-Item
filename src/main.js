import Vue from 'vue'
import App from './App.vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import Resource from 'vue-resource'

// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的时间过滤器
Vue.filter('dataTime',function(msg,moren="YYYY-MM-DD hh:mm:ss"){
  return  moment(msg).format(moren)
})

// 2. 手动安装 
Vue.use(MintUI)
Vue.use(Resource) 

Vue.http.options.root='http://www.lovegf.cn:8899/'

//mint-ui组件
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
