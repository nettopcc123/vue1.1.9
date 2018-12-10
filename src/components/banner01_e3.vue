
<template>
  <div class="newlists" id="newlists">
        <h2 class="tit mt10" v-for="(value, key) in newList"  v-if=" key==0 "><i class="iconfont icon-qxc"></i><span>七星彩</span><div class="bt">第 {{value.expect}} 期开奖号码</div></h2>
        <ul class="nlist npad">
            <li v-for="(value, key) in newList"  v-if=" key==0 ">
                <div class="hm">
                    <ul class="red">
                        <li><span>{{ value.opencode | toarr(value.opencode)[0] }}</span></li>
                        <li><span>{{ value.opencode | toarr(value.opencode)[1] }}</span></li>
                        <li><span>{{ value.opencode | toarr(value.opencode)[2] }}</span></li>
                        <li><span>{{ value.opencode | toarr(value.opencode)[3] }}</span></li>
                        <li><span>{{ value.opencode | toarr(value.opencode)[4] }}</span></li>
                    </ul>
                    <ul class="blue">
                        <li><span>{{ value.opencode | toarr(value.opencode)[5] }}</span></li>
                        <li><span>{{ value.opencode | toarr(value.opencode)[6] }}</span></li>
                    </ul>
                </div>
            </li>
        </ul>
  </div>
</template>
<script>

import axios from 'axios';
import banner from './../components/banner';
import newlists from './../components/newlists';
import { setTimeout } from 'timers';
import $ from 'jquery';

import banner01 from './../components/banner01';
import newban1 from './../components/new_h01';

export default {
  name: 'user',
  data () {
    return {
      newList:[],
      REQUIRE: true,
      loading: false,
      num:0,
      tips:'努力加载中...',
      url1: '',
      noimg: require('../assets/noimg.jpg'),
    }
  },
  created: function(){
    if(this.num == 0){
      this.newVue(this.num);
    }
  },
  mounted: function () {
    this.$nextTick(() => {//在下次 DOM 更新循环结束之后执行延迟回调
         // document.getElementById('vrw').addEventListener('scroll',this.scrollBottom);
         // this.url1 = 'https://m.sporttery.cn/app/zf/fb/livelist.html';
    })
  },
  filters:{
    filter:function(value){
        if (!value) return '';
        if (value.length > 20) {
          return value.slice(0,20) + '...';
        }
        return value;
    },
    toarr:function(value,k){
        value = value.replace('+',',');
        var arr = new Array();
        // str="ddd,dsd,3,dd,g,k";
        //可以用字符或字符串分割
        arr = value.split(',');
        for(var i = 0 ; i < arr.length ; i++)
        {
         console.log(arr[i]);
        }
       return arr
    },
    restr:function(value){
      if (!value) return '';
      if (value.length > 2) {
          return value.replace(/天天彩/, "双色球走势图预判专家");
      }
      return value;
    },
    redata:function(str){
       var date =  new Date(str * 1000 );
       var y = 1900+date.getYear();
       var m = "0"+(date.getMonth()+1);
       var d = "0"+date.getDate();
       return y+"年"+m.substring(m.length-2,m.length)+"月"+d.substring(d.length-2,d.length) + '日';
    }
  },
  computed:{
    num01:function (){
      return this.$store.state.count;
    }
  },
  components: {
    'vue-banner':banner,
    'vue-newlists':newlists,
    'vue-banner01':banner01,
    'vue-newban1':newban1
  },
  methods:{
      isalertshow() {
        this.$store.commit('isalertshow');
      },
      isalerthid() {
        this.$store.commit('isalerthid');
      },
      isloadshow() {
        this.$store.commit('isloadshow');
          setTimeout(()=>{
            this.isloadhid();
           // this.$toast.center('清除成功');
          },2000)
      },
      isloadhid() {
        this.$store.commit('isloadhid');
      },
      newVue:function(num){
        axios.interceptors.request.use(config => {  
          this.isloadshow();      
             console.log('1')
            return config;
          }, function (error) {
            // 对请求错误做些什么
            console.log('2');

            
            return Promise.reject(error);
          });

        // 添加响应拦截器
        axios.interceptors.response.use(response => {
            // 对响应数据做点什么
            console.log('a3')
            this.isloadhid();  
           // this.$store.commit('isloadhid');
            return response;
          }, function (error) {
            console.log('4')
            // 对响应错误做点什么
            return Promise.reject(error);
          });
          var url=window.encodeURIComponent("f.apiplus.net/qxc-10.json");
            axios.get('http://154.48.238.35:8080/Home/rd?rdurl=http://' + url)  /// http://www.hd.me/data.php?callback=dosomething    static/news.json?num  static/news.json  http://misc.opencai.net/consts/lotts.json   /static/news.json
            .then(res => {
              var str = JSON.stringify(res);
              if(str.indexOf('请求频率过')>-1){
                 res.data = sessionStorage.getItem('qxc');
              }else{
                sessionStorage.setItem('qxc',res.data);
              }
              $.each(JSON.parse(res.data),(k,v) => {
                if(k== 'data'){
                    $.each(v,(kin,val) => {
                        this.newList.push(val);
                    })
                }
              })
              console.log(this.newList)
            //   res.data.dataforEach(v => {
            //     this.newList.push(v);
            //   });
              
              if( num >= 3){
                this.tips = '加载完成';
                return;
              }
            })
            .catch(error => {
                console.log(error);
                this.REQUIRE = false;
            });
        },
        scrollBottom:function(){
          if( (($('#vrw').scrollTop() + (window.screen.height)) >=  ($('#newlists').height()  - 10 )) && this.REQUIRE == true && this.num <= 4 ){
            console.log('aaa111111')
              this.REQUIRE = false;
              this.loading = true;
              this.tips = '正在加载中';
              this.num++;
              this.newVue(this.num);
              this.REQUIRE = true;
              this.loading = false;
          }else{
            console.log('aaa22222')
            this.loading = true;
          }
        },
        routerback: function () {
            this.$router.back(-1)
        }
  }
}
</script>

