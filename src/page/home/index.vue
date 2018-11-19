<template>
    <div class="home-container">
        <mt-swipe :auto="4000" class="banner">
        <mt-swipe-item>1</mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
    
</script>
<style lang="less">
.home-container{
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
    }
      
    }
}

</style>

