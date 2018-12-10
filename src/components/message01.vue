<template>
<div id="message">
   <h2 class="uitit_a"><i class="iconfont icon-back uic" @click="routerback"></i>站内通知</h2>
   <div class="messge">
       <ul>
           <li><router-link :to="{ name: 'messageshow', params: { tit: '新用户通知'}}">新用户通知</router-link></li>
       </ul>
    </div>
 </div> 
 </template>
<script>
export default {
  name:'message',
  methods:{
    routerback: function () {
      this.$router.back(-1)
    }
  }
}
</script>
<style lang="scss" scoped>
@import "scss/base.scss";
.messge{
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
.messge ul{
    display: block;
    text-align: left;
    padding:0.2rem 0.15rem;
    background: #fff;
}
.messge ul li{
    text-align: left;
    border-bottom:1px dotted #e1e1e1;
    line-height: 0.26rem;
    list-style-type:disc;
    margin-left:0.2rem;
}
.messge ul li a{
    color:#4a4a4a;
}
.uitit_a{
    display: block;
    line-height: 0.36rem!important;
    padding-left:0.15rem;
    font-size: 0.18rem;
    text-align: center;
    background:#fff !important;
    border-bottom: 1px solid #e8e8ec;
    color:#858c5c;
    font-weight: normal;
}
.uic{
    position: absolute;
    left:0.1rem;
    line-height: 0.4rem;
    font-size:0.24rem;
    font-weight: normal;
}
</style>