<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 14:39:47
 * @LastEditTime: 2019-09-25 09:49:58
 * @LastEditors: Please set LastEditors
 -->
<template>
  <transition name="sun-indicator">
    <div class="sun-indicator" v-show="visible">
      <div class="sun-indicator-wrapper" :style="{ 'padding': text ? '20px' : '15px' }">
        <sun-spinner class="sun-indicator-spin" :type="convertedSpinnerType" :size="size" :color="color" />
        <span class="sun-indicator-text" v-show="text">{{ text }}</span>
      </div>
      <div class="sun-indicator-mask" @touchmove.stop.prevent></div>
    </div>
  </transition>
</template>

<script >
import SunSpinner from '../../spinner'

export default {
  name: 's-indicator',

  components: { SunSpinner },

  props: {
    text: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'snake'
    },
    size: {
      type: Number,
      default: 32
    },
    color: {
      type: String,
      default: '#fff'
    }
  },

  computed: {
    convertedSpinnerType() {
      return this.type ? this.type : ''
    }
  },

  data() {
    return {
      visible: false
    }
  }
}
</script>
