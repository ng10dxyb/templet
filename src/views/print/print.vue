<template>
    <div class="print">
      <div class="header">我的订单</div>
      <div class="detail">
        <div class="item"><div class="iconfont icon-dayin"></div>待打印</div>
        <div class="item"><div class="iconfont icon-dayin"></div>已完成</div>
        <div class="item"><div class="iconfont icon-dayin"></div>打印故障</div>
      </div>
      <div class="list">
        <div class="tit">待打印订单</div>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "print"
    }
</script>

<style scoped lang="scss">
.print{
  .header{
    line-height: 1rem;
    background: white;
    text-align: center;
    font-size: 0.32rem;
    border-bottom: 1px solid #eee;
  }
  .detail{
    margin-top: 0.2rem;
    display: flex;
    height: 1.2rem;
    background: white;
    text-align: center;
    padding: 0.1rem 0.3rem;
    .item{
      flex: 1;
    }
  }
  .list{
    margin-top: 0.1rem;
    /*background: white;*/
    padding: 0.1rem 0.3rem;
    .tit{
      font-size: 0.3rem;
      font-weight: 700;
      line-height: 0.8rem;
      color: grey;
    }
  }
}
</style>
