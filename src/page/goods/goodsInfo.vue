<template>
    <div class="goodsInfo-container">
            <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        <banner :bannerList="srcData" :isfull="false"></banner> 
					</div>
				</div>
			</div>
            <div class="mui-card">
				<div class="mui-card-header">商品名称</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        <p>
                            市场价:<span>￥{{goodsList.market_price}}</span>&nbsp;&nbsp;&nbsp;
                            销售价:<span>￥{{goodsList.sell_price}}</span>
                        </p>
                        <!-- 加减 -->
                        <numbox></numbox>
                       
                        <mt-button type="primary">立即购买</mt-button>
                        <mt-button type="danger">加入购物车</mt-button>
					</div>
				</div>
				
			</div>
			<div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        <p>商品货号：{{goodsList.goods_no}}</p>
                        <p>库存情况：{{goodsList.stock_quantity}}件</p>
                        <p>上架时间：{{goodsList.add_time}}</p>
					</div>
				</div>
                <div class="mui-card-footer">
				<mt-button type="primary" plain size="large" @click="GoodsText(id)">图文介绍</mt-button>
                <mt-button type="danger" plain size="large" @click="GoodsComment(id)">商品评论</mt-button>
                </div>
			</div>
    </div>
</template>

<script>
    //导入轮播
    import banner from '../comment/banner.vue'
    //导入加减
    import numbox from '../comment/numbox.vue'
    export default {
        data(){
            return {
                id:this.$route.params.id,
                srcData:[],
                goodsList:[]
            }
        },
        created(){
            this.GetBanner(),
            this.GetGoodsList()
        },
        methods:{
            GetBanner(){
                this.$http.get('api/getthumimages/'+this.id).then(result=>{
                    if(result.body.status===0){
                        //修改图片名,适配公共轮播图
                       result.body.message.forEach(function(item){
                            item.img=item.src
                        })
                         this.srcData=result.body.message
                    }
                })
            },
            GetGoodsList(){
                this.$http.get('api/goods/getinfo/'+this.id).then(result=>{
                     if(result.body.status===0){
                         console.log(result.body.message);
                         this.goodsList=result.body.message[0]
                         console.log(this.goodsList);
                         
                     }
                })
            },
            //图文介绍
            GoodsText(id){
                this.$router.push({path:'/home/goodsText/'+id})
            },
            //商品评论
            GoodsComment(id){
                this.$router.push({name:'goodsComment',params: {id}})
            }
           
        },
        components:{
            banner, 
            numbox
        }
    }
</script>

<style lang="less">
    .goodsInfo-container{
        background-color: #eee;
        overflow: hidden;
        .mui-card-content-inner{
            p{
                font-size: 16px;
                line-height: 40px;
                
                span:nth-child(1){
                    text-decoration: line-through;
                }
                 span:nth-child(2){
                    color:red;
                    font-size: 18px;
                    font-weight: 700;
                }
            }
            
        }
        .mui-card{
             .mui-card-footer{
                 display: block;
                .mint-button{
                    margin: 8px 0;
                    
                }
            }
        }
       
        
    }
</style>
