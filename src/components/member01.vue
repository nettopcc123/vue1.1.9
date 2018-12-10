
<template>
  <div class="user">
      <div class="uwb">
          <div class="box">
          <p class="usename" @click.sync="onClick">{{ username }}</p>
          <!--<p class="uvip">{{ uvip }}</p>
           <ul class="uslis">
              <li><router-link :to="{name:'favorites'}" class="userouter"><i class="iconfont icon-favorite"></i><span>收藏</span></router-link></li>
              <li><router-link :to="{name:'follow'}" class="userouter"><i class="iconfont icon-follow"></i><span>关注</span></router-link></li>
              <li><router-link :to="{name:'fans'}" class="userouter"><i class="iconfont icon-fans"></i><span>粉丝</span></router-link></li>
          </ul> -->
          </div>
      </div>
      <ul class="uslis">
            <li><router-link :to="{name:'favorites'}" class="userouter"><i class="iconfont icon-favorite"></i><span>收藏</span></router-link></li>
            <li><router-link :to="{name:'follow'}" class="userouter"><i class="iconfont icon-follow"></i><span>关注</span></router-link></li>
            <li><router-link :to="{name:'fans'}" class="userouter"><i class="iconfont icon-fans"></i><span>粉丝</span></router-link></li>
      </ul>
      <ul class="uselis">
         <li><router-link :to="{name:'message'}" class="userouter"><i class="iconfont icon-message01 meicl"></i>消息中心<i class="iconfont icon-next01 usenext"></i></router-link></li>
         <li><router-link :to="{name:'feedback'}" class="userouter"><i class="iconfont icon-feedback02 meicl"></i>意见反馈<i class="iconfont icon-next01 usenext"></i></router-link></li>
         <li><router-link :to="{name:'profile'}" class="userouter"><i class="iconfont icon-profile meicl"></i>个人资料<i class="iconfont icon-next01 usenext"></i></router-link></li>
     </ul>
      <ul class="uselis">
         <li><router-link :to="{name:'favorites'}" class="userouter"><i class="iconfont icon-collection01 meicl"></i>我的收藏<i class="iconfont icon-next01 usenext"></i></router-link></li>
         <li @click="isloadshow" class="userouter"><i class="iconfont icon-clean01 meicl"></i>清除缓存<i class="iconfont icon-next01 usenext"></i></li>
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
      username:'',
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
        this.username= localStorage.getItem('u');
      },
      onClick: function(){
        if(this.username != '登入/注册'){
            return;
        }else{
            this.$router.push({path:'/login'});
        }
     }
  }
}
</script>

<style lang="scss" scoped>
@import "scss/base.scss";
.user{
  text-align: center
}
//.wrap{background: yellow;display: flex;-webkit-display: flex;align-items: center;-webkit-align-items: center; justify-content:center;-webkit- justify-content:center;}
.box{width: 100px;height: 100px;background: green;}

.uwb{
    background: url('img/mbg01.jpg') center top no-repeat;
    display: flex;
    -webkit-display: flex;
    align-items: center;
    -webkit-align-items: center; 
    justify-content:center;
    -webkit-justify-content:center;
    height: 200px;
    background-size:100% 100%; 
}
.uwb .box{
  width: 1rem;height:1rem;
  background:  url('img/tx01.png') center top no-repeat rgba(0,0,0,0.8);
  border-radius:0.56rem;
  border:0.08rem solid rgba(255,255,255,0.5);
  color: #fff;
  background-size:100%; 
}
.usename{
    padding:0.2rem 0px 0.05rem;
    line-height: 0.6rem;
}
.uvip{
    padding:0.05rem 0px 0.15rem;
}
.uselis{
  display:block;
  text-align: center;
  margin: 0.2rem auto;
  text-align: center;
  width: 100%;
  background: #fff;
}
.uselis li{
  display:block;
  line-height: 0.36rem;
  margin-bottom:0.05rem;
  text-align: left;
  padding:0 0.05rem;
  border-bottom: 0.01rem double #f3f3f3;
  font-size: 0.14rem;
  color:#5b5b5b;
}
.uselis li a{
  font-size: 0.14rem;
  color:#5b5b5b
}
.usenext{
  float:right;
  padding-right:0.15rem;
}
.meicl{
  float:left;
  margin-right:0.12rem;
  color:#b1b1b1;
  font-size: 0.26rem;
  padding-left:0.08rem;
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
    background:#fff;
    line-height: 0.36rem;
    padding:0.01rem 0;
}
.uslis li:nth-child(1){
    background:#dcece7!important;
}
.uslis li:nth-child(2){
    background:#f9eeeb!important;
}
.uslis li:nth-child(3){
    background:#fae4e9!important;
}

.uslis li:nth-child(1) i,.uslis li:nth-child(1) span{
    color:#086d4f
}
.uslis li:nth-child(2) i,.uslis li:nth-child(2) span{
    color:#ea3106
}
.uslis li:nth-child(3) i,.uslis li:nth-child(3) span{
    color:#990b2a
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
</style>
