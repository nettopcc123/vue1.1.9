
<template>
  <div class="hello">
       <!-- <button @click="isloadshow">+</button>
        <button @click="isloadhid">-</button> -->
    <vue-banner></vue-banner>
    <vue-marquee></vue-marquee>
    <vue-newlists></vue-newlists>
  </div>
</template>
<script>
import axios from 'axios';
import banner from './../components/banner';
import newlists from './../components/new_h01';
import marquee from './../components/marquee';



export default {
  name: 'Index',
  data () {
    return {
      newList:[],
      count:0
    }
  },
  computed:{
    num(){
      return this.$store.state.count;
    }
  },
  components: {
    'vue-banner':banner,
    'vue-newlists':newlists,
    'vue-marquee':marquee
  },
  methods:{
          isloadshow() {
            this.$store.commit('isload');
          },
          isloadhid() {
            this.$store.commit('isloadhid');
          }
  }
}


</script>

<style lang="scss">
@import "scss/base.scss";
.vrw {
    width: 100%;
}

</style>
