
<template>
  <div class="hello">
       <!-- <button @click="isloadshow">+</button>
        <button @click="isloadhid">-</button> -->
    <div class="iftop01">
       <iframe ref="iframe" id="bdIframe01" :src="bdTokenUrl01" frameborder="0" scrolling="no" width="100%" height="1200px" ></iframe>
    </div>
    <!-- <vue-banner></vue-banner>
    <h2 class="uitit02">要闻 </h2>
    <vue-newlists></vue-newlists>
    <h2 class="uitit01">体育赛事 <span></span></h2>
    <div class="gamhb">
      <iframe ref="iframe" id="bdIframe" :src="bdTokenUrl" frameborder="0" scrolling="no" width="100%" height="200px" ></iframe>
    </div> 
    <vue-newlists01></vue-newlists01> 
    -->
  </div>
</template>
<script>
import axios from 'axios';
import banner from './../components/banner';
import newlists from './../components/new_h03';
import newlists01 from './../components/new_h04';
import marquee from './../components/marquee';
//import score from './../components/score';


export default {
  name: 'Index',
  data () {
    return {
      newList:[],
      count:0,
      bdTokenUrl: 'http://154.48.238.35:8083/hongbao/hongbao05.html',
      bdTokenUrl01: 'http://154.48.238.35:8083/hongbao/hongbao05.html',
    }
  },
  computed: {
    num(){
      return this.$store.state.count;
    }
  },
  components: {
    'vue-banner':banner,
    'vue-newlists':newlists,
    'vue-newlists01':newlists01,
    'vue-marquee':marquee
  },
  mounted: function () {
    this.$nextTick(function () {
        // this.ntime = this.getNowFormatDate();
    })
  },
  methods: {
    isloadshow() {
      this.$store.commit('isload');
    },
    isloadhid() {
      this.$store.commit('isloadhid');
    },
    chengifCss() {
      var test = document.getElementById('bdIframe01').contentWindow.document.getElementsByTagName('header');
          test.style.background = "#333";
    },
    cheon() {
        document.getElementById('bdIframe01').contentDocument.onclick = function () {
            console.log('dfdfdeeee')
    };

    }
  }
}
</script>
<style lang="scss" scoped>
@import "scss/base.scss";
.vrw {
    width: 100%;
}
.gamhb{
   background:#fff;
   overflow: hidden;
   z-index:10;
   position: relative;
}
.iftop01{
    margin-top:-40px;
    height: 100%;
}
.newlists03{
   overflow: hidden;
   z-index:10;
   position: relative;
}
.newlists{
  // overflow: hidden;
   z-index:10;
   position: relative;
   margin-top:-90px;
}
.uitit01{
    display: block;
    line-height: 0.36rem!important;
    padding-left:0.15rem;
    font-size: 0.14rem;
    text-align: left;
    background:#65acda!important;
    color: #fff;
       z-index:11;
   position: relative;
}
.uitit01 span{
    float:right;
}
.uitit02{
    display: block;
    line-height: 0.36rem!important;
    padding-left:0.15rem;
    font-size: 0.14rem;
    text-align: left;
    border-bottom:1px solid #d1d1d1;
    background:#fff;
    color: #333333;
    z-index:11;
    position: relative;
}
.uitit02 span{
    float:right;
    padding-right:0.15rem;
}
</style>

<template>
    <div>
        <div class="iftop05">
        <iframe ref="iframe" id="bdIframe" :src="bdTokenUrl" frameborder="0" scrolling="no" width="100%" height="2500px" ></iframe>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                bdTokenUrl: 'http://tiyu.baidu.com/home' //https://m.sporttery.cn/app/zf/fb/livelist.html  https://m.sporttery.cn/app/zf/fb/livelist.html http://m.sporttery.cn/wap/dtc/fb_league_europe.html
            }
        },
        // created() {
        //     this.getUrl();
        //     this.$nextTick(()=>{
        //         this.getCode();
        //     });
        // },
        mounted(){
            /**
             * iframe-宽高自适应显示   
            */
            const oIframe = document.getElementById('bdIframe');
            const deviceWidth = document.documentElement.clientWidth;
            const deviceHeight = document.documentElement.clientHeight;
            oIframe.style.width =  '100%'; //数字是页面布局宽度差值
            oIframe.style.height = '2500px'; //数字是页面布局高度差
        }
    }
</script>

<style lang="scss" scoped>
@import "scss/base.scss";
.child-view{
    height:100%;
}
.iftop05{
    height: 100%;
    margin-top:-120px;
    margin-bottom:60px;
}
</style>
