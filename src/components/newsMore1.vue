<template>
<div id="newsMore">
       <h2 class="uitit"><i class="iconfont icon-back uic" @click="routerback"></i>福彩彩票新闻</h2>
       <div class="ccon">
           <h6 v-html="content.Title" class="title"></h6>
           <p class="corem">消息来源：{{ content.Source }}</p>
           <hr>
           <div class="con">
             <div v-html="content.Content"></div>
           </div>
       </div>
 </div> 
 </template>
<script>
import axios from 'axios';
export default {
  name: 'newsMore',
  data () {
    return {
      newList:[],
      articid : this.$route.params.articid,
      content : []
    }
  },
  mounted: function () {
    this.$nextTick(function(){
        this.articid = this.$route.params.articid,
        console.log(this.$route.params.articid);
        this.newVue();
        console.log('bbb');
    })
  },
  methods: {
        newVue:function(){
            axios.get('http://154.48.238.35:8085/UserService.svc/NewsDetail?id=' + this.articid)
           .then(res => {
                console.log(res.data.d)
                this.content = res.data.d;
            })
            .catch(error => {
                console.log(error);
            });
        },
        routerback: function () {
            this.$router.back(-1)
        }
  }
}
</script>

<style scoped>
.vrw{
    height: 90%!important;
}
.ccon{
  width: 3.4rem;
  margin: 0 auto;
}
.uitit{
    display: block;
    line-height: 0.36rem!important;
    padding-left:0.15rem;
    font-size: 0.18rem;
    text-align: center;
    background:#fff!important;
    color:#5f5f5f;
    font-weight: normal;
}
.uitit i{
    float:left;
}
.title{
    font-size: .14rem;
    line-height: .2rem;
    vertical-align: baseline;
    color: #5f5f5f;
    letter-spacing: -0.5px;
    margin:10px 0 0rem;
    font-weight: normal
}
.corem{
    margin:5px 0px;
    color:#bdbdbd;
    text-align:center;
}
.con p, .con div, .con h1, .con h2, .con h3, .con h4 {
    font-size: .17rem;
    line-height: .3rem;
    font-weight: normal;
    vertical-align: baseline;
    color: #222;
    letter-spacing: -0.5px;
    margin: 0 0 .13rem;
}
</style>
