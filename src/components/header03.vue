<template>
<div class="header">
    <div class="heaw">
        <div class="fl"><router-link :to="{ name: 'member'}"><i class="iconfont icon-pros01 zsm mlin"></i></router-link></div>
        <div class="fm">福彩彩票</div>
        <span class="menur" @click="ismenushow"><i class="iconfont icon-bell01 zsm mlin"></i></span>
    </div>
    <div class="menuleft" style="position:restive" v-show="ismenu" v-bind:class="show?'active':''">
        <div class="uid">
            <img :src="require('./../components/img/tx01.jpg?1111')" alt="">
            <p class="usnam">{{ username }}</p>
        </div>
        <ul class="menuul">
            <li><router-link :to="{ name: 'disclaimer'}"><i class="iconfont icon-ml02 mlico"></i><span class="mfont ">免责声明</span></router-link></li>
            <li><router-link :to="{ name: 'feedback'}"><i class="iconfont icon-ml01 mlico"></i><span class="mfont">意见反馈</span></router-link></li>
            <li><router-link :to="{ name: 'login'}"><i class="iconfont icon-psd mlico"></i><span class="mfont">我要登入</span></router-link></li>
            <li><router-link :to="{ name: 'register'}"><i class="iconfont icon-reg mlico"></i><span class="mfont">我要注册</span></router-link></li>
        </ul>
    </div>
    <div class="bgh" @click="ismenuhid" style="position:restive" v-if="ismenu"></div>
</div>
</template>

<script>
export default {
  name: 'headd',
  data () {
    return {
      newList:[],
      username:'登入/注册',
      show:false
    }
  },
  computed:{
    ismenu(){
      return this.$store.state.ismenu;
    }
  },
  methods:{
          ismenushow() {
            if(this.$store.state.ismenu == true){
                console.log('ab1');
                this.ispros = true;
                this.isclose = false;
                this.$store.commit('ismenuhid');
                this.show = false
            }else{
                this.$store.commit('ismenushow');
                this.show = true;
                console.log('ab2')
                if(this.$store.state.isuser == true){
                    console.log('ab3')
                    this.username= localStorage.getItem('u'); 
                }else{
                    console.log('ab4')
                    this.username= localStorage.getItem('u');
                }
            }
          },
          ismenuhid() {
            this.$store.commit('ismenuhid');
            console.log('b1')
          },
          anime () {
            this.class = 'slide-edit-box-anime'
          }
  }
}
</script>
<style lang="scss" scoped>
@import "scss/base.scss";
.header{
   // background: #1D1D1F;
    //background: url('img/footbg.png');
    line-height: 0.4rem;
    color:#858c5c;
    text-align: left;
    font-size: 0.14rem;
    height:6%;
    padding:0;
    position: relative;
}
.usnam{
    color:#313131;
}
.heaw{
    background: #fff;
    display: block;
    position: fixed;
    z-index: 100;
    width:100%;
}
.fm{
 width: 100%;
 text-align: center;
}
.fl{
 width: 30%;
 position:absolute;
 left:0;
}
.zsm{
    font-size: 0.2rem;
    float:right;
    padding-left:0.05rem;
}
.mlico{
    font-size: 0.2rem;
    float:left;
    width: 40%;
    text-align: right;
}
.menuul li:nth-child(1) a{
    color:#e74c5b;
}
.menuul li:nth-child(2) a{
    color:#ef914f;
}
.menuul li:nth-child(3) a{
    color:#b93d8d;
}
.menuul li:nth-child(4) a{
    color:#781455;
}
.mfont{
    width: 50%;
    text-align: left;
    float:right;
}
.mlin{
    font-size: 0.2rem;
    float:left;
    margin-right:0.08rem;
    width:0.5rem;
    text-align: center;
    color:#9f9f9f
}
.menur{
    position:absolute;
    right:0px;
    top:0px;
}

.menufont{
    padding-left:0.15rem;
}
.bgh{
    background:rgba(0,0,0,0.4);
    left:0;top:0;
    filter:"Alpha(opacity=40)";
    opacity:0.4;
    display:block;
    width:100%;
    position:fixed;
    top:0;
    z-index:10;
    width: 100%;
    height: 100%;
    z-index: 99;
}
.uid{
    text-align: center;
    margin:20px auto 10px;
}
.uid img{
    width: 10%;
}
.menuul{
    color:#000;
    margin-top: 15px;
}
.menuul li{
    color:#2b2b2b;
    padding:0 0.15rem;
    text-align: center;
    border-bottom:1px dotted #bdbdbd;
    font-size: 0.14rem;
    position: relative;
    overflow: hidden;
}
.menuul li a{
    color:#2b2b2b;
    width: 100%;
    display: block;
    text-align: center;
}
.menuleft{
    position: fixed;
    top:6%;
    left:0;
    height:380px;
    background:#fff;
    width: 100%;
    z-index: 100;
}
.active{
    display: block;
    animation: showIndex 0.4s;
    -moz-animation: showIndex  0.4s; /* Firefox */
    -webkit-animation: showIndex  0.4s; /* Safari and Chrome */
    -o-animation: showIndex  0.4s; /* Opera */
}

@keyframes showIndex{
    0% {opacity: 0; transform: translate(0px, -30px) }
    100% { opacity: 1; transform: translate(0, 0) }
}
</style>