// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

// Vue.config.productionTip = false

Vue.use(VueRouter)

// 定義路由組件
const Chat=require('./components/chat.vue');
const Wordcloud=require('./components/cloud.vue');

// 定以路由
const routers=[
	{path:'#/',redirect:'/chat'},
	{path:'#/chat',component:Chat},
	{path:'#/wordcloud',component:Wordcloud}
];
// 设置路由
const router=new VueRouter({
	routers
})
/* eslint-disable no-new */
new Vue({
  // el: '#app',
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')
