<template>
<div id="favorites">
    <div class="faexbg"><img :src="require('./../components/img/exbg.png')" alt="" class="vbanimg"></div>
    <div class="favors">
     <p class="ftit">{{ fname }}</p>
     <p class="ftcon">{{ fcon }}</p>

     <p class="ftit">兑换方式</p>

     <p class="ftit">
         <input type="checkbox" id="awesome"   />
        <label for="awesome">电信积分</label>
     </p>
     <p class="ftclic fact" v-for="v,index in flis">
       {{ v }}
     </p>

     <p class="fbtit">活动时间</p>
     <p class="ftcon">2018-11-11至2019-05-30</p>

     <p class="fbtit">权益介绍</p>
     <p class="fcon">{{ fname }}，大家快来换购</p>
    </div>
    <div class="exfot">
        <span class="exfl">实付: <span class="exfont">500 积分</span></span>
        <span class="exfr">兑换</span>
    </div>
 </div> 
 </template>
<script>
import axios from 'axios'
export default {
  name:'favorites',
  data(){
    return {
        flis:['1份'],
        fname:'',
        fcon:''
    }
  },
  mounted:function(){
    this.$nextTick(function(){
        this.fname = this.$route.params.name;
        this.fcon = this.$route.params.con;
    })
  },
  methods:{

  }
}
</script>
<style lang="scss" scoped>
@import "scss/base.scss";
#favorites{
  background: url('img/eb1.jpg') left top no-repeat;
  background-size:100% auto;
}
.faexbg{
    width: 90%;
    margin:0.8rem auto 0;
    padding:0px;
}
.favors{
    color:#5e5e5e;
    text-align: center;
    width: 90%;
    margin:-10px auto 0px;
    background:#fff;
    padding-bottom:0.2rem;
}
.ftit{
    font-size: 0.16rem;
    color: #676767;
    display: block;
    padding:0.15rem 0px 0.08rem;
}
.ftcon{
    color:#999999;
    border-bottom:1px dotted #ccc;
    padding-bottom:0.08rem;
}
input[type="checkbox"] + label::before {
    content: "\a0";  /*不换行空格*/
    display: inline-block;
    vertical-align: .2em;
    width: 1em;
    height: 1em;
    margin-right: .26em;
    border-radius: .2em;
    background-color: #dc3b40;
    text-indent: .15em;
    line-height: .65;  /*行高不加单位，子元素将继承数字乘以自身字体尺寸而非父元素行高*/
     margin-right:0.2rem;
}

input[type="checkbox"]:checked + label::before {
    content: "\2713";
    background-color: #dc3b40;
    color:#fff;
    margin-right:0.2rem;
}

input {
    position: absolute;
    clip: rect(0, 0, 0, 0);
}
.ftclic{
    width: 1rem;
    border:1px solid #b5b5b5;
    line-height: 0.36rem;
    height:0.36rem;
    margin:0.1rem auto;
    font-size:0.16rem;
    color:#5d5d5d;
    //background: url('img/esj.png') right bottom no-repeat;
}
.fact{
    border:1px solid #dc3b40;
    color:#dc3b40;
    background: url('img/esj.png') right bottom no-repeat;
}
.fbtit{
    border-left:2px solid #dc3b40;
    padding-left:0.1rem;
    text-align: left;
    font-size: 0.18rem;
    margin:0.2rem 0px 0.1rem;
}
.ftcon{
    text-align: left;
    color:#676767;
    padding-left:0.1rem;
}
.fcon{
    text-align: left;
    color:#676767;
    padding-left:0.1rem;
}
.exfot{
    position: fixed;
    bottom:0.4rem;
    line-height: 0.46rem;
    height: 0.46rem;
    background: #fff;
    width: 100%;
}
.exfont{
    color:#dc3b40;
    font-size: 0.16rem;
    padding-left:0.05rem;
}
.exfl{
    width: 70%;
    float:left;
    text-indent: 0.2rem;
    font-size: 0.16rem;
    color:#9a9a9a;
}
.exfr{
    width: 30%;
    float:right;
    background:#bfbfbf;
    text-align: center;
    color:#fff;
    font-size: 0.16rem;
}
</style>