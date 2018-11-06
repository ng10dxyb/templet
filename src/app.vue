<template>
  <div id="app" class="app">
    <m-loading :load="isLoad"></m-loading>
    <router-view></router-view>
    <div class="shade" v-show="false"></div>
  </div>
</template>

<script>
  import Loading from './components/loading'
  export default {
    name: 'app',
    components: {
      [Loading.name]: Loading,
    },
    computed: {
      isLoad() {
        return this.$store.state.isLoading
      }
    }
  }
</script>

<style scoped lang="scss">
  .shade{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
  }
</style>
