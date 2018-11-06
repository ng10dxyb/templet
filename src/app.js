import App from './app.vue'
import Vue from 'vue'
import router from './router/index'
import store from './store/store'
import 'muse-ui/lib/styles/base.less';
import {  ExpansionPanel,Carousel,Button } from 'muse-ui';
import 'muse-ui/lib/styles/theme.less';
import seach from '@/library/seach.vue'
import screen from '@/library/screen.vue'
Vue.use(ExpansionPanel);
Vue.use(Carousel);
Vue.use(Button);

Vue.prototype.$openPage=function (next,url) {
  if(next==1){
    window.location.href=url;
  }else {
    router.push(next)
  }
}
Vue.component("el-seach",seach);
Vue.component("el-screen",screen);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
