<template>
  <div>
    <transition name="slide-fade">
      <div class="bar2" v-if="visible2">
        <ul>
          <li v-for="(item, index) in list" :key="index">
            <div class="tit">{{item.tit}}</div>
            <div class="list">
              <div v-for="(i,j) in item.category" :key="j" @click="select(item.tit,i)" :class="{active:active(i)}">
                {{i}}
              </div>
            </div>
          </li>
        </ul>
        <div class="btn">
          <div class="reset">重置</div>
          <div class="sure" @click="sure">确认</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "el-bar2",
    props: ["visible2"],
    data() {
      return {
        val1: [],
        val2: [],
        list: [
          {
            tit: "学科",
            category: ["一单元", "二单元", "三单元", "四单元", "五单元", "六单元"]
          },
          {
            tit: "教材类型",
            category: ["教案", "课时训练", "课件", "学案"]
          }
        ]
      }
    },
    created() {
    },

    methods: {
      select(tit, val) {
        if (tit == "学科") {
          var index = this.val1.indexOf(val);
          if (index > -1) {
            this.val1.splice(index, 1);
          } else {
            this.val1.push(val)
          }
        } else if (tit = "教材类型") {
          var index = this.val2.indexOf(val);
          if (index > -1) {
            this.val2.splice(index, 1);
          } else {
            this.val2.push(val)
          }
        } else {

        }

      },
      sure() {
        var obj={
          val1:this.val1,
          val2:this.val2
        }
        this.$emit('ievent',obj);
        this.$emit('update:visible2', false)
      },
      active(i) {
        var arr = [...this.val1, ...this.val2]
        if (arr.indexOf(i) > -1) {
          return true
        } else {
          return false
        }
      }
    },
    computed: {}
  }
</script>

<style scoped lang="scss">
  .bar2 {
    margin: 0 -0.2rem;
    background: white;
    width: 100%;
    position: absolute;
    line-height: 0.7rem;
    li {
      padding-left: 0.2rem;
      border-top: 1px solid #eee;
      .tit {
        line-height: 1rem;
        font-size: 0.32rem;
      }
      .list {
        width: 85%;
        display: flex;
        flex-wrap: wrap;
        font-size: 0.26rem;
        div {
          width: 1.3rem;
          text-align: center;
          background: #EFEFEF;
          margin-right: 0.2rem;
          margin-bottom: 0.3rem;
          border-radius: 0.1rem;
        }
        .active {
          background: #bde6ed;
          color: #20a1b7;
        }
      }
    }
    .btn {
      line-height: 0.9rem;
      display: flex;
      text-align: center;
      color: white;
      div {
        flex: 1;
      }
      .reset {
        background: #bde6ed;
        color: #22a1b5;
      }
      .sure {
        background: #22a1b5;
      }
    }
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(1000px);
    opacity: 0;
  }
</style>
