import {defineComponent} from "vue";
import FruitsView from "@/views/FruitsView.vue";
import EditFruitView from "@/views/EditFruitView.vue";
import VueRouter from "vue-router";
import Vue from "vue";
export default defineComponent({
    components: {EditFruitView, FruitsView}
})
// 1. 定义路由组件.

const FruitsView = {template:'<div><FruitsView</div>'}
const EditFruitView = {template: '<div><EditFruitView</div>'}
// 2. 定义路由
const routes = [
    { path: '/', component: FruitsView },
    { path: '/edit', component: EditFruitView },

]
// 3. 创建路由实例
const router = new VueRouter({
    mode:"history",
    routes // (缩写) 相当于 routes: routes
})

// 5. 创建并挂载根实例
const app = new Vue({
    router
}).$mount('#app')