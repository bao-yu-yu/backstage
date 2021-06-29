import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
// 引入组件
import A from "../components/page/A";
import B from "../components/page/B";

const routes = [
    {
        path:"/a",
        name:"AAAA",
        component: A
    },
    {
        path:"/b",
        name:"BBBB",
        component: B
    }
];

var router =  new VueRouter({
    routes
});
export default router;
