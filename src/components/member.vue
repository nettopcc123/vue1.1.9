
<template>
  <div class="user">
     <router-link :to="{ name: 'login'}">
      <div class="uwb">
          <img :src="require('./../components/img/user.png?1111')" alt="" class="userimg">
          <p class="usename">{{ username }}</p>
          <!-- <ul class="uslis">
              <li><router-link :to="{name:'favorites'}" class="userouter"><i class="iconfont icon-favorite"></i><span>收藏</span></router-link></li>
              <li><router-link :to="{name:'follow'}" class="userouter"><i class="iconfont icon-follow"></i><span>关注</span></router-link></li>
              <li><router-link :to="{name:'fans'}" class="userouter"><i class="iconfont icon-fans"></i><span>粉丝</span></router-link></li>
          </ul> -->
      </div>
       </router-link>
      <ul class="uselis">
         <li><router-link :to="{name:'feedback'}" class="userouter"><i class="iconfont icon-feedback01 meicl"></i>意见反馈<i class="iconfont icon-next01 usenext"></i></router-link></li>
         <!-- <li><router-link :to="{name:'vip'}" class="userouter"><i class="iconfont icon-member meicl"></i>会员俱乐部<i class="iconfont icon-next01 usenext"></i></router-link></li>
         <li><router-link :to="{name:'shoper'}" class="userouter"><i class="iconfont icon-shopping meicl"></i>积分商城<i class="iconfont icon-next01 usenext"></i></router-link></li> -->
         <li><router-link :to="{name:'disclaimer'}" class="userouter"><i class="iconfont icon-statement meicl"></i>免责声明<i class="iconfont icon-next01 usenext"></i></router-link></li>
         <li><router-link :to="{name:'message'}" class="userouter"><i class="iconfont icon-notice meicl"></i>站内通知<i class="iconfont icon-next01 usenext"></i></router-link></li>
         <li><router-link :to="{name:'favorites'}" class="userouter"><i class="iconfont icon-collection meicl"></i>我的收藏<i class="iconfont icon-next01 usenext"></i></router-link></li>
         <li @click="isloadshow" class="userouter"><i class="iconfont icon-clean meicl"></i>清除缓存<i class="iconfont icon-next01 usenext"></i></li>
     </ul>
  </div>
</template>
<script>
import axios from 'axios';
import banner from './../components/banner' ;
import newlists from './../components/newlists';
import { setTimeout } from 'timers';



export default {
  name: 'user',
  data () {
    return {
      newList:[],
      count:0,
      username:'暂未登入',
      uvip:'初出茅庐'
    }
  },
  computed:{
    num(){
      return this.$store.state.count;
    }
  },
  components: {
    'vue-banner':banner,
    'vue-newlists':newlists
  },
  mounted(){
     this.$nextTick(function () {
     this.getUserName()
    })
  },
  methods:{
      isalertshow() {
        this.$store.commit('isalertshow');
      },
      isalerthid() {
        this.$store.commit('isalerthid');
      },
      isloadshow() {
        this.$store.commit('isloadshow');
          setTimeout(()=>{
            this.isloadhid();
            this.$toast.center('清除成功');
          },2000)
      },
      isloadhid() {
        this.$store.commit('isloadhid');
      },
      getUserName() {
        this.username = localStorage.getItem('u');
      }
  }
}
</script>

<style lang="scss" scoped>
@import "scss/base.scss";
.user{
  text-align: center
}
.userimg{
    position:absolute;
    left: 50%;
    top:-23px;
    margin-left:-23px;
    width: 0.46rem;
    height: 0.46rem;
}
.uwb{
    background: url('img/mbg.jpg') center top no-repeat;
    border-radius: 0.05rem;
    width: 82%;
    padding: 0.15rem;
    margin:0.4rem auto 0.1rem;
    position: relative;
    background-size:100%;
    height: 0.9rem;
}
.usename{
    padding:0.2rem 0px 0.05rem;
}
.uvip{
    padding:0.05rem 0px 0.15rem;
}
.uselis{
  display:block;
  text-align: center;
  margin: 0.1rem auto;
  text-align: center;
  width: 90%;
}
.uselis li{
  display:block;
  line-height: 0.5rem;
  margin-bottom:0.05rem;
  text-align: left;
  padding:0 0.05rem;
  border-bottom: 0.01rem double #dce0bf;
  font-size: 0.16rem;
  color:#5b5b5b;
}
.uselis li a{
  font-size: 0.16rem;
  color:#5b5b5b
}
.usenext{
  float:right;
}
.meicl{
  float:left;
  margin-right:0.12rem;
  color:#969e68;
  font-size: 0.26rem;
}
.userouter{
  display: block
}
.uitit{
    display: block;
    line-height: 0.36rem!important;
    border-left: 0.03rem solid $bgColor!important;
    padding-left:0.15rem;
    font-size: 0.18rem;
    text-align: left;
    background:#fff!important;
}
.uslis{
    display: block;
    overflow: hidden;
    margin:0px auto;
}
.uslis li i{
    float:left;
    padding-left:0.2rem;
    font-size: 0.16rem;
    color:#292929
}
.uslis li a{
    color:#292929
}
.uslis li{
    width: 33%;
    float:left;
    background: url('img/line.jpg') left center no-repeat;
}
.uslis li span{
    float:left;
    padding-left:0.1rem;
}
.uslis li:nth-child(1){
    background:none;
}
.uslis li:nth-child(2){
    width: 34%;
}
.uwb a{
  color:#fff;
}
</style>
