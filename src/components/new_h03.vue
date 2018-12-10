<template>
  <div class="newlists" id="newlists">
        <ul class="nlist">
            <li v-for="(value, key) in newList">
                <router-link :to="{ name: 'newsMore1', params: { articid: value.Id , page: num, content: value.Content}}">
                <span class="nimg"><img :src="require('./../components/img/ban/d/' + value.Image +'.jpg')"></span>
                <span class="newsCtn">
                    <h2 class="ntit">{{ value.Title | filter | restr }}</h2>
                    <p class="ntb"><span class="nname">消息来源： {{ value.Source }} </span></p>
                    <i class="mark2">{{ value.username }}</i>
                </span>
                </router-link>
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

  },
  filters:{
    filter:function(value){
        if (!value) return '';
        if (value.length > 20) {
          return value.slice(0,20) + '...';
        }
        return value;
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
    'vue-newlists':newlists
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
            axios.get('http://154.48.238.35:8085/UserService.svc/NewsList?newstype=体育&pageindex=' + 4 + '&pagesize=2')  /// http://www.hd.me/data.php?callback=dosomething    static/news.json?num  static/news.json  http://misc.opencai.net/consts/lotts.json   /static/news.json
            .then(res => {
              console.log(res)
              res.data.d.Data.forEach((v,k) => {
                this.newList.push(v);
              });
            })
            .catch(error => {
                console.log(error);
                this.REQUIRE = false;
            });
        }
  }
}
</script>

<style lang="scss" scoped>
@import "scss/base.scss";
.vrw{
    height: 85%;
}
.nimg{
  width: 35%;
  float:left;
}
.newsCtn{
  width:62%;
  float:right;
}
.nlist{
  display:block;
  text-align: center;
  text-align: center
}
.nlist li{
  display:block;
  margin-bottom:0.05rem;
  text-align: left;
  font-size: 0.16rem;
  color:#5b5b5b;
  border-bottom:1px dotted #ccc;
  padding:0.05rem 0.1rem;
}
.nlist li a{
  font-size: 0.16rem;
  color:#5b5b5b
}
.ntit{
  font-size: 0.18rem;
  color:#2a2a2a;
  font-weight: normal;
  height: 0.5rem;
  overflow: hidden;
  line-height: 0.28rem;
}
.infinite-scroll{
  width: 0.5rem;
  height: 0.2rem;
  margin:0 auto;
}
.nimg img{
  width: 113rem;
  height:0.75rem;
}
.ntime{
    color: #b5b5b5;
    text-align: left;
}
.nname{
    color: #b5b5b5;
}
.ntb{
    display: block;
    clear:both;
    overflow: hidden;
    margin-top:0.08rem;
}


</style>

