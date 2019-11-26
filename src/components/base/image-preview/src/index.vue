<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 14:39:47
 * @LastEditTime: 2019-09-25 09:49:37
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div v-show="value" class="sun-image-preview" @touchstart="onTouchStart" @touchend="onTouchEnd"
    @touchcancel="onTouchEnd">
    <sun-swipe :initial-swipe="startPosition" ref="swipe">
      <sun-swipe-item v-for="(item, index) in images" :key="index">
        <img class="sun-image-preview-img" :src="item">
      </sun-swipe-item>
    </sun-swipe>
  </div>
</template>

<script>
import { SunSwipeItem, SunSwipe } from '../../../base/swipe'
import SunPopup from '../../../base/popup'

export default ({
  name: 's-image-preview',

  components: { SunSwipeItem, SunSwipe },

  mixins: [SunPopup],

  props: {
    images: {
      type: Array,
      default: () => []
    },
    startPosition: {
      type: Number,
      default: 0
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },

  methods: {
    onTouchStart() {
      this.touchStartTime = new Date()
    },

    onTouchEnd(event) {
      event.preventDefault()

      const deltaTime = new Date() - this.touchStartTime
      const { offsetX, offsetY } = this.$refs.swipe

      // prevent long tap to close component
      if (deltaTime < 500 && offsetX < 10 && offsetY < 10) {
        this.$emit('input', false)
      }
    }
  }
})
</script>
