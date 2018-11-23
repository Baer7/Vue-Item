import Vue from 'vue'
import App from './App.vue'
import 'mint-ui/lib/style.css'

//全部mint-ui
// import MintUI from 'mint-ui'
// Vue.use(MintUI)



//导入缩略图
import preview from 'vue2-preview'
Vue.use(preview)

//懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  // preLoad: 1.3,
  // error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
})

// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的时间过滤器
Vue.filter('dataTime',function(msg,moren="YYYY-MM-DD hh:mm:ss"){
  return  moment(msg).format(moren)
})

// 2. 发送ajax请求组件
import Resource from 'vue-resource'
Vue.use(Resource) 

//ajax全局配置
Vue.http.options.root='http://www.lovegf.cn:8899/'
Vue.http.options.emulateJSON = true

//mint-ui组件
import { Header,Swipe, SwipeItem ,Button} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

//导入MUI
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
//路由
import router from './router/'
//公共样式
import './css/common.less'




new Vue({
  el: '#app',
  render: h => h(App),
  router
})
