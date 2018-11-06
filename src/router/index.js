
import routes from './routes.js'
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/store'

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  linkActiveClass:"checked",
  /*base: '/elean/',*/
  routes,
  //模拟滚动行为,页面之间切换回到原位置
  scrollBehavior (to, from, savedPosition) {
    console.log(to.hash);
    if (savedPosition) {
      return savedPosition
    } else {
      let position = {x:0,y:0}
      if (to.hash) {
        position.selector = to.hash
      }
      //Array.some(function(){}) 测试数组中的某些元素是否通过由提供的函数实现的测试,只要有一个通过就为真，否则为假
      if (to.matched.some((m) => m.meta.scrollToTop)) {
        position.x = 0
        position.y = 0
      }
      return position
    }
  }
})

router.beforeEach((to, from, next) => {
  Vue.nextTick(() => {
    store.dispatch('startLoading')
    if(to.name=="elean-home"){
      store.dispatch('topShow')
    }else {
      store.dispatch('topHide')
    }
    if (to.matched.some(record => record.meta.require)) {
      store.dispatch('footerShow')
    }else {
      store.dispatch('footerHide')
    }

  })
  next()
})

router.afterEach((to, from) => {
  //const { meta: { title } } = to
  //title && common.changeDocTitle(title) //设置标题
  Vue.nextTick(() => {
    setTimeout(function() {
      store.dispatch('stopLoading')
    }, 500)
  })
})

export default router
