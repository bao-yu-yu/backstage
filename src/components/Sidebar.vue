<template>
    <div id="app">
        <div id="pageVal">
            <div class="pageList">
                <img class="pageListLogImg" src="../assets/logo.png" alt="">
                <div class="pageListName">{{msg}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Sidebar',
        props: {
            msg: String
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
        height: 5%;
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
        color: rgb(191, 203, 217);
        line-height:40px;
        float: left;
    }
</style>
