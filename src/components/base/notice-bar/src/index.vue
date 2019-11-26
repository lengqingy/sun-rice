<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 14:39:47
 * @LastEditTime: 2019-09-25 09:51:17
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div v-show="showNoticeBar" :class="['sun-noticebar', { 'sun-noticebar-withicon': mode }]" :style="barStyle"
    @click="$emit('click')">
    <img v-if="leftIcon" class="sun-noticebar-leftIcon" :src="leftIcon">
    <div class="sun-noticebar-wrap" ref="wrap">
      <div ref="content" :class="['sun-noticebar-content', animationClass]" :style="contentStyle"
        @animationend="onAnimationEnd" @webkitAnimationEnd="onAnimationEnd">
        <slot>{{ text }}</slot>
      </div>
    </div>
    <img v-if="iconName" class="sun-noticebar-rightIcon" @click="onClickIcon" :src="iconName" />
  </div>
</template>

<script>
import linkIcon from '@/assets/arrow_right.png'
import closeIcon from '@/assets/del.png'

export default ({
  name: 's-notice-bar',

  props: {
    text: {
      type: String,
      default: ''
    },
    mode: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    leftIcon: {
      type: String,
      default: ''
    },
    background: {
      type: String,
      default: ''
    },
    delay: {
      type: [String, Number],
      default: 1
    },
    scrollable: {
      type: Boolean,
      default: true
    },
    speed: {
      type: Number,
      default: 50
    }
  },

  data() {
    return {
      wrapWidth: 0,
      firstRound: true,
      duration: 0,
      offsetWidth: 0,
      showNoticeBar: true,
      animationClass: ''
    }
  },

  computed: {
    iconName() {
      return this.mode === 'closeable' ? closeIcon : this.mode === 'link' ? linkIcon : ''
    },

    barStyle() {
      return {
        color: this.color,
        background: this.background
      }
    },

    contentStyle() {
      return {
        paddingLeft: this.firstRound ? 0 : this.wrapWidth + 'px',
        animationDelay: (this.firstRound ? this.delay : 0) + 's',
        animationDuration: this.duration + 's'
      }
    }
  },

  watch: {
    text: {
      handler() {
        this.$nextTick(() => {
          const { wrap, content } = this.$refs
          if (!wrap || !content) {
            return
          }

          const wrapWidth = wrap.getBoundingClientRect().width
          const offsetWidth = content.getBoundingClientRect().width
          if (this.scrollable && offsetWidth > wrapWidth) {
            this.wrapWidth = wrapWidth
            this.offsetWidth = offsetWidth
            this.duration = offsetWidth / this.speed
            this.animationClass = 'sun-noticebar-play'
          }
        })
      },
      immediate: true
    }
  },

  methods: {
    onClickIcon() {
      this.showNoticeBar = this.mode !== 'closeable'
    },

    onAnimationEnd() {
      this.firstRound = false
      this.$nextTick(() => {
        this.duration = (this.offsetWidth + this.wrapWidth) / this.speed
        this.animationClass = 'sun-noticebar-playInfinite'
      })
    }
  }
})
</script>
