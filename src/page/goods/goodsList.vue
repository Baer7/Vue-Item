<template>
    <div class="goodsList-container">
        <div class="goodsList" v-for="item in GoodsList" :key="item.id" @click="goodsInfo(item.id)">
            <div class="top">
                <img src="https://imgservice4.suning.cn/uimg1/b2c/image/cxAJUDf4Wi9c_tyXiNrV4w.png_400w_400h_4e" alt="">
                <!-- <img :src="item.img_url" alt=""> -->
                <h1>{{item.title}}</h1>
            </div>
            <div class="bottom">
                <p >
                    <span>￥{{item.sell_price}}</span>
                    <span>￥{{item.market_price}}</span>
                </p>
                <p >
                    <span >热卖中</span>
                    <span >剩{{item.stock_quantity}}件</span>
                </p>
            </div>
        </div>
         <mt-button type="danger" size="large"  @click="more">加载更多</mt-button>
     
    </div>
</template>

<script>
    export default {
        data(){
            return {
                pageindex:1,
                GoodsList:[],
            }
        },
        created(){
            this.getGoodsList()
        },
        methods:{
            //图片
            getGoodsList(){
                this.$http.get('api/getgoods?pageindex='+this.pageindex).then(result=>{
                    console.log(result.body.message);
                    if(result.body.status===0){
                        this.GoodsList=this.GoodsList.concat(result.body.message)
                    }
                })
            },
            //加载更多
            more(){
                this.pageindex++
                this.getGoodsList()
            },
            //详情
            goodsInfo(id){
                // // 字符串
                // router.push('home')

                // // 对象
                // router.push({ path: 'home' })

                // // 命名的路由
                // router.push({ name: 'user', params: { userId: 123 }})


                // this.$router.push('/home/goodsInfo/'+id)
                // this.$router.push({ path: '/home/goodsInfo/'+id})
                this.$router.push({ name: 'goodsInfo', params: { id }})
            }

        }
    }
</script>

<style lang="less">
    .goodsList-container{
        padding: 8px 5px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .goodsList{
            width: 49%;   
            border: 1px solid #ccc;
            box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
            margin-bottom: 10px;
            .top{
                margin-bottom: 5px;
                img{
                    width: 100%;
                }
                h1{
                    font-size: 16px;
                    font-weight: 700;
                    height: 48px;
                }
            } 
            .bottom{
                background-color: rgb(226, 226, 226);
                padding: 5px;
                p:nth-child(1){
                    line-height: 30px;
                    
                    span:nth-child(1){
                        color:red;
                        font-size: 18px;
                        margin-right: 10px;
                    }
                    span:nth-child(2){
                        text-decoration: line-through;
                    }
                }
                p:nth-child(2){
                    span:nth-child(2){
                        float: right;
                    }
                }
            }
        }
    }

</style>
