<template>
    <div class="footer">
        <ul>
            <li>
                <router-link :to="{ name: 'Index'}">
                    <i class="iconfont icon-home"></i>
                    <p>首页</p>
                </router-link>
             </li>
            <li >
                <router-link :to="{ name: 'htmlViewSample'}">
                    <i class="iconfont icon-news01"></i>
                   <p>资讯</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'framekj'}" v-bind:class="{ active: isNews }">
                    <i class="iconfont icon-ball"></i>
                   <p>联赛</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'feedback'}"  v-bind:class="{ active: isActive }">
                    <i class="iconfont icon-feedback"></i>
                   <p>反馈</p>
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

        if(to.path == '/newsMore' || to.path == '/newsMore1' || to.path == '/newlists1' || to.path == '/newlists2' || to.path == '/newlists3' || to.path == ' framekj'){ //新闻中心
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
    background: url('img/footbg01.png') left top repeat-x #f03b6a;
    color:#fff;
    height: 0.6rem;
    display: inherit;
    padding-top: 0.01rem;
    font-size: 0.2rem;
    border-bottom: 1px solid #f03b6a;
    width: 100%;
}
.footer ul li i{
    display: block;
    width: 100%;
    line-height: 0.3rem;
    font-size: 0.26rem;
    padding-top:0.06rem;
}
.footer ul li p{
    display: block;
    width: 100%;
    line-height: 0.2rem;
    
}
.footer ul li .router-link-exact-active{
    border-bottom:1px solid #d32653;
    color:#f03b6a;
    background: url('img/footbg02_h.png') left top repeat-x #fff;
}

</style>