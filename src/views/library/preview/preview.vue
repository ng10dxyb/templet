<template>
  <div>
    <el-header lable="文档预览"></el-header>
    <div class="lunbo"></div>
    <div class="footer">
      <div class="price">定价: <span>￥0</span></div>
      <div class="category">
        <div><i class="iconfont icon-collection"></i>
          <div>收藏</div>
        </div>
        <div @click="$openPage({path:'/library/order'})"><i class="iconfont icon-dayin"></i>
          <div >打印</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import elHeader from "../elHeader"

  export default {
    name: "preview",
    components: {
      [elHeader.name]: elHeader,
    }

  }
</script>

<style scoped lang="scss">
  .lunbo {
    width: 100%;
    height: 8rem;
  }

  .price {
    line-height: 1rem;
    text-align: center;
    span {
      color: red;
    }
  }

  .category {
    margin-top: 0.2rem;
    display: flex;
    text-align: center;
    div {
      flex: 1;
    }
  }

</style>
