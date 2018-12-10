<template>
<div id="feedback">
  <h2 class="uitit_a"><i class="iconfont icon-back uic" @click="routerback"></i>意见反馈</h2>
<div class="conttext">
        <div class="bt">
        		<strong>请您留言</strong>
        </div>
        <p>
            感谢您对福彩彩票的支持！<br>
            您反馈的问题有结果后我们会第一时间给您回复。
        </p>
          <input type="hidden" name="boardid" value="109">
        <input type="hidden" name="uid" value="">
        <input type="hidden" name="referer" value="http%3A%2F%2Flives.sina.cn%2Flive%2Flive%3Fvt%3D4%26match_id%3Dl_314">
        <div class="ly_box">
        <p class="footbk_p"><strong class="footfk">反馈内容：</strong></p>
				<p>
            <textarea v-bind:maxlength="140" @input="descArea" v-model="introduct" name="abstract" id="abstract" placeholder="您的意见，会让我们更优秀。" class="ftext"></textarea>
             <span class="num-desc">您还可以输入 {{Surplus}} 个字符 / 共 140 个字符</span>
        </p>
      <input type="hidden" name="needcheck[]" value="msg1 反馈内容：">
      <p class="footbk_p"><strong class="footfk">联系电话：</strong></p>
			<p><input type="text" class="inputtext" name="msg2" id="msg2" value="" alt=""></p>
            <input type="hidden" name="needcheck[]" value="msg2 联系电话：">
      <p class="footbk_p"><strong class="footfk">您的邮箱或者微博：</strong></p>
			<p><input type="text" class="inputtext" name="msg3" id="msg3" value="" alt=""></p>
            <input type="hidden" name="needcheck[]" value="msg3 您的邮箱或者微博：">
        </div>
      </div>
  <button class="fbut" @click="isloadshow()">提交</button>
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
      introduct:''
    }
  },
  methods:{
    descArea(){
      var textVal = this.introduct.length;
      this.Surplus = 140 - textVal;
    },
    isloadshow() {
      this.$store.commit('isloadshow');
      setTimeout(() => {
        this.isloadhid();
      },2000)
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
  width: 94%
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
    font-size: 16px;
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
    font-size: 16px;
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
.uic{
    position: absolute;
    left:0.1rem;
    line-height: 0.4rem;
    font-size:0.24rem;
    font-weight: normal;
}
</style>
