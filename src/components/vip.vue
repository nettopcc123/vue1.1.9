<template>
<div id="favorites">
    <div class="uswv"> 
        <div class="qdt">
            <div class="qiandao" @click="qdfun"><span class="gif"><img :src="require('./../components/img/gift.gif?1111')" alt="" class="userimg"></span><span class="qfont">{{ qiandao }}</span></div>
        </div>
        <div class="qdb">
            <p class="qdl">
                <span class="usimg"><img :src="require('./../components/img/user.png?1111')" alt="" class="userimg"></span>
                <span class="usfont">{{ username }}</span>
            </p>
            <span class="v1"><img :src="require('./../components/img/v1.png?1111')" alt="" class="userimg"></span>
        </div>
    </div>
    <ul class="level">
        <li>
            <router-link :to="{ name: 'liberty', params: { tit:'超值兑换'}}">
                <i class="iconfont icon-exc"></i>
                <p>超值兑换</p>
            </router-link>
        </li>
        <li>
            <router-link :to="{ name: 'liberty', params: { tit:'生日惊喜'}}">
                <i class="iconfont icon-birthday"></i>
                <p>生日惊喜</p>
            </router-link>
        </li>
        <li>
            <router-link :to="{ name: 'liberty', params: { tit:'等级礼包'}}">
                <i class="iconfont icon-gift"></i>
                <p>等级礼包</p>
            </router-link>
        </li>
    </ul>
    <ul class="le">
        <router-link :to="{ name: 'coupon', params: { tit:'生日惊喜'}}">
        <li>
            <p class="lnob">0</p>
            <p>兑换券</p>
        </li>
        <li>
            <p class="lnob">1</p>
            <p>优惠券</p>
        </li>
        </router-link>
    </ul>
    <div class="vban">
        <img :src="require('./../components/img/vban.jpg?1111')" alt="" class="vbanimg">
    </div>
    <div class="hotlis">
        <p class="hottit">
            <span class="hotlin_l"></span>
            <span class="hotl"><img :src="require('./../components/img/hot.png')" alt="" class="vbanimg"></span>
            <span class="hotlin_r"></span>
            <span class="hotr">热门权益</span>
        </p>
        <ul class="inter">
            <li>
                <router-link :to="{ name: 'exch', params:{ name:'全场通用2元优惠券', con:'2元优惠券'} }">
                    <span class="intimg"><img :src="require('./../components/img/yh_01.jpg')" alt="" class="vbanimg"></span><span class="intfont">全场通用2元优惠券</span>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'exch', params:{ name:'大乐透一注优惠券', con:'随机赠送一注大乐透'} }">
                    <span class="intimg"><img :src="require('./../components/img/yh_02.jpg')" alt="" class="vbanimg"></span><span class="intfont">大乐透一注</span>
                </router-link>    
            </li>
        </ul>
    </div>
 </div> 
 </template>
<script>
import axios from 'axios';
import Toast from 'vue2-toast';
export default {
  name:'favorites',
  data(){
    return {
      weather:[],
      qiandao: '签 到',
      username:'',
      gitqd:false
    }
  },
  created(){
    this.isqd();
  }
  ,
  mounted:function(){
    this.$nextTick(function(){
        this.getname();
        this.isqd();
    })
  },
  methods:{
    getname(){
        this.username = localStorage.getItem('u');
    },
    qdfun(){
        this.gitqd = localStorage.getItem('qd');
        if(this.gitqd == 'true'){
            this.$toast.center('您已签到，请误重复签到');
            return;
        }
        this.qiandao = ' 已签到';
        localStorage.setItem('qd',true);
        this.$toast.center('恭喜您成功签到，获得 10 积分奖励');
    },
    isqd(){
        this.gitqd = localStorage.getItem('qd');
        if(this.gitqd == 'true'){
            this.qiandao = ' 已签到';
            return;
        }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "scss/base.scss";
.le{
    display: block;
    overflow:hidden;
}
.le li{
    float:left;
    width: 50%;
    text-align: center;
    margin:0.1rem auto;
    background: #fff;
    padding:0.08rem 0;
}
.le a{
    color:#7a7979;
}
.uswv{
    background: #c8c8c8;
    height: 1.8rem;
    width: 100%;
    background: url('img/gbg.gif') left center no-repeat;
}
.qdl{
    float:left;
    padding-left:0.2rem;
}
.usimg{
    float:left;
    padding-right:0.2rem;
}
.usfont{
    float:left;
    line-height: 0.7rem
}
.favors{
 display: block;
 text-align: center;
 font-size: 0.14rem;
 color: #4a4a4a;
 margin-top:0.2rem
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
.v1{
    float:right;
    padding-right:0.2rem;
}
.qdt{
    display: block;
    clear: both;
    position: relative;
    overflow: hidden;
    height:0.8rem;;
}
.qdb{
    display: block;
    clear: both;
    position: relative
}
.qiandao{
    position:absolute;
    right:0px; 
    top:10px;
    background:#fff;
    border-radius: 0.1rem 0 0 0.1rem;
    width: 0.9rem;
    height: 0.4rem;
    line-height: 0.4rem;
    text-align: center;
    font-size: 0.16rem;
}
.qiandao .qfont{
    float:right;
    padding-right:0.08rem;
    font-size:0.14rem;
    color:#c14f02
}
.qiandao .gif{
    width: 28px;
    height: 28px;
    float: left;
    position:absolute;
    left:0.08rem;
    top:0.06rem;
}
.qiandao .gif img{
    width: 28px;
    height: 28px;
    overflow: hidden;
}
.qiandao span{
    overflow: hidden
}
.level{
    display: block;
    clear: both;
    overflow: hidden;
}
.level li{
    float:left;
    overflow: hidden;
    background: #fff;
    width: 33%;
    text-align: center;
    padding-top: 0.08rem;
}
.level li i{
    line-height: 0.4rem;
    font-size:0.36rem;
    color:#eab209;
}
.level li a{
    color:#383838;
}
.level li p{
    line-height: 0.3rem;
}
.level li:nth-child(2){
    width: 34%;
}
.vban{
    display: block;
    background: #fff;
    margin:0rem auto 0.1rem;
}
.hotlis{
    background:#fff;
    padding:0.15rem 0px;
    text-align: center;
}
.hottit{
    line-height: 0.26rem;
    width: 2.1rem;
    margin:0 auto;
    background:#c14f02;
}
.hotl{
    float:left;
    padding-left:0.1rem;
}
.hotr{
    float:right;
    line-height: 0.2rem;
    padding-right:0.1rem;
    font-size: 0.16rem;
    color:#3f3f3f;
}
.hotlin_l{
    background: url('img/lin.png') left center repeat-x;
    width: 0.5rem;
    float:left;
    height: 0.2rem;
    line-height: 0.2rem;
}
.hotlin_r{
    background: url('img/lin.png') left center repeat-x;
    width: 0.5rem;
    float:right;
    height: 0.2rem;
    line-height: 0.2rem;
}
.inter{
    display: block;
    clear:both;
    overflow:hidden;
}
.inter li{
    display: block;
    clear:both;
    overflow:hidden;
    border-bottom:1px solid #ccc;
    padding:0.1rem 0.08rem;
}
.inter .intimg{
    width: 50%;
    float: left;
}
.intfont{
    font-size: 0.16rem;
    float:right;
    width: 45%;
    text-align: left;
    padding-left:5%;
    color:#3f3f3f;
}
.lnob{
    color:#dc3b40;
    font-size: 0.2rem;
}
</style>