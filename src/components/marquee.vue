<template>
<div class="marquee">

      <div class="marquee_title">
                 <span>足赛前瞻</span>
      </div>
        <div class="marquee_box">
                <ul class="marquee_list" :class="{marquee_top:animate}">
                      <li v-for="(item,index) in marqueeList">
                        <router-link :to="{ name: 'newsMore1', params: { url: item.url}}"> 
                          {{item.name}}
                        </router-link>
                        </li>
                </ul>
        </div>
</div>
</template> 
<script>
export default {
  data() {
    return {
      animate: false,

      marqueeList: [
        {
          name: "桑托斯vs沙佩科恩斯  赛前情报",
          url: "http://m.nowscore.com/news/746905.htm"
        },

        {
          name: "布雷斯特vs南锡  赛前情报",
          url: "http://m.nowscore.com/news/746901.htm"
        },

        {
          name: "老虎竞技vs阿根廷青年人 盼老虎竞技获胜乃更优选择",
          url: "http://m.nowscore.com/news/746897.htm"
        },

        {
          name: "波鸿vs达姆施塔特 达姆施塔特客战有望不败",
          url: "http://m.nowscore.com/news/746894.htm"
        }
      ]
    };
  },
  created: function() {
    // 页面显示
    setInterval(this.showMarquee, 2000);
  },
  methods: {
    showMarquee: function() {
      this.animate = true;

      setTimeout(() => {
        this.marqueeList.push(this.marqueeList[0]);

        this.marqueeList.shift();

        this.animate = false;
      }, 500);
    }
  }
};
</script>
 
<style lang="scss" scoped>
@import "scss/base.scss";
.marquee {
  width: 100%;

  height: 50px;

  align-items: center;

  color: #3a3a3a;

  background-color: white;

  display: flex;

  box-sizing: border-box;

  overflow: hidden;
}

.marquee_title {
  padding: 0 20px;

  height: 21px;

  font-size: 14px;

  border-right: 1px solid #d8d8d8;

  align-items: center;
}

.marquee_box {
  display: block;

  position: relative;

  width: 60%;

  height: 30px;

  overflow: hidden;
}

.marquee_list {
  display: block;

  position: absolute;

  top: 0;

  left: 0;
}

.marquee_top {
  transition: all 0.5s;

  margin-top: -30px;
}

.marquee_list li {
  height: 30px;

  line-height: 30px;

  font-size: 14px;

  padding-left: 20px;
}

.marquee_list li span {
  padding: 0 2px;
}
.marquee_list li a {
  color:#3d3d3d;
}
</style>