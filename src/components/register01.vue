<template>
<div id="feedback">
<h2 class="uitit_a">帐号注册</h2>
<div class="conttext">
    <div class="ly_box">
        <p class="footbk_p"><strong class="footfk">用户名：</strong></p>
        <p><input type="text" class="inputtext" name="msr1" id="msr1" value="" alt="" v-model="msr1"></p>
        <p class="footbk_p"><strong class="footfk">登入密码：</strong></p>
        <p><input type="password" class="inputtext" name="msr2" id="msr2" value="" alt="" v-model="msr2"></p>
        <p class="footbk_p"><strong class="footfk">邮箱地址：</strong></p>
        <p><input type="email" class="inputtext" name="msr3" id="msr3" value="" alt="" v-model="msr3"></p>
        <p class="footbk_p"><strong class="footfk">联系电话：</strong></p>
        <p><input type="number" class="inputtext" name="msr4" id="msr4" value="" alt="" v-model="msr4"></p>
        <p class="footbk_p"><strong class="footfk">您的邮箱或者微博：</strong></p>
        <p><input type="text" class="inputtext" name="msr5" id="msr5" value="" alt="" v-model="msr5"></p>
           <input type="hidden" name="needcheck[]" value="msr3 您的邮箱或者微博：">
    </div>
    </div>
  <button class="fbut" @click='fetchDatas(msr1,msr2)'>提交</button>
  <button class="fbutreg" @click='golog()'>已有帐号，去登入</button>
 </div>
 </template>
<script>
import Vue from 'vue';
import axios from 'axios'
import 'vue2-toast/lib/toast.css';
import Toast from 'vue2-toast';
Vue.use(Toast);
export default {
  data(){
    return{
      Surplus:140,
      introduct:'',
      msr1:'',
      msr2:'',
      msr3:'',
      msr4:'',
      msr5:''
    }
  },
  mounted:function(){
      this.$nextTick(() => {//在下次 DOM 更新循环结束之后执行延迟回调
        // this.fetchDatas(this.msr1,this.msr2);
      })
  },
  methods:{
    descArea(){
      let textVal = this.introduct.length;
      this.Surplus = 140 - textVal;
    },
    fetchDatas: async function (userName,pwd) {
      let params = {
        "userName":userName, 
        "pwd":pwd
      };
      let url = 'http://154.48.238.35:8085/UserService.svc/UserRegister';
      let callback = response => {
        if(response.data.d.ErrorMessage == '注册成功！'){
          this.$toast.center('恭喜您 注册成功!');
          this.$router.push({path:'/login'});
        }else{
          this.$toast.center(response.data.d.ErrorMessage);
        }
      };
      await this.http.post(url,callback,params);
    },
    golog(){
      this.$router.push({path:'/login'});
    },
    isloadhid() {
      this.$store.commit('isloadhid');
      this.$toast.center('提交成功');
    }
  }
}
</script>

<style lang="scss" scoped>
@import "scss/base.scss";
#feedback{
  text-align: center;
}
.ftext{
  display: inline-block;
  width: 95%;
  height: 1.32rem;
  line-height: 1.5;
  padding: 0.04rem 0.07rem;
  font-size: 0.12rem;
  border: 0.01rem solid #dcdee2;
  border-radius: 0.04rem;
  color: #515a6e;
  background-color: #fff;
  background-image: none;
  position: relative;
  cursor: text;
  transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out;
  margin: 0rem auto;
}
.fbut{
  width: 94%;
  margin-top:0.15rem;
}
.num-desc{
  display: block;
  text-align: left;
  width: 94%;
  margin:0 auto 0.1rem;
  color:#8f8f8f
}
.uitit_a{
    display: block;
    line-height: 0.36rem!important;
    padding-left:0.15rem;
    font-size: 0.18rem;
    text-align: center;
    background:#f1efef !important;
    border-bottom: 1px solid #fff;
    color:#404040;
    font-weight: normal;
}
.bt{
    display: block;
    clear: both;
    overflow: hidden;
}
.conttext{
    padding:0.1rem 0.15rem 10px;
}
.conttext p{
    display: block;
    clear: both;
    overflow: hidden;
    text-align: left;
}
.bt strong {
    float: left;
    color: #333;
    font-weight: normal;
    font-size: 16px;
    text-align: center;
    color:#4d4e50;
    border-bottom:1px solid #dadada;
    display: block;
    margin-bottom:5px;
    width: 100%;
    text-align: left;
    display: block;
    padding-bottom:0.05rem;
}
.ly_box strong {
    font-weight: normal;
    font-size: 0.14rem;
}
.inputtext {
    border: 1px solid #d0d0d0;
    background: #fff;
    height: 28px;
    line-height: 28px;
    color: #606060;
    font-size: 12px;
    font-family: '微软雅黑';
    width: 98%!important;
}
.footfk{
    float: left;
    color: #333;
    font-weight: normal;
    font-size: 0.12rem;
    text-align: center;
    color: #4d4e50;
    display: block;
    margin-bottom: 5px;
    text-align: left;
}
.footbk_p{
  display: block;
  clear:both;
  overflow:hidden;
  margin-top:0.1rem;
}
.fbutreg{
    width: 94%;
    margin-top:0.15rem;
    color: #fff;
    background-color: #b37e59;
    border-color: #9a6c4d;
}
</style>
