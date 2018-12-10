<template>
<div id="score">
       <h2 class="uitit">NBA文字直播 <span>（右方为主队）</span></h2>
       <p class="utime">{{ nowtime }}</p>
        <ul class="llist">
            <li v-for="(value, key) in lottslist">
                <div class="limgl">
                    <img :src="require('./../components/img/'+ value.imgL)">
                </div>
                <div class="limgm">
                    <div class="nal">{{ value.nameL }}</div>
                    <div class="bifen">
                        <span class="bfL" :class="classRed ? 'classRed' : '' ">{{ value.numL }}</span>
                        <span class="bfR">{{ value.numR }}</span>
                    </div>
                    <div class="nar">{{ value.nameR }}</div>
                </div>
                 <div class="limgr">
                    <img :src="require('./../components/img/'+ value.imgR)">
                </div>
            </li>
        </ul>
 </div> 
 </template>

<script>
import axios from 'axios';
export default {
  name: 'score',
  data () {
    return {
      lottslist:[
          {'imgL':'001.jpg','nameL':'热火','numL':120,'nameR':'活塞','numR':115,'imgR':'002.jpg'},
          {'imgL':'001.jpg','nameL':'热火','numL':120,'nameR':'活塞','numR':115,'imgR':'002.jpg'},
          {'imgL':'001.jpg','nameL':'热火','numL':120,'nameR':'活塞','numR':115,'imgR':'002.jpg'}
      ],
      nowtime:'ddd',
      classRed:'',
     // test:{1:1,2:2,3:3,4}
     // ntime: getNowFormatDate
    }
  },
  mounted: function () {
    this.$nextTick(function () {
         this.nowtime = this.getNowFormatDate();
         this.scorlis();
    })
  },
  methods: {
      scorlis:function(){
          $.each(this.lottslist,function(k,v){
              console.log(k + '---' + v );
              v[k].push({'classRed':'classRed'})
               console.log(k + '---' + JSON.stringify(v));
          })
      }
  }
}
</script>
<style lang="scss" scoped>
@import "scss/base.scss";
.llist{
    display: block;
    overflow: hidden;
    margin-top:0.05rem;
}
.llist li{
    display: block;
    margin-bottom:0.08rem;
    clear: both;
    overflow: hidden;
    padding:0px 0.1rem;
    background:#f4f4f4;
    border-bottom:1px solid #ffffff;
}
.llist li .loct{
    display: block;
    clear:both;
    overflow: hidden;
}
.llist li .locb{
    display: block;
    clear:both;
    margin-top:0.08rem;
    height: 0.08rem;
}
.llist li .locb span{
    width: 0.2rem;
    height: 0.2rem;
    line-height: 0.2rem;
    background-color: #efefef;
    border: 0.01rem #a72525 solid;
    border-radius: 0.1rem;
    float:left;
    margin-right:0.05rem;
    text-align: center
}
.limgm{
  width: 50%;
  float: left;
  text-align: center;
  margin-top:0.2rem;
}
.nal{
    width: 20%;
    float:left;
    text-align: center;
    padding-left:5%
}
.nar{
    width: 20%;
    float:right;
    text-align: center;
    padding-right:5%
}
.limgl{
  width: 25%;
  float: left;
  text-align: center;
}
.limgr{
  width: 25%;
  float: right;
  text-align: center;
}
.bfL{
    float:left;
    padding-left:0.15rem;
}
.bfR{
    float: right;
    padding-right:0.15rem;
}
.bifen{
    background:#ffffff;
    width: 50%;
    float:left;
    line-height: 0.2rem;
}
.lcon{
  width: 70%;
  float: right
}
.cname{
    float:left;
    width: 20%;
    color:#f00;
}
.cperiod{
    float:left;
    width: 30%;
    color:#32312f;
}
.ctime{
    float:left;
    width: 30%;
    color:#373332;
}
.uitit{
    display: block;
    line-height: 0.36rem!important;
    padding-left:0.15rem;
    font-size: 0.14rem;
    text-align: left;
    background:#65acda!important;
    color: #fff;
}
.uitit span{
    float:right;
}
.utime{
    line-height: 0.28rem;
    background:#f0f0f0;
    padding:0px 0.15rem;
    font-weight: bold;
    color:#4f4f4f;
}
.classRed{
   color:#f00;
}
</style>
