<template>
    <div>
        <vue-banner></vue-banner>
        <div class="hbut">
            <button>
                <router-link :to="{ name: 'news'}">
                <i class="iconfont icon-news"></i><span class="hbfont">新闻</span>
                </router-link>
            </button>
            <button>
                <router-link :to="{ name: 'letto'}">
                <i class="iconfont icon-info f22"></i><span class="hbfont">3D福彩</span>
                </router-link>
            </button>
        </div>
        <div class="mar">
            <vue-banner01d1></vue-banner01d1>
            <vue-banner01d3></vue-banner01d3>
            <vue-banner01d2></vue-banner01d2>
            <vue-banner01d></vue-banner01d>
            <!-- <vue-banner01a></vue-banner01a> -->
            <vue-marquee></vue-marquee>
        </div>
        <h2 class="tit mt10"><i class="iconfont icon-news02"></i>热门新闻</h2>
        <vue-newlists8></vue-newlists8>
    </div>
</template>
<script>
    import marquee from './../components/marquee01';
    import newlists8 from './../components/newlists9';
    import banner from './../components/banner05';
    import banner01a from './../components/banner01_c';
    import banner01d from './../components/banner01_e';
    import banner01d1 from './../components/banner01_e1';
    import banner01d2 from './../components/banner01_e2';
    import banner01d3 from './../components/banner01_e3';
    import banner01c from './../components/banner01_c';
    export default {
        data() {
            return {
                bdTokenUrl: 'https://m.sporttery.cn/app/zf/fb/livelist.html'
               // bdTokenUrl: 'http://tiyu.baidu.com/home' //https://m.sporttery.cn/app/zf/fb/livelist.html  https://m.sporttery.cn/app/zf/fb/livelist.html http://m.sporttery.cn/wap/dtc/fb_league_europe.html
            }
        },
        // created() {
        //     this.getUrl();
        //     this.$nextTick(()=>{
        //         this.getCode();
        //     });
        // },
        mounted(){

        },
        components: {
         'vue-marquee':marquee,
         'vue-newlists8':newlists8,
         'vue-banner01a':banner01a,
         'vue-banner01c':banner01c,
         'vue-banner01d':banner01d,
         'vue-banner01d1':banner01d1,
         'vue-banner01d2':banner01d2,
         'vue-banner01d3':banner01d3,
         'vue-banner':banner,
        },
    }
</script>

<style lang="scss" scoped>
@import "scss/base.scss";
.child-view{
    height:100%;
}
.mar{
    overflow: hidden;
    background: #fff;
    z-index: 100;
    position: relative;
}
.tit{
    line-height: 0.36rem;
    background:#ffffff;
    color:#272727;
    text-indent: 0.1rem;
}
.tit i{
    float:left;
    font-size: 0.2rem;
}
.mt10{
    margin-top:10px;
}
.hbut{
    display: block;
    clear:both;
    overflow: hidden;
    margin-top:10px;
    margin-bottom:10px;
}
.hbut button:nth-child(1){
    width: 45%;
    float:left;
    color:#fff;
    background:#fe7073;
    border:1px solid #d44d50;
    box-shadow: 1px 1px 8px #888888;
    margin-left:3%;
    font-size: 0.18rem;
}
.hbut button:nth-child(2){
    width: 45%;
    float:right;
    color:#fff;
    background:#44a4f1;
    border:1px solid #2a7cbe;
    box-shadow: 1px 1px 8px #888888;
    margin-right:3%;
}
.hbut i{
    font-size: 0.24rem;
    float:left;
    padding-left:0.4rem;
}
.hbut span{
    line-height: 0.32rem;
    float:left;
}
.hbfont{
    padding-left:15px;
    font-size: 0.16rem;
}
.hbut a{
    color:#fff;
}
</style>