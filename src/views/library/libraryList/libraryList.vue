<template>
  <div class="container">
    <div class="header">
      <el-seach></el-seach>
      <el-screen @updata="updata"></el-screen>
    </div>
    <div class="banner">
      <ul>
        <li v-for="(item ,index) in 10" @click="$openPage({path:'/library/preview'})">
          <div class="bar clearfix">
            <div class="img fl"><img :src="img" alt=""></div>
            <div class="fl">{{data.name}}</div>
            <div class="fr">2018-09-12 20:57:14</div>
          </div>
          <div class="detail clearfix">
            <div class="cost fl">#<span>免费</span>#</div>
            <div class="fl">[<span>学案</span>] <span>第1节</span> <span>{{data.file}}.doc</span></div>
            <div class="price fr">￥<span>0</span></div>
          </div>
          <div class="des">
            <div class="stars"><i class="iconfont icon-collection"></i> 0</div>
            <div class="fabulous"><i class="iconfont icon-praise"></i> 0</div>
            <div class="print"><i class="iconfont icon-dayin"></i> 0</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import img from "@image/img.jpg"

  export default {
    name: "library-list",
    data() {
      return {
        img,
        data:{
          name: "小马文库",
          file: "语文教材"
        },
        data1: {
          name: "小马文库",
          file: "语文教材"
        },
        data2: {
          name: "宜联文库",
          file: "英语教材"
        },
        data4: {
          name: "南庙文库",
          file: "武术教材"
        },
        data4: {
          name: "网吧文库",
          file: "吃鸡教材"
        }
      }
    },
    methods:{
      updata(data){
        console.log(data);
        if(data.type=="grade"){
          this.data=this.data1
        }
        if(data.type=="subject"){
          this.data=this.data2
        }
        if(data.val1){
          this.data=this.data3
        }
        if(data.type=="sort"){
          this.data=this.data4
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .container {
    background: #efefef;
    .header {
      z-index: 100;
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      border-bottom: 1px solid #c0bfc4;
    }
    .banner {
      margin: 0 0.2rem;
      margin-top: 1.8rem;
      overflow: hidden;
      ul {
        margin-top: 0.3rem;
        li {
          width: 100%;
          height: 2.5rem;
          background: white;
          margin-top: 0.04rem;
          padding: 0.2rem;
          .bar {
            line-height: 0.8rem;
            .img {
              margin: 0 0.4rem 0 0.2rem;
              img {
                width: 0.5rem;
                height: 0.5rem;
              }
            }
          }
          .detail {
            .cost {
              margin-right: 0.2rem;
            }
            .price {
              color: #22a1b5;
            }
          }
          .des {
            display: flex;
            text-align: center;
            line-height: 1rem;
            i {
              font-size: 0.4rem;
            }
            .stars, .print {
              flex: 1;
            }
            .fabulous {
              flex: 3;
            }
          }
        }
      }
    }
  }
</style>
