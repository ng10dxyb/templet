<template>
    <div class="container">
      <div class="nav">
        <div v-for="(item,index) in screen" :key="index" @click="click(item.category)" :class="{s:item.category==category}">{{item.type}}<i class="iconfont icon-play_fill"></i></div>
      </div>
      <div class="bar">
        <el-bar1 :category="category" :visible1.sync="show1" @ievent = "ievent"></el-bar1>
        <el-bar2 :visible2.sync="show2" @ievent = "ievent"></el-bar2>
      </div>
    </div>
</template>

<script>
  import bar1 from "./bar1"
  import bar2 from "./bar2"
    export default {
        name: "el-screen",
      components: {
        [bar1.name]: bar1,
        [bar2.name]: bar2,
      },
      data(){
          return{
            show2: false,
            show1: false,
            category:"",
            screen:[
              {
                type:this.$route.params.grade,
                category:"grade"
              },
              {
                type:this.$route.params.subject,
                category:"subject"
              },
              {
                type:"筛选",
                category:"screen"
              },
              {
                type:"排序",
                category:"sort"
              }
            ]
          }
      },
      methods:{
        ievent(data){
          var that=this;
         this.screen.map(function (item,i) {
            if(data.type==item.category){
              that.screen[i].type=data.val
            }
          })
          this.$emit('updata',data);
        },
          click(item){
            this.category=item;
            if(item=="sort"||item=="subject"||item=="grade"){
              this.show1=true;
              this.show2=false;
            }else {
              this.show1=false;
              this.show2=true;
            }
          }
      },
    }
</script>

<style scoped lang="scss">
.container{
  color: (0, 0, 0, 0.87);
  background: #EFEFEF;
  padding: 0 0.2rem;
  .nav{
    display: flex;
    text-align: center;
    div{
      line-height: 0.8rem;
      flex: 1;
      i{
        margin-left: 0.1rem;
        color: rgba(0,0,0,0.6);
        display: inline-block;
        transform: rotate(90deg);
        transition: all 0.3s;
      }
    }
    .s{
      color: red;
      i{
        color: red;
        transform: rotate(-90deg);
      }
    }
  }
}
</style>
