<template>
   <div class="count">
    购买数量:
    <input type="button" value="-"  @click="jian">
    <input type="text"  v-model="num">
    <input type="button" value="+"  @click="add">
</div>
</template>

<script>
    export default {
        data(){
            return {
                num:1,
            }
        },
        methods:{
            add(){
                this.num++
            },
            jian(){
                if(this.num<1){
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

