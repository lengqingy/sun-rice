<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 14:39:47
 * @LastEditTime: 2019-09-05 14:12:14
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="sun-spinner-triple-bounce" :style="{ 'width': (this.size || this.$parent.size) * 3.5 + 'px' }">
    <div class="sun-spinner-triple-bounce-bounce1" :style="bounceStyle"></div>
    <div class="sun-spinner-triple-bounce-bounce2" :style="bounceStyle"></div>
    <div class="sun-spinner-triple-bounce-bounce3" :style="bounceStyle"></div>
  </div>
</template>

<script>
import common from './common.vue'

export default {
  name: 's-triple-bounce',

  mixins: [common],

  computed: {
    bounceStyle() {
      return {
        width: this.spinnerSize,
        height: this.spinnerSize,
        backgroundColor: this.spinnerColor
      }
    }
  }
}
</script>
