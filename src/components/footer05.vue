<template>
    <div class="footer">
        <ul>
            <li>
                <router-link :to="{ name: 'Index'}" v-bind:class="{ active:isMore01 }">
                    <i class="iconfont icon-home"></i>
                    <p>首页</p>
                </router-link>
             </li>
            <li>
                <router-link :to="{ name: 'framekj'}" v-bind:class="{ active: isNews }">
                    <i class="iconfont icon-news01"></i>
                   <p>新闻</p>
                </router-link>
            </li>
            <li >
                <router-link :to="{ name: 'htmlViewSample'}">
                    <i class="iconfont icon-ball"></i>
                   <p>比赛</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'member'}"  v-bind:class="{ active: isActive }">
                    <i class="iconfont icon-user"></i>
                   <p>我的</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'App',
  data(){  
        return{  
            isActive: false,
            isNews: false,
            isMore01: true,
        }  
    },
  　watch: {
　　　'$route' (to, from) {
       var isBack = this.$router.isBack; // 监听路由变化时的状态为前进还是后退
　　　　　　if(isBack) {
　　　　　　　this.transitionName = 'slide-right';
　　　　　　} else {
　　　　　　 this.transitionName = 'slide-left';
　　　　　}
　　    this.$router.isBack = false;
　　},
    $route(to,from){
        if(to.path == '/feedback' || to.path == '/disclaimer' || to.path == '/message' || to.path == '/favorites' || to.path == '/fans' || to.path == '/follow'){ //用户中心
            this.isActive = true;
            this.isBanner = false;
        }else{
            this.isActive = false;
            this.isBanner = false;
        }
        if(to.path == '/newsMore1'){ //用户中心
            this.isMore01 = true;
        }else{
            this.isMore01 = false;
        }
        if(to.path == '/newsMore' || to.path == '/newlists1' || to.path == '/newlists2' || to.path == '/newlists3' || to.path == ' framekj'){ //新闻中心
            this.isNews = true;
            this.isBanner = false;
        }else{
            this.isNews = false;
            this.isBanner = true;
        }
        if(to.path != from.path){ //滚动条置顶
            document.getElementById('vrw').scrollTop = 0;
        }
        
    },
　 }
}
</script>
<style lang="scss" scoped>
@import "scss/base.scss";
.footer{
    position: fixed;
    bottom:-1px;
    left:0px;
    display: block;
    width: 100%;
    border-top:1px solid #dddddd
}
.footer ul{
    width: 100%;
}
.footer ul li{
    float:left;
    width:25%;
}
// .footer ul li:nth-child(2){
//     float:left;
//     width:34%;
// }
.footer ul li a{
    text-align: center;
    background: url('img/footbg01_2.png') left top repeat-x #f03b6a;
    color:#fff;
    height: 0.4rem;
    display: inherit;
    padding-top: 0.01rem;
    font-size: 0.2rem;
    border-bottom: 1px solid #f03b6a;
    width: 100%;
}
.footer ul li i{
    width: 50%;
    line-height: 0.3rem;
    font-size: 0.2rem;
    padding-top:0.06rem;
    float:left;
}
.footer ul li p{
    width: 50%;
    line-height: 0.4rem;
    float:left;
    text-align: left;
}
.footer ul li .router-link-exact-active{
    border-bottom:1px solid #961925;
    color:#ffffff;
    background: url('img/footbg02_2_h.png') left top repeat-x #961925;
}

.footer .active{
    border-bottom:1px solid #961925;
    color:#ffffff;
    background: url('img/footbg02_2_h.png') left top repeat-x #961925;  
}

</style>