<template>
    <!-- 轮播 -->
        <mt-swipe :auto="4000" class="banner">
        <mt-swipe-item v-for="(item,i) in bannerList" :key="i">
            <a :href="item.url"><img :src="item.img" alt="" :class="{'full':isfull}"></a>
        </mt-swipe-item>
        
        </mt-swipe>
</template>

<script>

    export default {
        props:['bannerList','isfull']
    }
</script>

<style lang="less">
//轮播
    .banner{
      height: 200px;
     .mint-swipe-item{
      &:nth-child(1){
          background-color: pink;
      }
      &:nth-child(2){
          background-color: skyblue;
      }
      &:nth-child(3){
          background-color: yellow;
      } 
      a{
          display: block;
          width: 100%;
          height: 100%;
          img{
            //   width: 100%;
              height: 100%;
          
          }
          img,.full{
                width: 100%;
          }
      }
     }
      
    }
</style>
