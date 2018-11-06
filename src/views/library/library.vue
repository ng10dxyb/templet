<template>
  <div class="container">
    <el-seach></el-seach>
    <div class="banner">
      <div class="banner-box">
        <m-slider autoplay="4000">
          <m-slider-item>
            <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
          </m-slider-item>
          <m-slider-item>
            <img src="http://static.ydcss.com/uploads/ydui/2.jpg">
          </m-slider-item>
          <m-slider-item>
            <img src="http://static.ydcss.com/uploads/ydui/3.jpg">
          </m-slider-item>
        </m-slider>
      </div>
    </div>
    <div class="list">
      <ul>
        <li class="clearfix" v-for="(item ,index) in list" :key="index">
          <div class="fl nianji" :class="item.color">{{item.grade}}</div>
          <div class="subject">
            <div :class="item.color" v-for="(i,j) in item.subject" :key="j" @click="$openPage({path:`/libraryList/${item.grade}/${i}`})">{{i}}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {Slider, SliderItem} from './slider'

  export default {
    name: "library",
    components: {
      [Slider.name]: Slider,
      [SliderItem.name]: SliderItem,
    },
    data() {
      return {
        list: [
          {
            color: "grade1",
            grade: "一年级",
            subject: ["语文", "数学", "英语", "体育", "平的"]
          },
          {
            color: "grade2",
            grade: "二年级",
            subject: ["语文", "数学", "英语", "体育", "平的"]
          },
          {
            color: "grade3",
            grade: "三年级",
            subject: ["语文", "数学", "英语", "体育", "平的"]
          }, {
            color: "grade4",
            grade: "四年级",
            subject: ["语文", "数学", "英语", "体育", "平的"]
          }, {
            color: "grade5",
            grade: "五年级",
            subject: ["语文", "数学", "英语", "体育", "平的"]
          }, {
            color: "grade6",
            grade: "六年级",
            subject: ["语文", "数学", "英语", "体育", "平的"]
          },
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  .container {
    background: #EFEFEF;
  }

  .banner {
    margin-top: 0.3rem;
  }

  .list {
    padding: 0 0.3rem;
    margin-top: 0.6rem;
    padding-bottom: 1.5rem;
    li {
      text-align: center;
      color: white;
      width: 100%;
      margin-top: 0.2rem;
      .nianji {
        width: 1.4rem;
        height: 100%;
        line-height: 1.62rem;
      }
      .subject {
        display: flex;
        flex-wrap: wrap;
        div {
          width: 32%;
          margin-left: 1px;
          margin-bottom: 1px;
          line-height: 0.8rem;
        }
      }
    }
  }

  .grade1 {
    background: #4261ff;
  }

  .grade2 {
    background: #ff6d6d;
  }

  .grade3 {
    background: #ff49cd;
  }

  .grade4 {
    background: #01AAED;
  }

  .grade5 {
    background: #ff6d6d;
  }

  .grade6 {
    background: #1a27ff;
  }

</style>
