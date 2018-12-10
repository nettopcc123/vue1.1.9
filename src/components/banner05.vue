<template>
  <div class="swiper-container">

    <div class="parallax-bg" data-swiper-parallax="-23%"></div>
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <router-link :to="{ name: 'newsMore1', params: { articid: 476}}">
        <div class="title01" data-swiper-parallax="-300"><img :src="require('./../components/img/001.jpg?1111')" alt=""></div>
        <div class="nbcon">
        <div class="subtitle" data-swiper-parallax="-200">袁心玥同门师妹成女排一大黑马，人美球技好，已获得郎平赏识</div>
        <div class="text" data-swiper-parallax="-100">
          <p>在女排联赛第一阶段的赛事结束不久，姑娘们迎来了10天的假期，大家却也在全面备战着接下的八强战。所以对于女排姑娘们而言....</p>
        </div>
        </div>
        </router-link>
      </div>
      <div class="swiper-slide">
        <router-link :to="{ name: 'newsMore1', params: { articid: 479}}">
        <div class="title" data-swiper-parallax="-300" data-swiper-parallax-opacity="0"><img :src="require('./../components/img/002.jpg?1111')" alt=""></div>
        <div class="nbcon">
        <div class="subtitle" data-swiper-parallax="-200">马刺推迟出发时间，让球队成员和家人多相处一会儿</div>
        <div class="text" data-swiper-parallax="-100">
          <p>格雷格-波波维奇对球队的行程做了调整，好让球员、教练组和球队工作人员能在感恩节和家人共度更多时间...</p>
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
.title01{
    z-index: -1;
}
.parallax-bg{
    background:url('./../components/img/banner_a01.jpg')
}
.nbcon div {
  color:#fff
}
</style>