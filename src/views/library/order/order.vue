<template>
    <div class="order">
      <el-header lable="确认订单"></el-header>
      <div class="scoqe">
        <div>扫码选机</div>
      </div>
      <div class="set">
        <ul>
          <li>
            <div class="tit">的哈看到的克dad拉夫克拉科夫</div>
            <div class="des">打印预览</div>
          </li>
          <li>
            <div class="tit">打印起始页：</div>
            <div class="des">
              <div class="box">
                <div class="line"><div class="a">-</div></div>
                <div class="line"><div class="center">1</div></div>
                <div class="line"><div class="a">+</div></div>
              </div>
            </div>
          </li>
          <li>
            <div class="tit">打印终止页：</div>
            <div class="des">
              <div class="box">
                <div class="line"><div class="a">-</div></div>
                <div class="line"><div class="center">12</div></div>
                <div class="line"><div class="a">+</div></div>
              </div>
            </div>
          </li>
          <li>
            <div class="tit">打印份数：</div>
            <div class="des">
              <div class="box">
                <div class="line"><div class="a">-</div></div>
                <div class="line"><div class="center">1</div></div>
                <div class="line"><div class="a">+</div></div>
              </div>
            </div>
          </li>
          <li>
            <div class="tit">单页，不拼</div>
            <div class="des">打印设置</div>
          </li>
          <li>
            <div class="tit">单价：</div>
            <div class="des"><span>￥0.1</span></div>
          </li>
        </ul>
      </div>
      <div class="footer clearfix">
        <div class="fl total">合计：<span>￥0.2</span></div>
        <div class="fr rprint">立即打印</div>
      </div>
    </div>
</template>

<script>
  import elHeader from "../elHeader"

  export default {
    name: "order",
    components: {
      [elHeader.name]: elHeader,
    }
  }

</script>

<style scoped lang="scss">
.order{
  background: #EFEFEF;
  .scoqe{
    width: 100%;
    height: 1.2rem;
    background: white;
    overflow: hidden;
    div{
      height: 0.8rem;
      width: 4rem;
      text-align: center;
      line-height: 0.8rem;
      border-radius: 0.4rem;
      border: 1px solid #21a1b7;
      color: #21a1b7;
      margin: 0 auto;
      margin-top: 0.2rem;
    }
  }
  .set{
    margin-top: 0.3rem;
    background: white;
    padding: 0 0.3rem;
    li{
      line-height: 1.2rem;
      display: flex;
      border-bottom: 1px solid #EFEFEF;
      .tit{
        flex:1;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        text-align: left;
      }
      .des{
        text-align: right;
        flex: 1;
        color: #21a1b7;
        .box{
          display: flex;
          justify-content:flex-end;
          .line{
            text-align: center;
            .center{
              width: 1.2rem;
              color: #000;
            }
            .a{
              width: 0.6rem;
              height: 0.6rem;
              border-radius: 50%;
              border: 1px solid #21a1b7;
              color: #21a1b7;
              line-height: 0.5rem;
              margin: 0 auto;
              margin-top: 0.3rem;
            }
          }
        }
      }
    }
  }
  .footer{
    background: white;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0.9rem;
    line-height: 0.9rem;

    .total{
      padding: 0 0.3rem;
    }
    .rprint{
      padding: 0 0.5rem;
      background: #21a1b7;
      color: white;
    }
  }
}
</style>
