<template>
    <div id="app">

        <div id="pageVal">
            <div v-for="(item, index) of pageInformation" :key="index">
                <router-link :to="{path:item.url}" @click.native="pageOn(item.id)" class="pageList" tag="div">
                    <img class="pageListLogImg" src="../assets/logo.png" alt="">
                    <div class="pageListName" :style="{'color':item.fontColor}">{{item.name}}</div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Sidebar',
        data(){
            return{
                // 侧边栏数据信息
                pageInformation:[
                    {id:0,url:'a',name:'跳转到A页面',fontColor:"#BFCBD9"},
                    {id:1,url:'b',name:'跳转到B页面',fontColor:"#BFCBD9"}
                ]
            }
        },
        methods: {
            // 页面点击
            pageOn(val) {
                for (var i=0;i<this.pageInformation.length;i++){
                    //文字变色
                    if(val===this.pageInformation[i].id){
                        this.pageInformation[val].fontColor="#409EFF";
                    }else {
                        this.pageInformation[i].fontColor="#BFCBD9";
                    }
                }
            }
        }
    }
</script>

<style scoped>
    html, body{
        padding:0;
        margin:0;
        height: 100%;
        width: 100%;
    }
    #app{
        /*内边距*/
        padding:0;
        /*外边距*/
        margin:0;
        height: 100%;
        width: 100%;
        background-color: rgb(48, 65, 86);
    }
    #pageVal{
        width: 100%;
        height: 100%;
        overflow : scroll;
    }
    #pageVal::-webkit-scrollbar {
        display: none;
    }
    .pageList{
        transition: all .3s;
        width: 100%;
        height: 40px;
    }
    .pageList:hover{
        cursor:pointer;
        background-color: rgb(38, 52, 69);
    }
    .pageListLogImg{
        margin:3% 0 0 10%;
        height: 80%;
        float: left;
    }
    .pageListName{
        line-height:40px;
        float: left;
        font-size: 15px;
    }
</style>
