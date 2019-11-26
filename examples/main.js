/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-20 17:53:14
 * @LastEditTime: 2019-09-20 17:53:14
 * @LastEditors: your name
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import SunRice from '../src'
import '../theme/components/index.scss'

Vue.use(SunRice)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
