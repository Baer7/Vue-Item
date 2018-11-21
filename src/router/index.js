import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import HomeComponent from '../page/home'
import MomberComponent from '../page/momber'
import ShopcarComponent from '../page/shopcar'
import SearchComponent from '../page/search'
import NewsList from '../page/news'
import NewsInfo from '../page/news/newInfo.vue'
var router = new VueRouter({
  linkActiveClass:'mui-active',
  routes:[
      {path:'/',redirect:'/home'},
      {path:'/home',component:HomeComponent},
      {path:'/member',component:MomberComponent},
      {path:'/shopcar',component:ShopcarComponent},
      {path:'/search',component:SearchComponent},
      {path:'/home/newslist',component:NewsList},
      {path:'/home/newsInfo/:id',component:NewsInfo},
   ]
})
export default router