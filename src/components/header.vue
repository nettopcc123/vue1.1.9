<template>
<div class="header">
    <div class="fl"><span class="menufont">福彩彩票</span></div>
    <span class="menur" @click="ismenushow"><i class="iconfont icon-menu zsm mlin"></i></span>
    <div class="menuleft" style="position:restive" v-if="ismenu">
        <div class="uid">
            <img :src="require('./../components/img/uid02.png?1111')" alt="">
        </div>
        <ul class="menuul">
            <li><i class="iconfont icon-ml02 mlico"></i><router-link :to="{ name: 'disclaimer'}">免责声明</router-link></li>
            <li><i class="iconfont icon-ml01 mlico"></i><router-link :to="{ name: 'feedback'}"> 意见反馈</router-link></li>
            <li><i class="iconfont icon-psd mlico"></i><router-link :to="{ name: 'login'}"> 我要登入</router-link></li>
            <li><i class="iconfont icon-reg mlico"></i><router-link :to="{ name: 'register'}"> 我要注册</router-link></li>
        </ul>
    </div>
    <div class="bgh" @click="ismenuhid" style="position:restive" v-if="ismenu"></div>
</div>
</template>

<script>
export default {
  name: 'headd',
  data () {
    return {
      newList:[]
    }
  },
  computed:{
    ismenu(){
      return this.$store.state.ismenu;
    }
  },
  methods:{
          ismenushow() {
            this.$store.commit('ismenushow');
          },
          ismenuhid() {
            this.$store.commit('ismenuhid');
          }
  }
}
</script>
<style lang="scss" scoped>
@import "scss/base.scss";
.header{
   // background: #1D1D1F;
    //background: url('img/footbg.png');
    background: #c01e2f;
    display: block;
    line-height: 0.4rem;
    color:#fff;
    text-align: left;
    font-size: 0.14rem;
    font-weight: bold;
    height:6%;
    padding:0;
    position: relative;
}
.fl{
 width: 100%;
 text-align: left;
}
.zsm{
    font-size: 0.2rem;
    float:right;
    padding-left:0.05rem;
    font-size: 0.26rem;
    color:#fff;
}
.mlico{
    font-size: 0.2rem;
    float:left;
    padding-left:0.4rem;
}
.mlin{
    font-size: 0.2rem;
    float:left;
    margin-right:0.08rem;
    width:0.5rem;
    border-left:1px solid #861b26;
    text-align: center;
}
.menur{
    position:absolute;
    right:0px;
    top:0px;
}
.menuleft{
    position: fixed;
    top:0;
    left:0;
    height:100%;
    background:#fff;
    width: 60%;
    z-index: 100;
}
.menufont{
    padding-left:0.15rem;
}
.bgh{
    background:rgba(0,0,0,0.9);
    left:0;top:0;
    filter:"Alpha(opacity=90)";
    opacity:0.9;
    display:block;
    width:100%;
    position:fixed;
    top:0;
    z-index:10;
    width: 100%;
    height: 100%;
    z-index: 99;
}
.uid{
    text-align: center;
    margin:20px auto 10px;
}
.uid img{
    width: 50%;
}
.menuul{
    color:#000;
    margin-top: 15px;
}
.menuul li{
    color:#2b2b2b;
    padding:0 0.15rem;
    text-align: center;
    border-bottom:1px dotted #bdbdbd;
    font-size: 0.14rem;
}
.menuul li a{
    color:#2b2b2b;
}
</style>