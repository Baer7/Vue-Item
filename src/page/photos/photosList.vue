<template>
    <div class="photosList-container">
    <div id="slider" class="mui-slider">
    <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll" >
            <!-- ['mui-control-item' ,item.id===0?'mui-active':''] -->
            <a :class="{'mui-control-item':true,'mui-active':item.id===0}" href="javascript:;" v-for="item in photosData" :key="item.id">
                {{item.title}}
            </a>
        
    </div>
    </div>
    </div>
    </div>
</template>

<script>

    import mui from '../../lib/mui/js/mui.min.js'
    export default {
        data(){
            return {
                photosData:''
            }
        },
        created(){
           this.GetPhotosData()
        },
        mounted(){
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        },
        methods:{
            GetPhotosData(){
                this.$http.get('api/getimgcategory').then(result=>{
                   if(result.body.status===0){
                    result.body.message.unshift({id:0,title:'全部'})
                    this.photosData=result.body.message
                    console.log(result.body.message);
                   }
                })
            }
        }
    }
</script>

<style>
* { touch-action: pan-y; }
</style>
