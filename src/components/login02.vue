<template>
<div id="feedback">
<h2 class="uitit_a"><i class="iconfont icon-back uic" @click="routerback"></i>登入</h2>
<div class="conttext">
    <img :src="require('./../components/img/logban.jpg?1111')" alt="">
    <div class="ly_box">
        <ul>
            <li><i class="iconfont icon-user01 lyico"></i><input type="text" class="inputtext" name="msp1" id="msp1" value="" alt="" v-model="msp1" placeholder="请输入用户名"></li>
            <li><i class="iconfont icon-password lyico"></i><input type="password" class="inputtext" name="msp2" id="msp2" value="" alt="" v-model="msp2" placeholder="请输入密码"></li>
        </ul>
        <!-- <p class="footbk_p"><strong class="footfk">用户名：</strong></p>
        <p><input type="text" class="inputtext" name="msp1" id="msp1" value="" alt="" v-model="msp1"></p>
        <p class="footbk_p"><strong class="footfk">登入密码：</strong></p>
        <p><input type="password" class="inputtext" name="msp2" id="msp2" value="" alt="" v-model="msp2"></p> -->
    </div>
    </div>
  <button class="fbut" @click='fetchDatas(msp1,msp2)'>确认登入</button>
  <button class="fbutreg" @click='goreg()'>注册</button>
 </div>
 </template>
<script>
import Vue from 'vue';
import 'vue2-toast/lib/toast.css';
import Toast from 'vue2-toast';
Vue.use(Toast);
export default {
  data(){
    return{
      Surplus:140,
      introduct:'',
      msp1:'',
      msp2:'',
    }
  },
  created(){
    this.$nextTick(() => {
        return this.$store.state.isuser;
    })
  },
  methods:{
    descArea(){
      var textVal = this.introduct.length;
      this.Surplus = 140 - textVal;
    },
    fetchDatas: async function (userName,pwd) {
      let params = {
        "userName":userName, 
        "pwd":pwd
      };
      let url = 'http://154.48.238.35:8085/UserService.svc/Login';
      let callback = response => {
        if(response.data.d != null){
          this.isloadhidS(response.data.d);
        }else{
          this.isloadhidF();
        }
      };
      await this.http.post(url,callback,params);
    },
    goreg(){
      this.$router.push({path:'/register'});
    },
    isloadhidF() {
      this.$store.commit('isuserhid');
      this.$store.commit('isloadhid');
      this.$toast.center('登入失败请重新登入');
      this.$store.commit('isusnamh',{name:''});
      localStorage.setItem('u','登入/注册')
    },
    isloadhidS(res) {
      this.$store.commit('isusershow'); //用户状态
      this.$store.commit('isloadhid');
      this.$store.commit('isusnamh',{name:this.msp1});
      localStorage.setItem('u',this.msp1);
      localStorage.setItem('ures',JSON.stringify(res))
      this.$router.push({path:'/member'});
      this.$toast.center('登入成功');
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
    padding:0.15rem;
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
// .ly_box strong {
//     font-weight: normal;
//     font-size: 0.14rem;
// }
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
    color: #fd620d;
    background-color: #fff;
    border-color: #fff;
}
.uic{
    position: absolute;
    left:0.1rem;
    line-height: 0.4rem;
    font-size:0.24rem;
    font-weight: normal;
}
</style>
