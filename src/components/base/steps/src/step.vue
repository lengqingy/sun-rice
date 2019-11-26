<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 14:39:47
 * @LastEditTime: 2019-09-25 09:59:05
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="sun-step" :class="[$parent.direction ? `sun-step-${$parent.direction}`: '', status]">
    <div class="sun-step-title" :style="titleStyle">
      <slot />
    </div>
    <div class="sun-step-circle-container">
      <i class="sun-step-circle" v-if="status !== 'sun-step-process'">
        <div class="sun-step-cirlce-text">{{indexText}}</div>
      </i>
      <img v-else src="../../../../assets/success.png" class="sun-step-icon" :style="{ color: $parent.activeColor }" />
    </div>
    <div class="sun-step-line" />
  </div>
</template>

<script>

export default ({
  name: 's-step',

  props: {
    indexText: {
      type: String,
      default: ''
    }
  },

  beforeCreate() {
    this.$parent.steps.push(this)
  },

  computed: {
    status() {
      const index = this.$parent.steps.indexOf(this)
      const active = this.$parent.active

      if (index < active) {
        return 'sun-step-finish'
      } else if (index === active) {
        return 'sun-step-process'
      }
    },

    titleStyle() {
      return this.status === 'sun-step-process' ? {
        color: this.$parent.activeColor
      } : {}
    }
  }
})
</script>
