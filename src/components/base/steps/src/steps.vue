<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 14:39:47
 * @LastEditTime: 2019-09-25 09:59:24
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="sun-steps" :class="direction ? `sun-steps-${direction}` : ''">
    <div v-if="title || description" class="sun-steps-status">
      <div v-if="icon || $slots.icon" class="sun-steps-icon">
        <slot name="icon">
          <img :src="icon" class="sun-steps-icon" :class="iconClass" />
        </slot>
      </div>
      <div class="sun-steps-message">
        <div class="sun-steps-title" v-text="title" />
        <div class="sun-steps-desc sun-ellipsis" v-text="description" />
      </div>
      <slot name="message-extra" />
    </div>
    <div :class="['sun-steps-items', { 'sun-steps-alone': !title && !description }]">
      <slot />
    </div>
  </div>
</template>

<script>

export default ({
  name: 's-steps',

  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    active: Number,
    iconClass: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    direction: {
      type: String,
      default: 'horizontal'
    },
    activeColor: {
      type: String,
      default: '#2c88ff'
    }
  },

  data() {
    return {
      steps: []
    }
  }
})
</script>
