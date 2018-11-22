<template>
    <div class="comment-container">
        <h1>发表评论</h1>
        <hr>
        <textarea name="" id="" cols="30" rows="10" placeholder="请输入内容(不得大于120字)" v-model="text"></textarea>
        <mt-button type="primary" size="large" @click="add">发表评论</mt-button>
        <h1>评论区</h1>
        <ul class="mui-table-view" v-for="(item ,i) in commentList" :key="i">
            <li class="mui-table-view-cell">
                <div>第{{i+1}}楼&nbsp;&nbsp;用户:{{item.user_name}}&nbsp;发表时间:{{item.add_time | dataTime}}</div>
                <p>评论内容:{{item.content==='undefined'?'[此用户很懒,没有输入内容]':item.content}}</p>
            </li>
            
        </ul>
        <mt-button type="danger" size="large" plain @click="more">加载更多</mt-button>
    </div>
</template>

<script>
import { Toast } from "mint-ui";
    import { Button } from 'mint-ui';
    export default {
        data(){
            return {
                text:'',
                commentList:[],
                pageindex:1
            }
        },
        props:['id'],
         created(){
            this.GetComment()
        },
        methods:{
             GetComment(){
            this.$http.get("api/getcomments/"+this.id+"?pageindex="+this.pageindex).then(result=>{
                console.log(result.body);
                if(result.body.status===0 ){
                    // if(bool){
                        
                    //     this.commentList=result.body.message
                    // }else{
                        
                         this.commentList=this.commentList.concat(result.body.message)
                    // }
                    // console.log(this.commentList);
                }else{
                    Toast("获取评论失败！");
                }
                
            })
        },
        add(){
            if(this.text.trim().length===0){
                 Toast("请输入内容");
            }else{
                this.$http.post('api/postcomment/'+this.id,{content:this.text}).then(result=>{
                console.log(result.body);
                if(result.body.status===0){
                    // Toast("提交成功");
                    // Toast({
                    //     message: '提交成功',
                    //     position: 'bottom',
                    //     duration: 1000
                    // });
                     this.text=''
                     this.pageindex=1
                     this.commentList=[]
                     this.GetComment()
                }else{

                     Toast("提交失败");
                }
                 
            })
            }
           
           
        },
         more(){
            this.pageindex++;
            this.GetComment()
            }
        }
       
       
    }
</script>

<style lang="less">
.comment-container{
    padding: 3px;
    h1{
        font-size: 20px;
        line-height: 30px;
        font-weight: 700;
        height: 30px;
    }
    hr{
        margin-top: 0;
    }
    textarea{
        padding: 10px;
        height: 100px;
        font-size: 16px;
    }
    .mint-button{
        margin-bottom: 5px;
    }
    .mui-table-view{
        div{
            font-size: 14px;
        }
    }
}

</style>
