<template>
  <div id="app">
      <div class="share navigation">
          <Navigation msg="这是导航栏"/>
      </div>
      <div class="share sidebar">
          <Sidebar msg="这是侧边栏"/>
      </div>
      <div class="share page">
          <Page msg="这是内容页"/>
      </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Sidebar from './components/Sidebar.vue'
import Page from './components/Page.vue'

export default {
  name: 'App',
  components: {
      // 导航栏
      Navigation,
      // 侧边栏
      Sidebar,
      // 内容页
      Page
  }
}
</script>


<style>
    html, body{
        padding:0;
        margin:0;
        height: 100%;
        width: 100%;
    }
    #app {
        /*内边距*/
        padding:0;
        /*外边距*/
        margin:0;
        /*内边框显示*/
        /*box-sizing: border-box;*/
        /*显示边框*/
        /*border: solid black 1px;*/
        height: 100%;
    }
    /*公用*/
    .share{
        padding:0;
        margin:0;
        /*左浮动*/
        float: left;
        /*box-sizing: border-box;*/
        /*border: solid red 1px;*/
    }
     /*导航栏*/
    .navigation{
        width: 100%;
        height: 10%;
    }
    /*侧边栏*/
    .sidebar{
        width: 10%;
        height: 90%;
    }
    /*内容页*/
    .page{
        width: 90%;
        height: 90%;
    }
</style>
