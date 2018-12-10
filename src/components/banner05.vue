<template>
  <div class="swiper-container">

    <div class="parallax-bg" data-swiper-parallax="-23%"></div>
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <router-link :to="{ name: 'newsMore1', params: { articid: 476}}">
        <div class="title" data-swiper-parallax="-300"><img :src="require('./../components/img/001.jpg?1111')" alt=""></div>
        <div class="nbcon">
        <div class="subtitle" data-swiper-parallax="-200">杜兰特重申与格林冲突，点赞示意格林离开，湖人有个大胆的想法</div>
        <div class="text" data-swiper-parallax="-100">
          <p>杜兰特与格林的冲突已经闹了不少的时间， 这件事情不光影响到了2人的关系，同时也影响到了球队的利益，但是为了他们共同的目标....</p>
        </div>
        </div>
        </router-link>
      </div>
      <div class="swiper-slide">
        <router-link :to="{ name: 'newsMore1', params: { articid: 479}}">
        <div class="title" data-swiper-parallax="-300" data-swiper-parallax-opacity="0"><img :src="require('./../components/img/002.jpg?1111')" alt=""></div>
        <div class="nbcon">
        <div class="subtitle" data-swiper-parallax="-200">三连败，凯尔特人跌到东部第八寻求交易，火箭湖人牵涉其中</div>
        <div class="text" data-swiper-parallax="-100">
          <p>本赛季常规赛已经打完了五分之一，每年常规赛到这个时候，总是交易频发的时期，各个球队通过近20场比赛和调整，基本上都已经...</p>
        </div>
        </div>
        </router-link>
      </div>
      <!-- <div class="swiper-slide">
        <router-link :to="{ name: 'newsMore1', params: { articid: '185584_doc-ihifuvpf7373200' , url:''}}">
        <div class="title" data-swiper-parallax="-300"><img :src="require('./../components/img/003.jpg?1111')" alt="http://sports.sina.com.cn/g/pl/2018-08-27/doc-ihifuvph3104669.shtml"></div>
        <div class="nbcon">
        <div class="subtitle" data-swiper-parallax="-200">英超-拉卡泽特造乌龙 黑贝进球阿森纳3-1逆转胜</div>
        <div class="text" data-swiper-parallax="-100">
          <p>自2016年1月以来，阿森纳在主场对战伦敦对手6胜3平保持不败。埃梅里仅用拉姆塞替换受伤的厄齐尔首发...</p>
        </div>
        </div>
        </router-link>
      </div> -->
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination swiper-pagination-white"></div>
    <!-- Add Navigation -->
    <div class="swiper-button-prev swiper-button-white"></div>
    <div class="swiper-button-next swiper-button-white"></div>
  </div>



</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
export default {
   mounted:function(){
    this.$nextTick(function(){
    var mySwiper = new Swiper('.swiper-container', {
      speed: 600,
      parallax: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    })
  }
}
</script>
<style lang="scss">
@import "scss/base.scss";
.swiper-container {
    width: 100%;
    height: 200px;
}
.swiper-slide{
    width:33%
}
.nbcon{
    position: absolute;
    z-index: 0;
    padding: 0.08rem 0.5rem;
    bottom:0rem;
    background:rgba(0, 0, 0, 0.5)
}
.title{
    position: absolute;
    z-index: -1;
}
.parallax-bg{
    background:url('./../components/img/banner_a01.jpg')
}
.nbcon div {
  color:#fff
}
</style>