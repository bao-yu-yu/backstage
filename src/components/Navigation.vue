<template>
    <div id="app">
        <div id="logo">
            <img class="logo" src="../assets/logo.png" alt="">
        </div>
        <div id="other"></div>
        <div id="user">
            <img class="userImg" src="../assets/logo.png" alt="">
            <div class="userName">{{msg}}</div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'Navigation',
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
        background-color: #000000;
    }
    #logo{
        float: left;
        width: 5%;
    }
    #logo,.logo{
        height: 90%;
        margin:5px 0 0 1%;
    }
    #other{
        float: left;
        width: 80%;
    }
    #user{
        float: right;
        height: 100%;
        width: 10%;
    }
    .userImg{
        float: right;
        height: 60%;
        margin:20px 20px 0 0;
    }
    .userName{
        float: right;
        line-height:90px;
        font-weight:100;
        font-size: 22px;
        color: white;
    }
</style>
