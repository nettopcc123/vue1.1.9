<template>
<div id="feedback">
  <h2 class="uitit_a"><i class="iconfont icon-back uic" @click="routerback"></i>意见反馈</h2>
  <textarea v-bind:maxlength="140" @input="descArea" v-model="introduct" name="abstract" id="abstract" placeholder="您的意见，会让我们更优秀。" class="ftext"></textarea>
  <span class="num-desc">您还可以输入 {{Surplus}} 个字符 / 共 140 个字符</span>
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
  width: 90%;
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
  margin: 0.1rem auto;
}
.fbut{
  width: 94%
}
.num-desc{
  display: block;
  text-align: left;
  width: 94%;
  margin:0 auto 0.2rem;
  color:#8f8f8f
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
