<template>
<div id="feedback">
  <div class="header">
    <div class="heaw">
        <div class="fl"><i class="iconfont icon-black zsm mlin" @click="routerback"></i></div>
        <div class="fm">帐号登入</div>
        <!-- <span class="menur" @click="ismenushow"><i class="iconfont icon-bell01 zsm mlin"></i></span> -->
    </div>
    </div>
<div class="conttext">
    <div class="ly_box">
        <ul>
            <li><i class="iconfont icon-user01 lyico"></i><input type="text" class="inputtext" name="msp1" id="msp1" value="" alt="" v-model="msp1" placeholder="请输入用户名"></li>
            <li><i class="iconfont icon-password lyico"></i><input type="password" class="inputtext" name="msp2" id="msp2" value="" alt="" v-model="msp2" placeholder="请输入密码"></li>
        </ul>
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
    routerback: function () {
      this.$router.back(-1)
    },
    fetchDatas: async function (userName,pwd) {
      let params = {
        "userName":userName, 
        "pwd":pwd
      };
      let url = 'http://154.48.238.35:8085/UserService.svc/Login';
      let callback = response => {
        if(response.data.d != null){
          this.isloadhidS();
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
      localStorage.setItem('u','未登入')
    },
    isloadhidS() {
      this.$store.commit('isusershow'); //用户状态
      this.$store.commit('isloadhid');
      this.$store.commit('isusnamh',{name:this.msp1});
      localStorage.setItem('u',this.msp1)
      this.$router.push({path:'/member'});
      this.$toast.center('登入成功');
    }
  }
}
</script>

<style lang="scss" scoped>
@import "scss/base.scss";
.heaw{
  display: block;
  overflow: hidden;
  background:#c01e2f;
  position: relative;
}
.fl{
  float:left;
  position: absolute;
  left:0px;
  top:0rem;
}
.fm{
  text-align: center;
  display: block;
}
.zsm{
    font-size: 0.2rem;
    float:right;
    padding-left:0.05rem;
    font-size: 0.26rem;
    color:#fff;
}
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

.inputtext {
    border: 1px solid #d0d0d0;
    background: #fff;
    height: 28px;
    line-height: 28px;
    color: #606060;
    font-size: 12px;
    font-family: '微软雅黑';
    width: 98%!important;
    text-indent: 0.4rem;
}
.ly_box{
    padding:0rem;
    background: #fff;
}
.ly_box ul{
    padding:0.15rem 0 0 0;
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
    left:10px;
    top:5px;
    font-size:0.2rem;
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
</style>
