<template>
    <div>
      <router-view></router-view>
      <el-footer class="footer"></el-footer>
    </div>
</template>

<script>
  import elFooter from "./elFooter.vue"
    export default {
        name: "home",
      components: {
        [elFooter.name]: elFooter,
      },
    }
</script>

<style scoped>
  .footer{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1rem;
  }
</style>
