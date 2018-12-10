<template>
<div id="container">
 <swiper :options="swiperOption" ref="mySwiper">
  <swiper-slide class="swiper-slide games">
   <router-link :to="{ name: 'newsMore1', params: { articid: 310}}">
      <p>你见过哪些奇葩快递员?网友分享奇葩快递签收名，笑死！</p>
      <img :src="require('./../components/img/tyban1.jpg')" alt="">
   </router-link>
  </swiper-slide>
  <swiper-slide class="swiper-slide games">
  <router-link :to="{ name: 'newsMore1', params: { articid: 309}}">
    <p>贾静雯的古装扮相, 告诉你什么叫做惊为天人! 最后一个颜值巅峰!</p>
    <img :src="require('./../components/img/tyban2.jpg')" alt="">
  </router-link>
  </swiper-slide>
  <swiper-slide class="swiper-slide games">
  <router-link :to="{ name: 'newsMore1', params: { articid: 308}}">
    <p>情歌还是老的好！每个音符都让人热泪盈眶，10人听, 9人醉~</p>
    <img :src="require('./../components/img/tyban3.jpg')" alt="">
   </router-link>
  </swiper-slide>
  <div class="swiper-pagination" slot="pagination"></div>
  <!-- <div class="swiper-button-prev" slot="button-prev"></div>
  <div class="swiper-button-next" slot="button-next"></div> -->
 </swiper>   
 </div> 
 </template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
 export default {
  name: 'carrousel',
  data () {
   return {
    swiperOption: {
      autoplay : {
      disableOnInteraction: false, //用户操作后是否禁止自动循环
      delay: 3000 //自自动循环时间
     }, //可选选项，自动滑动
     speed: 2000, //切换速度，即slider自动滑动开始到结束的时间（单位ms）
     loop:true, //循环切换
     grabCursor: true, //设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
     // setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
     autoHeight: true,   //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化。   
     scrollbar: '.swiper-scrollbar',
     mousewheelControl: true, //设置为true时，能使用鼠标滚轮控制slide滑动
     observeParents: true, //当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper
 
     pagination: {
      el: '.swiper-pagination',
      // type : 'progressbar', //分页器形状
      clickable :true, //点击分页器的指示点分页器会控制Swiper切换
     },
    //  navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    //  },       
   },
   computed: {
    swiper() {
     return this.$refs.mySwiper.swiper
    }
   }
  }
 }
}
</script>
<style scoped>
.uitit{
    line-height: 0.36rem;
    background:#dfe5bc;
    color:#56771e;
    text-indent: 0.1rem;
}
.uitit i{
    float:left;
    font-size: 0.2rem;
}
img {
 width: 100%;
 height: auto;
}
.games p{
  display: block;
  line-height: 0.26rem;
  padding: 0 0.1rem;
  font-size: 0.18rem;
  height: 0.6rem;

}
.games a{
  color:#6b6b6b;
}
</style>