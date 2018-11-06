<template>
  <div class="container">
    <div class="m-header clearfix">
      <div class="portrait fl"><img :src="img" alt=""></div>
      <div class="des fl">
        <div class="m-name">测试sss</div>
        <div class="clearfix mune">
          <div class="fouce fl">关注 <span class="num">0</span></div>
          <div class="fans fl">粉丝 <span class="num">0</span></div>
        </div>
      </div>
    </div>
    <div class="m-body">
      <ul>
        <li v-for="(item,index) in muneList" :key="index" class="clearfix">
          <i class="iconfont fl" :class="item.icon"></i>
          <div class="tit fl">{{item.tit}}</div>
          <div v-if="item.coupon" class="coupon fr">有<span>{{item.coupon}}</span>张优惠卷</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import img from "@image/img.jpg"

  export default {
    name: "mine",
    data() {
      return {
        img,
        muneList: [
          {
            icon: "icon-supply",
            tit: "我的收藏",
            path: ""
          },
          {
            icon: "icon-youhuijuan-xianxing",
            tit: "我的卡劵",
            path: "",
            coupon: "0"
          }, {
            icon: "icon-redpacket_fill",
            tit: "我的钱包",
            path: ""
          },
          {
            icon: "icon-jifen-xianxing",
            tit: "我的收入",
            path: ""
          },
          {
            icon: "icon-setup",
            tit: "设置",
            path: ""
          }

        ]
      }
    },
    created(){

    }
  }
</script>

<style scoped lang="scss">
  .container {
    background: #EFEFEF;
    .m-header {
      background: white;
      padding: 0.4rem 0.3rem;
      .portrait {

        img {
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 50%;
        }
      }
      .des {
        padding: 0.2rem 0;
        margin-left: 0.4rem;
        .m-name {
          letter-spacing: 2px;
          font-size: 0.32rem;
        }
        .mune {
          margin-top: 0.25rem;
          color: grey;
          .num {
            font-size: 0.32rem;
            color: black;
          }
          .fans {
            margin-left: 1.5rem;
          }
        }
      }
    }
    .m-body {
      margin-top: 0.2rem;
      background: white;
      li {
        padding: 0 0.3rem;
        border-bottom: 1px solid #EFEFEF;
        line-height: 1rem;
        i {
          font-size: 0.5rem;
          vertical-align: middle;
        }
        .tit {
          font-size: 0.3rem;
          margin-left: 0.15rem;
        }
        .coupon {
          margin-right: 0.2rem;
          color: grey;
        }
      }
    }
  }
</style>
