<template>
  <div class="app-container">
    <!-- 顶部 -->
  <mt-header fixed title="Vue商城" class="header">
    <!-- <router-link to="/" slot="left">
    <mt-button icon="back">返回</mt-button>
  </router-link> -->
  </mt-header>
  <!-- 底部 -->
  <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id="weizhi">0</span>
        </span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    <!-- 内容 -->
  <transition>
      <router-view></router-view>
  </transition>
 

  </div>
</template>
<script>
import { Toast } from 'mint-ui';
//解决mui中a标签不能跳转问题
import mui from "../src/lib/mui/js/mui.min.js";
mui('body').on('tap','a',function(){
    window.top.location.href=this.href;
});


export default { 
methods:{
  btn(){
    Toast('提示信息');
  }
}
}
</script>
<style lang="less">

 .app-container{
   padding-top: 40px;
   padding-bottom: 50px;
   overflow-x: hidden;
  .header{
    z-index: 999;
  }
   
 }

 .v-enter{
   transform: translateX(100%);
   opacity:0;
 }
 .v-leave-to{
    transform: translateX(-100%);
   opacity:0;
   position: absolute;
 }
 .v-enter-active,.v-leave-active{
   transition: all .6s ease
 }
</style>
