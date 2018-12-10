<template>
    <div>
        <div class="mar">
            <vue-banner01a></vue-banner01a>
            <vue-marquee></vue-marquee>
            <h2 class="tit"><i class="iconfont icon-race"></i>足球比赛</h2>
        </div>
        <vue-banner01c></vue-banner01c>
        <h2 class="tit"><i class="iconfont icon-news02"></i>热门新闻</h2>
        <vue-newlists8></vue-newlists8>
    </div>
</template>
<script>
    import marquee from './../components/marquee01';
    import newlists8 from './../components/newlists9';
    import banner01a from './../components/banner01_a';
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
         'vue-banner01c':banner01c
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
    background:#dfe5bc;
    color:#56771e;
    text-indent: 0.1rem;
}
.tit i{
    float:left;
    font-size: 0.2rem;
}
</style>