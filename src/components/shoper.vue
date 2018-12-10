<template>
<div id="favorites">
    <h2 class="uitit">商城</h2>
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
     <p class="more">没有更多数据</p>
 </div> 
 </template>
<script>
import axios from 'axios'
export default {
  name:'favorites',
  data(){
    return {
      weather:[]
    }
  },
  mounted:function(){
    this.$nextTick(function(){
     
    })
  },
  methods:{
  }
}
</script>
<style lang="scss" scoped>
@import "scss/base.scss";
#favorites{
    background: #fff;
    text-align: center;
    padding-bottom:0.15rem;
}
.favors{
 display: block;
 text-align: center;
 font-size: 0.14rem;
 color: #4a4a4a;
 margin-top:0.2rem
}
.uitit{
    line-height: 0.3rem;
    height: 0.4rem;
    background:#ccf;
    text-align: center;
    line-height: 0.4rem;
    font-size: 0.16rem;
}
.inter{
    display: block;
    clear:both;
    overflow:hidden;
    padding:0 0.05rem;
}
.inter li{
    display:block;
    overflow:hidden;
    padding:0.15rem 0rem 0.2rem;
    width: 48%;
    float: left; 
    text-align: center; 
}
.inter li a{
    color:#6b6b6b;
}
.inter li:nth-child(2){
    width: 48%;
    float: right;    
}
.inter .intimg{
    width: 100%;
}
.intfont{
    font-size: 0.14rem;
    width: 100%;
    color:#3f3f3f;
    margin-top: 0.15rem;
}
.more{
    color:#969696;
}
</style>