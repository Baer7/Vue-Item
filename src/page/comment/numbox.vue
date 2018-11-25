<template>
   <div class="count" data-numbox-min='1'>
    购买数量:
    <input type="button" value="-"  @click="jian" >
    <input type="text"  v-model="num">
    <input type="button" value="+"  @click="add(max)">
</div>

</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";
    export default {
        data(){
            return {
                num:1,
                
            }
        },
        props:['max'],
        methods:{
            add(max){
                if(this.num>=max){
                    return
                }
                this.num++
                console.log(max);
                
            },
            jian(){
                if(this.num<=1){
                    return
                }
                this.num--
                
            }
        }
    }
</script>

<style lang="less">
    .count{
                input{
                    background-color: #f9f9f9;
                    // color:silver;
                    // display: flex;
                     width: 40px;
                    height: 40px;
                    margin: 10px -2px;
                }
                input:nth-child(2){
                //    outline: none;
                    padding: 0;
                    background-color: #fff;
                    padding-left: 15px;
                    // color:none;
                    
                }
            }
</style>

