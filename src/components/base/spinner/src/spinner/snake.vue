<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 14:39:47
 * @LastEditTime: 2019-09-25 09:57:21
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="sun-spinner-snake" :style="{
    'border-top-color': spinnerColor,
    'border-left-color': spinnerColor,
    'border-bottom-color': spinnerColor,
    'height': (this.size || this.$parent.size) - 6 + 'px',
    'width': (this.size || this.$parent.size) - 6 + 'px'
    }">
  </div>
</template>

<script>
import common from './common.vue'

export default {
  name: 's-snake',

  mixins: [common]
}
</script>
