<template>
  <div>
    <transition name="slide-fade">
      <div class="bar1" v-if="visible1">
        <ul>
          <li v-for="(item, index) in list" :key="index" @click="select(item)">{{item}}</li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "el-bar1",
    props: ["visible1", "category"],
    data() {
      return {
        subject: ["语文", "属性", "大家埃", "体验", "上课"],
        grade: ["一年级", "二年级", "三年级", "四年级", "五年级", "六年级"],
        sort:["最新上传","最热文档","价格最高","价格最低"]
      }
    },
    created() {
      console.log(this.category);
    },
    computed: {
      list: function () {
        return this[this.category]
      }
    },
    methods:{
      select(val){
        var obj={
          type:this.category,
          val:val
        }
        this.$emit('ievent',obj);
        this.$emit('update:visible1', false)
      }
    }
  }
</script>

<style scoped lang="scss">
  .bar1 {
    margin: 0 -0.2rem;
    background: white;
    width: 100%;
    position: absolute;
    text-align: center;
    line-height: 0.8rem;
    li {
      border-top: 1px solid #eee;
    }
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(-1000px);
    opacity: 0;
  }
</style>
