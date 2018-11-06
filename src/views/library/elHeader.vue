<template>
  <div class="header clearfix">
    <div class="tit">{{lable}}</div>
    <div class="back" @click="$router.go(-1)"><i class="iconfont icon-fanhui"></i></div>
  </div>
</template>

<script>
  export default {
    name: "el-header",
    props: ["lable"]
  }
</script>

<style scoped lang="scss">
  .header {
    border-bottom: 1px solid #eee;
    line-height: 1rem;
    background: white;
    .back {
      position: absolute;
      left: 0.4rem;
      top: 0;
      i {
        font-size: 0.5rem;
      }
    }
    .tit {
      text-align: center;
      font-size: 0.32rem;
    }
  }
</style>
