<template>
<div id="feedback">
<h2 class="uitit_a"><i class="iconfont icon-back uic" @click="routerback"></i>帐号注册</h2>
<div class="conttext">
    <div class="ly_box">
        <ul>
            <li><i class="iconfont icon-user01 lyico"></i><input type="text" class="inputtext" name="msr1" id="msr1" value="" alt="" v-model="msr1" placeholder="请输入昵称"></li>
            <li><i class="iconfont icon-password lyico"></i><input type="password" class="inputtext" name="msr2" id="msr2" value="" alt="" v-model="msr2" placeholder="请输入密码"></li>
        </ul>
    </div>
    <div class="ly_box">
        <ul>
            <li><i class="iconfont icon-email lyico"></i><input type="email" class="inputtext" name="msr3" id="msr3" value="" alt="" v-model="msr3" placeholder="请输入邮箱地址"></li>
            <li><i class="iconfont icon-mobile lyico"></i><input type="number" class="inputtext" name="msr4" id="msr4" value="" alt="" v-model="msr4" placeholder="请输入联系电话"></li>
            <li><i class="iconfont icon-qq lyico"></i><input type="text" class="inputtext" name="msr5" id="msr5" value="" alt="" v-model="msr5" placeholder="请输入您的QQ"></li>
        </ul>
    </div>
    </div>
  <button class="fbut" @click='fetchDatas(msr1,msr2,msr3,msr4,msr5)'>提交</button>
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
    fetchDatas: async function (userName,pwd,email,mobile,remark) {
      let params = {
        "userName":userName, 
        "pwd":pwd,
        "email":email,
        "mobile":mobile,
        "remark":remark,
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
    },
    routerback: function () {
      this.$router.back(-1)
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
.bt{
    display: block;
    clear: both;
    overflow: hidden;
}
.conttext{
    padding:0px;
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


.ly_box{
    padding:0rem;
}
.ly_box ul{
    padding:0.25rem 0.1rem 0px;
    background: #fff;
}
.ly_box ul li{
    display: block;
    clear:both;
    overflow: hidden;
    margin-bottom:0.15rem;
    border-bottom: 1px solid #efeeee;
    margin-bottom:0.1rem;
    position: relative;
}
.lyico{
    position: absolute;
    left:0px;
    top:5px;
    font-size:0.2rem;
}



.inputtext {
    border:none;
    background: #fff;
    height: 28px;
    line-height: 28px;
    color: #606060;
    font-size: 12px;
    font-family: '微软雅黑';
    width: 98%!important;
    text-indent: 0.3rem;
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
    color: #707939;
    background-color: #fff;
    border-color: #fff;
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