<style lang="scss" scoped>
@import "scss/base.scss";
.bt {
    font-size: 0.12rem;
    color: #9e9e9e;
    height: 0.3rem;
    line-height: 0.3rem;
    text-align: left;
    float:right;
    padding-right:0.1rem;
}
.uitit{
    display: block;
    line-height: 0.36rem!important;
    padding-left:0.15rem;
    font-size: 0.18rem;
    text-align: center;
    background:#fff!important;
    color:#5f5f5f;
    font-weight: normal;
}
.uitit i{
    float:left;
}
.nlist li{
    border-bottom:1px dotted #ccc;
    padding-bottom:5px;
    overflow: hidden;
    margin-bottom:5px;
}
.hm{ display: block; clear:both; text-align: left; overflow: hidden;}
.hm .red {
    float: left;
    margin-left: 0.10rem;
    padding-right: 0.05rem;
    border-right: 0.01rem solid #e6e6e6;
}
.hm .red li{
    float:left;
    border-bottom:none;
    margin-bottom:0;
}
.hm .red li span{
    width: 0.26rem;
    height: 0.26rem;
    line-height: 0.26rem;
    text-align: center;
    color:#fff;
    background:#e73030;
    float: left;
    border-radius: 0.13rem;
}
.hm .blue {
    float: left;
    margin-left: 0.1rem;
}
.hm .blue li{
    float:left;
    border-bottom:none;
    margin-bottom:0;
}
.hm .blue li span{
    width: 0.26rem;
    height: 0.26rem;
    line-height: 0.26rem;
    text-align: center;
    color:#fff;
    background:#1290e3;
    float: left;
    border-radius: 0.13rem;
}
.tit{
    line-height: 0.36rem;
    background:#ffffff;
    color:#272727;
    text-indent: 0.1rem;
    overflow: hidden;
    clear:both;
    display: block;
}
.tit i{
    float:left;
    font-size: 0.2rem;
}
.tit span{
    float:left;
    font-size: 0.16rem;
    font-weight: normal;
}
</style>

