<template>
    <div class="photoInfo-container">
        <!-- 大标题 -->
        <h3 class="title">{{photoInfo.title }}</h3>
        <!-- 子标题 -->
        <p class="subtitle">
        <span>发表时间：{{photoInfo.add_time | dataTime}}</span>
        <span>点击：{{photoInfo.click}}次</span>
        </p>
        <hr>
        <!-- 缩略图 -->
        <img class="preview-img" v-for="(item,index) in list" :src="item.src" height="100" @click="$preview.open(index, list)" :key="item.src">
        <!-- 内容 -->
        <div class="content" v-html="photoInfo.content"></div>
        <!-- 评论组件 -->
        <comment :id=this.id></comment>
    </div>
</template>

<script>
    import comment from '../comment/index.vue'
    export default {
        data(){
            return {
                
                id:this.$route.params.id,
                photoInfo:[],
                list:[
                    
                    {src:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2695313341,2343529602&fm=26&gp=0.jpg',w: 600,
          h: 400},
                    {src:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1629300826,4257003656&fm=26&gp=0.jpg',w: 600,
          h: 400},
                    {src:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1904767221,3280102211&fm=26&gp=0.jpg',w: 600,
          h: 400},
                    {src:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1846762866,3750107998&fm=26&gp=0.jpg',w: 600,
          h: 400},
                   
                    ]
                    
                    
                
            }
        },
        created(){
            this.getphotoInfo(),
            this.getPhotoPreview()
        },

        methods:{
            //详情信息
            getphotoInfo(){
                this.$http.get('api/getimageInfo/'+this.id).then(result=>{
                    // console.log(result.body.message[0]);
                    if(result.body.status===0){
                        this.photoInfo=result.body.message[0]
                    }
                    
                })
            },
            //缩略图片
            getPhotoPreview(){
                this.$http.get('api/getthumimages/'+this.id).then(result=>{
                    console.log(result.body.message);
                    if(result.body.status===0){
                        result.body.message.forEach(item=>{
                            item.w=600,
                            item.h=400
                        })
                        // this.list=result.body.message
                    }
                    
                })
            }
        },
        components:{
            comment
        }
    }
</script>

<style lang="less">
    .photoInfo-container{
        padding: 0 4px;
  .title {
    font-size: 18px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
  .content {
    font-size: 14px;
  }    
    }
</style>
