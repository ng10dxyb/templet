<template>
  <div class="con">
    <transition name="slide-fade">
      <div class="seach"  >
        <input type="text" placeholder="请输入打印机型号" id="seach" v-model="val" >
        <i class="iconfont icon-search s"></i>
        <i class="iconfont icon-close e"></i>
        <div class="list">
          <div v-if="no_result" class="no_result">未查询到相关数据</div>
          <ul v-if="!no_result">
            <li v-for="(item,index) in res" :key="index" @click='next(item.path)'>
              <span class="productName">{{item.name}}</span>
              <span class="productDes">{{item.des}}</span>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  var datas = [
    {name: "AM3093", des:"黑白智能激光一体机",path:"/specification/am3093"},
    {name: "AP3093", des:"黑白高速智能打印机",path:"/specification/ap3093"},
    {name: "VLM2601", des:"黑白智能激光一体机",path:"/specification/vlm2601"},
    {name: "VLS1601", des:"黑白智能激光打印机",path:"/specification/vls1601"},
    {name: "VLM2602", des:"共享激光一体机",path:"/specification/vlm2602"},
    {name: "VLS1602", des:"共享激光一体机",path:"/specification/vls1602"},
    {name: "ES1501", des:"黑白智能激光一体机",path:"/specification/es1501"},
    {name: "EM2501", des:"黑白智能激光打印机",path:"/specification/em2501"},
  ];
  export default {
    name: "el-seach",
    /*props: ["visible"],*/
    data(){
      return{
        val:"",
        shows:true,
        res:[],
        no_result:false,
      }
    },
    created(){
      console.log(this.res);
    },
    watch: {
      val(curVal,oldVal){
        var that=this;
        this.res=[];
        var key = curVal.toUpperCase();
        if(key){
          datas.map(function (v,i) {
            if (v.name.indexOf(key) >= 0||v.des.indexOf(key) >= 0) {
              that.res.push(v)
            }
          })
          if(!this.res.length){
            this.no_result=true;
          }else {
            this.no_result=false;
          }
        }
      }
    },
    methods: {
      next(path){
        this.hide();
        this.$openPage({path:path})
      },
    },
  }
</script>

<style scoped>
  .con{

  }
  .seach {
    height: 1rem;
    width: 100%;
    text-align: center;
    padding: 0 0.2rem;
    background: #EFEFEF;
  }
  #seach{
    position: relative;
    border: none;
    outline: none;
    resize: none;
    -webkit-appearance: none;
    width: 100%;
    height: 0.7rem;
    margin: 0.15rem auto;
    padding:0 0.6rem;
    border-radius: 0.1rem;

  }
  .no_result{
    line-height: 1rem;
    text-align: center;
  }
  .s{
    width: 0.5rem;
    height: 0.5rem;
    position: absolute;
    top: 0.25rem;
    left: 4%;
    font-size: 0.36rem;

  }
  .e{
    width: 0.5rem;
    height: 0.5rem;
    position: absolute;
    top: 0.25rem;
    right: 4%;
    font-size: 0.36rem;
  }
  .list{
    text-align: left;
    width: 100%;
    line-height: 0.72rem;
   position: absolute;
    left: 0;
    top: 0.9rem;
    z-index: 999;
    background: #EFEFEF;
    padding:0 0.2rem;
  }
  .list li{
    padding-left: 0.6rem;
    margin-top: 0.05rem;
    background: white;
  }
  .list li:last-child{
    margin-bottom: 0.5rem;
  }
  .list li .productName{
    color: #EC725A;
    margin-right: 0.2rem;
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(1000px);
  }
</style>
