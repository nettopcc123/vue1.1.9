<template>
    <div>
        <div class="iftop">
        <iframe ref="iframe" id="bdIframe" :src="bdTokenUrl" frameborder="0" scrolling="no" width="100%" height="750px" ></iframe>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                bdTokenUrl: 'https://m.sohu.com/p/759691/?wscrid=92625_2' //https://m.sporttery.cn/app/zf/fb/livelist.html  https://m.sporttery.cn/app/zf/fb/livelist.html
            }
        },
        // created() {
        //     this.getUrl();
        //     this.$nextTick(()=>{
        //         this.getCode();
        //     });
        // },
        mounted(){
            /**
             * iframe-宽高自适应显示   
             */
            const oIframe = document.getElementById('bdIframe');
            const deviceWidth = document.documentElement.clientWidth;
            const deviceHeight = document.documentElement.clientHeight;
            oIframe.style.width =  '100%'; //数字是页面布局宽度差值
            oIframe.style.height = '750px'; //数字是页面布局高度差
        }
    }
</script>

<style lang="scss" scoped>
@import "scss/base.scss";
.child-view{
    height:100%;
}
.iftop{
    height: 100%;
    margin-top:-40px;
    margin-bottom:60px;
}
</style>
