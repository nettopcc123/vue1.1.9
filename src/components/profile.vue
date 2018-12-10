<template>
<div id="disclaimer">
 <h2 class="uitit_a"><i class="iconfont icon-back uic" @click="routerback"></i>个人资料</h2>
 <div class="disw">
     <ul>
         <li><span>帐号: </span> <span>{{ name }}</span></li>
         <li><span>邮箱: </span> <span>{{ email }}</span></li>
         <li><span>电话: </span> <span>{{ mobile }}</span></li>
         <li><span>QQ: </span> <span>{{ remark }}</span></li>
     </ul>
 </div> 
 </div>
 </template>
<script>
export default {
  name:'disclaimer',
  data(){
      return {
          name:'',
          email:'',
          mobile:'',
          remark:''
      }
  },
  mounted:function(){
      let user = JSON.parse(localStorage.getItem('ures'));
      this.name = user.UserName;
      this.email = user.Email;
      this.mobile = user.Mobile;
      this.remark = user.Remark;
  },
  methods:{
    routerback: function () {
      this.$router.back(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "scss/base.scss";
.disw{
      padding:0.05rem 0.1rem
}
.disw ul{
    display: block;
    clear:both;
    overflow: hidden;
    background: #fff;
    padding:0.2rem;
    border-radius: 0.1rem;
    margin-top:0.1rem;
}
.disw ul li{
    display: block;
    clear:both;
    overflow: hidden;
    line-height: 0.36rem;
    border-bottom: 1px dotted #c8c8c8;
    text-indent: 0.1rem;
    margin-bottom:0.05rem;
}
.discon{
      display: block;
      line-height: 0.22rem;
      color:#575757
}
.distit{
        display: block;
      line-height: 0.26rem; 
      margin-top:0.1rem;  
}
.uitit_a{
    display: block;
    line-height: 0.36rem!important;
    padding-left:0.15rem;
    font-size: 0.18rem;
    text-align: center;
    background:#fff !important;
    border-bottom: 1px solid #e8e8ec;
    color:#858c5c;
    font-weight: normal;
}
.uic{
    position: absolute;
    left:0.1rem;
    line-height: 0.4rem;
    font-size:0.24rem;
    font-weight: normal;
}
</style>