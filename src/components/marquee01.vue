<template>
<div class="marquee">

      <div class="marquee_title">
                 <span>福彩彩票新闻</span>
      </div>
        <div class="marquee_box">
                <ul class="marquee_list" :class="{marquee_top:animate}">
                      <li v-for="(item,index) in marqueeList">
                        <router-link :to="{ name: 'newsMore1', params: { articid: item.uid}}"> 
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
          name: "卡恩担任拜仁高层？鲁梅尼格：不清楚卡恩的想法",
          uid: 465
        },

        {
          name: "米兰21岁准新援已完婚，漂亮妻子是营养师",
          uid: 427
        },

        {
          name: "贵州恒丰暗示冲超？一张图可以看出美女老板文筱婷从未放弃足球",
          uid: 431
        },

        {
          name: "诺克斯：生涯开局不顺，但要保持好心态",
          uid: 464
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