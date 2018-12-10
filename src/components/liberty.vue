<template>
<div id="favorites">
    <div class="uswv"> 
        <div class="qdt">
           {{ tit }}
        </div>
        <div class="growv">
           <p class="usimg"><img :src="require('./../components/img/user.png?1111')" alt="" class="userimg"></p>
           <p class="usfo">成长值 {{ lev }}</p>
        </div>
        <div class="liw3">
            <ul class="lvlis" id="lvlis">
                <li @click="movelev(1)">
                    <p><img :src="require('./../components/img/livimg01.png?1111')" alt="" class="livimg"></p>
                    <p>成长值：0</p>
                </li>
                <li @click="movelev(0)">
                    <p><img :src="require('./../components/img/livimg02.png?1111')" alt="" class="livimg"></p>
                    <p>成长值：3500</p>
                </li>
                <li @click="movelev(-1)">
                    <p><img :src="require('./../components/img/livimg03.png?1111')" alt="" class="livimg"></p>
                    <p>成长值：10000</p>
                </li>
                <li @click="movelev(-2)">
                    <p><img :src="require('./../components/img/livimg04.png?1111')" alt="" class="livimg"></p>
                    <p>成长值：20000</p>
                </li>
                <li @click="movelev(-3)">
                    <p><img :src="require('./../components/img/livimg05.png?1111')" alt="" class="livimg"></p>
                    <p>成长值：50000</p>
                </li>
            </ul>
            <div class="arrow-top arw"></div>
        </div>
        <div class="pup">
            <div class="full" id="full"></div>
        </div>
    </div>
    <div class="uswb"> 
    <h4 class="ltit">会员特权</h4>
    <ul class="vqlis">
        <li v-for="(value, key) in lis">
            <i class="iconfont icon-birthday"></i>
            <p>{{ value['name'] }}</p>
        </li>
    </ul>
        </div>
 </div> 
 </template>
<script>
import axios from 'axios'
export default {
  name:'favorites',
  data(){
    return {
      lev:110,
      tit:'',
      lis:[
          {
            'name': '超值兑换',
            'icon': 'icon'
          }
      ]
    }
  },
  mounted:function(){
    this.$nextTick(function(){
        this.getname();
        this.tit = this.$route.params.tit;
    })
  },
  methods:{
    getname(){
        this.username = localStorage.getItem('u');
    },
    movelev(i){
        switch(i){
            case 1:
                document.getElementById("full").style.cssText = "width:50%;transition: width 0.8s;";
                document.getElementById("full").style.display="block";
                this.lis = [
                    {
                        'name': '超值兑换',
                        'icon': 'icon'
                    }
                ]
            break;    
            case 0:
                document.getElementById("full").style.cssText = "width:15%;transition: width 0.8s;";
                document.getElementById("full").style.display="block";
                this.lis = [
                    {
                        'name': '超值兑换',
                        'icon': 'icon'
                    },{
                        'name': '生日惊喜',
                        'icon': 'icon'
                    }
                ];
            break;
            case -1:
                document.getElementById("full").style.cssText = "width:0%;transition: width 0.8s;";
                this.lis = [
                    {
                        'name': '超值兑换',
                        'icon': 'icon'
                    },{
                        'name': '生日惊喜',
                        'icon': 'icon'
                    },{
                        'name': '等级礼包',
                        'icon': 'icon'
                    }
                ];
            case -2:
                document.getElementById("full").style.cssText = "width:0%;transition: width 0.8s;";
                this.lis = [
                    {
                        'name': '超值兑换',
                        'icon': 'icon'
                    },{
                        'name': '生日惊喜',
                        'icon': 'icon'
                    },{
                        'name': '等级礼包',
                        'icon': 'icon'
                    },{
                        'name': '会员专享',
                        'icon': 'icon'
                    }
                ];
            break;
            case -3:
                document.getElementById("full").style.cssText = "width:0%;transition: width 0.8s;";
                this.lis = [
                    {
                        'name': '超值兑换',
                        'icon': 'icon'
                    },{
                        'name': '生日惊喜',
                        'icon': 'icon'
                    },{
                        'name': '等级礼包',
                        'icon': 'icon'
                    },{
                        'name': '会员专享',
                        'icon': 'icon'
                    },{
                        'name': '生日豪礼',
                        'icon': 'icon'
                    }
                ];
            break;
        }
        document.getElementById("lvlis").style.cssText = "transform:translateX(" +  (1.2 * i)  + "rem);transition: transform 0.8s;";
        
    }
  }
}
</script>
<style lang="scss" scoped>
@import "scss/base.scss";
.arw{
    width: 0.1rem;
    height: 0.1rem;
    position:absolute;
    left: 50%;
    bottom:0;
    z-index: 0;
    margin-left:-0.05rem;
}
.uswv{
    background: #605177;
    padding-bottom:0.01rem;
    position: relative;
}
.uswb{
    background: #fff;
    overflow: hidden;
    display: block;
}
.qdt{
    display: block;
    clear:both;
    overflow: hidden;
    text-align: center;
    color: #ede2fd;
    font-size: 0.2rem;
    padding-top:0.15rem;
}
.liw3{
    position: relative;
    overflow: hidden;
    width: 3.6rem;
    margin: 0 auto;
}
.pup{
    height: 0.05rem;
    width: 100%;
    background:#fff;
    position:absolute;
    bottom:0.65rem;
    z-index: 0;
}
.full{
    height: 0.05rem;
    width: 50%;
    background:#f00;
}
.growv{
    display: block;
    clear:both;
    overflow: hidden;
    text-align: center;
    color: #3c3c3c;
    font-size: 0.2rem;
}
.usimg{
    display: block;
    clear:both;
    overflow:hidden;
    margin-top:0.15rem;
    margin-bottom:0.05rem;
}
.usfo{
    display: block;
    clear:both;
    overflow:hidden; 
    font-size: 0.16rem;
    text-align: center;
    color:#eae4f4;
}
.lvlis{
    display: block;
    white-space:nowrap;
    margin:0.2rem 0;
    transform:translateX(33.33%);
    z-index: 1;
    position: relative;
}
.lvlis li{
    list-style: none;
    display: inline-block;
    width: 33.33%;
    text-align: center;
}
.lvlis li p{
    color:#fff;
}
.ltit{
    font-size: 0.16rem;
    display: block;
    padding:0.2rem 0.2rem;
    font-weight: normal;
}
.vqlis{
    display: block
}
.vqlis li{
    width: 33%;
    font-weight: normal;
    float:left;
    text-align: center;
    margin-bottom:0.2rem;
}
.vqlis li i{
    font-size:0.4rem;
    margin-bottom:0.05rem;
    display: block;
    color:#999933;
}
.arrow-top {
    width: 0;
    height: 0;
    border-bottom: 0.1rem solid #fff;
    border-left: 0.1rem solid transparent;
    border-right: 0.1rem solid transparent;
}
</style>