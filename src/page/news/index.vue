<template>
    <div class="news-container">
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
					<router-link :to="'/home/newsInfo/'+item.id" class="" >
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h3>{{item.title}}</h3>
							<span>发表时间:{{item.add_time | dataTime}}</span>
                            <span class="mui-pull-right">点击次数:{{item.click}}</span>
						</div>
					</router-link>
				</li>
				
		</ul>
    </div>
</template>

<script>
import {Toast} from 'mint-ui';
    export default {
        data(){
            return {
                newsList:''
            }
        },
        created(){
            this.GetNews()
        },
        methods:{
            GetNews(){
                this.$http.get('api/getnewslist').then(result=>{
                    console.log(result.body);
                    if(result.body.status===0){
                        this.newsList=result.body.message
                    }else{
                         Toast('获取新闻失败')
                    }
                })
            }
        }
        
    }
</script>

<style lang="less">
    .news-container{
        .mui-table-view{
            .mui-table-view-cell{
                .mui-media-body{
                    h3{
                        font-weight: 700;
                        font-size: 14px;
                        margin-bottom: 5px;
                        }
                    span{
                        font-size: 12px;
                        color: #666
                     }
                }
                     
           }
                
        }
       
    }
</style>
