<template>
<div id="message">
   <h2 class="uitit_a"><i class="iconfont icon-back uic" @click="routerback"></i>站内通知</h2>
   <div class="messge">
       <h2 class="mtit">{{ mtit }}</h2>
       <div class="mcon">尊敬的 {{ username }} ，恭喜你注册成功您的登录账号为，请妥善保管好登录账号和密码，如有疑问请联系在线客服。
        </div>
    </div>
 </div> 
 </template>
<script>
export default {
  name:'message',
  data() {
      return {
          mtit:'',
          username:''
      }
  },
  mounted: function () {
    this.$nextTick(function () {
        this.mtit = this.$route.params.tit;
        this.username = localStorage.getItem('u');
    })
  },
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
.mtit{
    display: block;
    line-height: 0.36rem;
    text-align: center;
    font-size: 0.18rem;
    color:#bfbfbf;
}
.mcon{
    text-align: left;
    line-height: 0.26rem;
    padding:0.1rem 0.15rem 0;
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