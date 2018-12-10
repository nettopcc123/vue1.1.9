
<template>
  <div class="newlists" id="newlists">
    <!-- <h2 class="itit">极速新闻 <span></span></h2> -->
   <div class="menu_w">
   <ul class="smeu">
       <li><router-link :to="{ name: 'newlists1', params:{ newtit: '汽车新闻' }}">
         <div class="nsw_r">
            <h5 class="nstit">汽车新闻</h5>
            <p class="nscon">及时的体育新闻报道是网友最喜欢的体育新闻</p>
         </div>
         </router-link></li>
       <li><router-link :to="{ name: 'newlists2', params:{ newtit: '娱乐新闻' }}">
         <div class="nsw_l">
            <h5 class="nstit">娱乐新闻</h5>
            <p class="nscon">新最全面的娱乐新闻信息综合站点,包括明星 、电影、娱乐等信息</p>
         </div>
         </router-link></li>
       <!-- <li><router-link :to="{ name: 'newlists3'}">军事</router-link></li> -->
       <li><router-link :to="{ name: 'newlists4', params:{ newtit: '体育新闻' }}">
         <div class="nsw_r">
            <h5 class="nstit">体育新闻</h5>
            <p class="nscon">提供最快速最全面最专业的体育新闻和赛事报道</p>
         </div>
         </router-link></li>
       <li><router-link :to="{ name: 'newlists5', params:{ newtit: 'NBA新闻' }}">
         <div class="nsw_l">
            <h5 class="nstit">NBA新闻</h5>
            <p class="nscon">每日报道NBA，WCBA等联赛最热门新闻</p>
         </div>
         </router-link></li>
       <li><router-link :to="{ name: 'newlists6', params:{ newtit: '财经新闻' }}">
         <div class="nsw_r">
            <h5 class="nstit">财经新闻</h5>
            <p class="nscon">提供7X24小时财经资讯及全球金融市场报价</p>
         </div>
         </router-link></li>
       <li><router-link :to="{ name: 'newlists7', params:{ newtit: '科技新闻' }}">
         <div class="nsw_l">
            <h5 class="nstit">科技新闻</h5>
            <p class="nscon">报道IT业界,电信、互联网及大众科技新闻,</p>
         </div>
         </router-link></li>
    </ul>
   <div class="marw">
    <i class="iconfont icon-down"></i>
   </div>
    </div>
    <!-- <vue-banner01></vue-banner01> -->
    <!-- <router-view></router-view> -->
        <div class="infinite-scroll" v-show="loading">
      <svg class="loader-circular" viewBox="25 25 50 50">
        <circle class="loader-path" cx="50" cy="50" r="10" fill="none" stroke="rgb(53, 157, 218)" stroke-width="1"></circle>
      </svg>
      <span class="infinite-scroll-text">{{tips}}</span>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import banner01 from './../components/banner01';
import newlists from './../components/newlists';
import { setTimeout } from 'timers';
import $ from 'jquery';

export default {
  name: 'user',
  data () {
    return {
      newList:[],
      REQUIRE: true,
      loading: false,
      num:0,
      tips:'努力加载中...',
      url1: '',
      isNewsMenu:false
    }
  },
  components: {
    'vue-banner01':banner01,
    'vue-newlists':newlists
  }
}
</script>

<style lang="scss" scoped>
@import "scss/base.scss";
.vrw{
    height: 90%;
}

.nlist{
  display:block;
  text-align: center;
  text-align: center
}
.nlist li{
  display:block;
  margin-bottom:0.05rem;
  text-align: left;
  font-size: 0.16rem;
  color:#5b5b5b;
  border-bottom:1px dotted #ccc
}
.nlist li a{
  font-size: 0.16rem;
  color:#5b5b5b
}
.ntit{
  font-size: 0.14rem;
  color:#303030;
  font-weight: normal;
  line-height: 0.28rem;
}
.infinite-scroll{
  width: 0.5rem;
  height: 0.2rem;
  margin:0 auto;
}
.nimg img{
  width: 1rem;
  height:0.7rem;
}
.ntime{
    color: #b5b5b5;
    width: 50%;
    text-align: left;
    float:right;
}
.nname{
    width: 50%;
    color: #de4c3a;
    float:right;
}
.ntb{
    display: block;
    clear:both;
    overflow: hidden;
    margin-top:0.08rem;
}
.menu_w{
  width: 3.75rem;
  display: block;
  overflow:hidden;
}
.smeu{
    background:#f9f9f9;
    overflow: hidden;
    line-height: 0.36rem;
    color:$bgColor;
    width: 100%;
    margin:0 auto;
}
.smeu li{
    width:100%;
    text-align: center;
    font-size:0.14rem;
    margin-top:10px;
    height: 100px;
}
.smeu li:nth-child(1){
    background: url('img/news01.jpg') left bottom no-repeat;
    background-size: 100% 100%;
}
.smeu li:nth-child(2){
    background: url('img/news02.jpg') left bottom no-repeat;
    background-size: 100% 100%;
}
.smeu li:nth-child(3){
    background: url('img/news03.jpg') left bottom no-repeat;
    background-size: 100% 100%;
}
.smeu li:nth-child(4){
    background: url('img/news04.jpg') left bottom no-repeat;
    background-size: 100% 100%;
}
.smeu li:nth-child(5){
    background: url('img/news05.jpg') left bottom no-repeat;
    background-size: 100% 100%;
}
.smeu li:nth-child(6){
    background: url('img/news06.jpg') left bottom no-repeat;
    background-size: 100% 100%;
}
.smeu li:nth-child(7){
    background: url('img/006.jpg') left bottom no-repeat;
    background-size: 100% 100%;
}
.smeu li:nth-child(8){
    background: url('img/006.jpg') left bottom no-repeat;
    background-size: 100% 100%;
}
.smeu li a{
    color:#ababab;
    display: block;
    clear:both;
    overflow: hidden;
    font-size: 0.14rem;
    height: 100px;
}
.smeu .router-link-active{
    color:#f15149;
    border-bottom:0.01rem solid #f15149;
}
.menu_w .marw{
  width: 0.25rem;
  float:right;
  line-height: 0.36rem;
  text-align: center;
  font-size: 0.2rem;
}
.vrw {
    width: 100%;
}
.itit{
   background:$bgColor;
   color:#fff;
   line-height: 0.4rem;
   border-left: 0.03rem solid $bgColor;
}
.nsw_r{
  width: 50%;
  float:right;
  padding-right:0.1rem
}
.nsw_r .nstit{
  text-align: left;
  font-size: 0.24rem;
  color:#fff;
  margin-top:0.08rem;
  margin-bottom:0.02rem;
}
.nsw_r .nscon{
  text-align: left;
  font-size:0.12rem;
  line-height: 0.2rem;
  color:#fff;
}

.nsw_l{
  width: 50%;
  float:left;
  padding-left:0.1rem
}
.nsw_l .nstit{
  text-align: left;
  font-size: 0.24rem;
  color:#fff;
  margin-top:0.08rem;
  margin-bottom:0.02rem;
}
.nsw_l .nscon{
  text-align: left;
  font-size:0.12rem;
  line-height: 0.2rem;
  color:#fff;
}
</style>

