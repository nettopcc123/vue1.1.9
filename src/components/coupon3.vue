<template>
<div id="favorites">
    <div class="favors">
     没有更多数据
    </div>
 </div> 
 </template>
<script>
import axios from 'axios'
export default {
  name:'favorites',
  data(){
    return {
    }
  },
  mounted:function(){
    this.$nextTick(function(){

    })
  },
  methods:{

  }
}
</script>
<style lang="scss" scoped>
@import "scss/base.scss";
.favors{
    padding:0.15rem 0.1rem;
    color:#5e5e5e;
    text-align: center;
}
</style>