<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 14:39:47
 * @LastEditTime: 2019-09-25 09:55:00
 * @LastEditors: Please set LastEditors
 -->
<template>
  <transition :name="currentTransition">
    <div class="sun-popup" v-if="inited || !lazyRender" v-show="value" :class="position ? `sun-popup-${position}` : ''">
      <slot />
    </div>
  </transition>
</template>

<script>
import Popup from '@/mixins/popup'

export default ({
  name: 's-popup',

  mixins: [Popup],

  props: {
    transition: String,
    lazyRender: {
      type: Boolean,
      default: true
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      inited: this.value
    }
  },

  computed: {
    currentTransition() {
      return this.transition || (this.position === '' ? 'sun-fade' : `popup-slide-${this.position}`)
    }
  },

  watch: {
    value() {
      this.inited = this.inited || this.value
    }
  }
})
</script>
