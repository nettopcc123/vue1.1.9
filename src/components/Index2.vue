
<template>
  <div class="hello">
       <!-- <button @click="isloadshow">+</button>
        <button @click="isloadhid">-</button> -->
    <vue-redpacket></vue-redpacket>
  </div>
</template>
<script>
import axios from 'axios';
import redpacket from './../components/redpacket';


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
    'vue-redpacket':redpacket,
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

<style lang="scss" scoped>
@import "scss/base.scss";
.vrw {
    width: 100%;
}

</style>
