import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import HomeComponent from '../page/home'
import MomberComponent from '../page/momber'
import ShopcarComponent from '../page/shopcar'
import SearchComponent from '../page/search'
import NewsList from '../page/news'
import NewsInfo from '../page/news/newInfo.vue'
import PhotosList from '../page/photos/photosList.vue'
import PhotosInfo from '../page/photos/photoInfo.vue'
import GoodsList from '../page/goods/goodsList.vue'
import GoodsInfo from '../page/goods/goodsInfo.vue'
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
      {path:'/home/photosList',component:PhotosList},
      {path:'/home/photoInfo/:id',component:PhotosInfo},
      {path:'/home/goodsList',component:GoodsList},
      {path:'/home/goodsInfo/:id',component:GoodsInfo,name:'goodsInfo'},
   ]
})
export default router