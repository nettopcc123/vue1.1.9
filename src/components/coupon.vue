<template>
<div id="favorites">
     <h2 class="uitit">我的优惠券</h2>
     <ul class="comlis">
         <li><router-link :to="{ name: 'coupon1'}">未使用(1)</router-link></li>
         <li><router-link :to="{ name: 'coupon2'}">使用记录(0)</router-link></li>
         <li><router-link :to="{ name: 'coupon3'}">已过期(0)</router-link></li>
     </ul>
    <router-view></router-view>
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
.uitit{
    line-height: 0.3rem;
    height: 0.4rem;
    background:#ccf;
    text-align: center;
    line-height: 0.4rem;
    font-size: 0.16rem;
}
.comlis{
    display: block;
    overflow: hidden;
    background:#fff;
}
.comlis li{
    width: 33%;
    float:left;
    text-align: center;
    line-height: 0.36rem;
    font-size: 0.14rem;
}
.comlis li a{
    display: block;
    color:#7a7979;
}
.router-link-active{
    background: url('img/lin.png') left bottom repeat-x;
    color:#333752;
}
.comlis li:nth-child(2){
    width: 34%;
}
.favors{
    padding:0.15rem 0.1rem;
}
</style>