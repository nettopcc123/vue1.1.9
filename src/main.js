// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
import store from './store';
import Vuex from 'vuex'
import 'vue2-toast/lib/toast.css';
import Toast from 'vue2-toast';
import $ from 'jquery';
import promise from 'es6-promise'; // es6转es5
promise.polyfill();

import http from '@/utils/http'; //axios二次封装
import api from '@/utils/api'; //api封装
//import IndexedDb from '@/utils/indexedDb'; //本地存储数据库


//leancloud.cn
var AV = require('leancloud-storage');
var AV = require('leancloud-storage/live-query');
var { Query, User } = AV;
// 实时消息服务
var { Realtime, TextMessage } = require('leancloud-realtime');


import 'babel-polyfill';
import Es6Promise from 'es6-promise';
require('es6-promise').polyfill();
Es6Promise.polyfill();

/**
 4. 拼团详情
 */
export const groupDetail = param => {
  return req.get('/RestHome/GroupDetail',param);
}


Vue.prototype.axios = axios;
Vue.prototype.http = http;
Vue.prototype.api = api;
//Vue.prototype.IndexedDb = IndexedDb;
Vue.use(VueAwesomeSwiper,Vuex,$);
Vue.prototype.http = http;
Vue.prototype.api = api;
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  components: { 
    App 
  },
  
  template: '<App/>',
  created() {
     this.$nextTick(()=>{
        this.bdTokenUrl = this.$route.params.url;
        if (!store.state.isuser) {  // 通过vuex state获取当前的token是否存在   if (store.state.token) {
            localStorage.setItem('u','登入/注册')
        }
    });
},
})

//获取当前时间
Vue.prototype.getNowFormatDate = function() {
    var date = new Date();
    var getWeek = date.getDay();
    var week = '  星期';
    switch(getWeek){
        case 0:
            week += '日';
            break;
        case 1:
            week += '一';
            break;
        case 2:
            week += '二';
            break;
        case 3:
            week += '三';
            break;
        case 4:
            week += '四';
            break;
        case 5:
            week += '五';
            break;
        case 6:
            week += '六';
            break;
    };
    var seperator1 = "-";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate + week;
    return currentdate;
};


Vue.use(Toast, {
    type: 'center',
    duration: 3000,
    wordWrap: true,
    width: '150px'
});


//判断用户是否登入
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
        if (store.state.isuser) {  // 通过vuex state获取当前的token是否存在   if (store.state.token) {
            next();
        }
        else {
            next({
                path: '/login',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            });
            localStorage.setItem('u','登入/注册')
            store.commit('ismenuhid');
        }
    }
    else {
        if (store.state.isuser) {  // 通过vuex state获取当前的token是否存在   if (store.state.token) {
            next();
        }
        else {
            localStorage.setItem('u','登入/注册')
            next();
        }
    }
})
