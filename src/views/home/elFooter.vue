<template>
  <div class="con">
    <ul class="clearfix">
      <li class="fl" v-for="(item,index) in navList" :key="index" :class="{active:$route.name==item.name}" @click="$openPage({path:item.path})">
        <i class="iconfont" :class="item.icon"></i>
        <div>{{item.title}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "el-footer",
    data() {
      return {
        navList: [
          {
            name: "elean-library",
            title: "文库",
            path:"/",
            icon:"icon-wenjianjia"
          },
          {
            name: "elean-print",
            title: "打印",
            path:"/print",
            icon:"icon-renwujincheng"
          },
          {
            name: "elean-mine",
            title: "我的",
            path:"/mine",
            icon:"icon-xiaoxi"
          }
        ]
      }
    },
    created() {
      console.log(this.$route.name);
    }
  }
</script>

<style scoped lang="scss">
  @import '@global/style/color.scss';
  .con {
    ul {
      display: flex;
      background: black;
      li {
        flex: 1;
        text-align: center;
        height: 1.2rem;
        color: white;
        font-size: 0.24rem;
        margin-top: 0.1rem;
        i{
          font-size: 0.32rem;
        }
      }
      .active {
        color: $color;
      }
    }
  }
</style>
