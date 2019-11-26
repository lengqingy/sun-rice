<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 14:39:47
 * @LastEditTime: 2019-09-25 09:57:05
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div :class="['sun-spinner-fading-circle circle-color-' + _uid]" :style="{
      width: spinnerSize,
      height: spinnerSize
    }">
    <div v-for="n in 12" :key="n" :class="['is-circle-' + (n + 1)]" class="sun-spinner-fading-circle-circle"></div>
  </div>
</template>

<script>
import common from './common.vue'

export default {
  name: 's-fading-circle',

  mixins: [common],

  created() {
    this.styleNode = document.createElement('style')
    const css = `.circle-color-${this._uid} > div::before { background-color: ${this.spinnerColor}; }`

    this.styleNode.type = 'text/css'
    this.styleNode.rel = 'stylesheet'
    this.styleNode.title = 'fading circle style'
    document.getElementsByTagName('head')[0].appendChild(this.styleNode)
    this.styleNode.appendChild(document.createTextNode(css))
  },

  destroyed() {
    if (this.styleNode) {
      this.styleNode.parentNode.removeChild(this.styleNode)
    }
  }
}
</script>
