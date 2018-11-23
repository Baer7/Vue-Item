<template>
    <div class="photosList-container">
        <!-- 顶部滑动条 -->
        <div id="slider" class="mui-slider">
            <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll" >
                    <!-- ['mui-control-item' ,item.id===0?'mui-active':''] -->
                    <span :class="{'mui-control-item':true,'mui-active':item.id===0}" v-for="item in photosData" :key="item.id" @click="GetPhotos(item.id)">
                        {{item.title}}
                    </span>
                </div>
            </div>
        </div>
      <!-- 图片栏 -->
         <ul class="photos-container">
            <router-link v-for="item in photosList" :key="item.id" :to="'/home/photoInfo/'+item.id" tag="li">
                    <img v-lazy="item.img_url" lazy="loading">
                    <div class="photos-data">
                        <h1>{{item.title}}</h1>
                        <div>{{item.zhaiyao}}</div>
                    </div>
            </router-link >
        </ul>

   
    </div>
</template>

<script>

    import mui from '../../lib/mui/js/mui.min.js'
  
    export default {
        data(){
            return {
                photosData:[],
                photosList:[]
            }
        },
        created(){
           this.GetPhotosData()
           this.GetPhotos(0)
        },
        mounted(){
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        },
        methods:{
            //滑动条
            GetPhotosData(){
                this.$http.get('api/getimgcategory').then(result=>{
                   if(result.body.status===0){
                    result.body.message.unshift({id:0,title:'全部'})
                    this.photosData=result.body.message
                    // console.log(result.body.message);
                   }
                })
            },
            //图片
            GetPhotos(id){
                this.$http.get('api/getimages/'+id).then(result=>{
                    // console.log(result.body.message);
                    if(result.body.status===0){
                        this.photosList=result.body.message
                    }
                })
            }
        
        }
    }
</script>

<style lang="less">
* { touch-action: pan-y; }
.photosList-container{
    padding: 10px;
    .photos-container{
        li{
             background:#ccc;
                width: 100%;
                height: 100%; 
                 box-shadow: 1px 1px 9px #666;
            margin-bottom: 10px;
            position: relative;
                img{
                // background:#ccc;
                width: 100%;
                height: 100%; 
               
           
             }
             img[lazy=loading] {
                // width: 100px;
                // height: 100px;
                //  width: 100%;
                // height: 100%;
                // background-color: red;
                display: block;
                width: 40px;
                height: 300px;
                margin: 0 auto;
                background-color: red;

            }
           .photos-data{
            //    padding: 10px;
            overflow: hidden;
                color:#fff;
                position: absolute;
                bottom: 0px;
                background-color:rgba(0, 0, 0, 0.3);
                // max-height: 84px;
                h1{
                    font-size: 16px;
                    font-weight: 700;
                }
                div{
                    font-size: 13px;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 3;
                    overflow: hidden;

                }
            }
        }
    }
}
</style>
