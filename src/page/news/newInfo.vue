<template>
    <div class="newsinfo-container">
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" >
						<div class="mui-media-body">
							<h3>{{newsInfoList.title}}</h3>
							<span>发表时间:{{newsInfoList.add_time | dataTime}}</span>
                            <span class="mui-pull-right">点击数:{{newsInfoList.click}}</span>
						</div>
				</li>
		</ul>
        <div class="info-content" v-html="newsInfoList.content"></div>
        <comment :id=this.id></comment>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui';
    import Comment from '../comment'
    export default {
        data(){
            return {
               newsInfoList:'',
               id:this.$route.params.id
            }
        },
        
        created(){
            this.getNewsInfo()
        },
        methods:{
            getNewsInfo(){
                this.$http.get('api/getnew/'+this.id).then(result=>{
                   if(result.body.status===0){
                       console.log(result.body.message[0]);
                       
                     this.newsInfoList = result.body.message[0]
                   }else{
                       Toast('获取新闻信息失败')
                   }       
                })
            }
        },
        components:{
            comment:Comment
        }
    }
</script>

<style lang="less">
    .newsinfo-container{
        .mui-table-view{
            .mui-table-view-cell{
                .mui-media-body{
                    h3{
                        color:red;
                        text-align: center
                    }
                    span{
                        font-size: 12px;
                        color: #666
                     }
                }
            }
        }
        .info-content{
            img{
                width: 100%;         
            }
        }
    }
</style>
