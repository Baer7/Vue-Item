<template>
    <div class="goodsText-container">
        <h1>{{GoodsText.title}}</h1>
        <hr>
        <div v-html="GoodsText.content" class="text"></div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                id:this.$route.params.id,
                GoodsText:[]
            }
        },
        created(){
            this.getGoodsText()
        },
       methods:{
            getGoodsText(){
            this.$http.get('api/goods/getdesc/'+this.id).then(result=>{
                console.log(result.body.message);
                if(result.body.status===0){
                        this.GoodsText=result.body.message[0]
                    }
            })
        }
       }
    }
</script>

<style lang="less">
    .goodsText-container{
        padding: 5px;
        h1{
            color: skyblue;
            line-height: 40px;
            text-align: center;
        }
        .text{
            img{
                width: 100%;
            }
        }
    }

</style>
