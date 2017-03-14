//这里import会默认去node_modules里面找vue包里面的vue.js
//注意点 Vue v必须大写
import Vue from 'vue';
//入口组件
import App from './App.vue';
//插件
import vueRouter from 'vue-router';
import vueResource from 'vue-resource';
import '../statics/css/base2.css';

import '../statics/css/checkout.css';
import '../statics/css/modal.css';
//引入子组件加入路由
import address from './components/address.vue';
import shopCart from './components/shopCart.vue';

//使用一下

Vue.use(vueRouter);
Vue.use(vueResource);
var router=new vueRouter({
   routes:[
     {path:"/",component:shopCart},
     {path:"/address",component:address}
   ]
});


new Vue({
  el:"#app",
  //render帮助我们渲染组件的，使用的是vue-template-compiler这个包
  //render:function(create){ return create(App)}
  render:c=>c(App),
  //var a=function(v1){return v1}
  //a=v1=>v1
  router:router
})