

<template>
  <div class="hello">
    <div class="iftop01">
       <iframe ref="iframe" id="dIframe02" :src="bdTokenUrl" frameborder="0" scrolling="no" width="100%"  height="1500px"></iframe>
    </div>
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
      bdTokenUrl: 'http://m.enjoyz.com/list-6-0.html',
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
    // this.setIframeHeight(document.getElementById('dIframe02'));
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
    setIframeHeight(iframe) {
      if (iframe) {
         var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
         if (iframeWin.document.body) {
            iframe.height = iframeWin.document.documentElement.scrollHeight || iframeWin.document.body.scrollHeight;
            console.log(iframe.height);
         }
      }
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
    margin-top:-50px;
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
.am-list-item-hd a{
   color: #f00!important;
}
</style>