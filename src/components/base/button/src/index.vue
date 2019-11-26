<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 14:39:47
 * @LastEditTime: 2019-09-02 14:17:45
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="sun-button" :class="[
      'sun-button-' + type,
      'sun-button-' + size,
      {
        'sun-button-block':block,
        'sun-button-checked':checked,
        'sun-button-loading':loading,
        'sun-button-disabled':disabled || disable,
        'sun-button-unclickable': (disabled || disable) || loading,
        'sun-button-bottom-action': bottomAction,
        'plain': plain
      }
    ]" @click="onClick">
    <sun-spinner class="sun-button-loading-loading" v-if="loading" :size="20" type="fading-circle" />
    <slot name="extra-left" />
    <span class="sun-button-des">
      <template v-if="nums">
        {{nums}}秒后重试
      </template>
      <template v-else>
        <slot></slot>
      </template>
    </span>
    <slot name="extra-right" />
  </div>
</template>

<script>
import SunSpinner from '../../spinner'

export default {
  name: 's-button',

  components: { SunSpinner },

  props: {
    block: Boolean,
    loading: Boolean,
    disabled: Boolean,
    bottomAction: Boolean,
    plain: Boolean,
    checked: Boolean,
    counter: Number,
    enableCounter: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'default',
      validator(value) {
        return [
          'default',
          'text',
          'primary',
          'light',
          'danger'
        ].indexOf(value) > -1
      }
    },
    size: {
      type: String,
      default: 'normal',
      validator(value) {
        return [
          'mini',
          'small',
          'normal',
          'large',
          'full'
        ].indexOf(value) > -1
      }
    }
  },
  data() {
    return {
      nums: 0,  // 倒计时秒数
      disable: this.disabled  //是否可点击
    }
  },

  methods: {
    onClick(event) {
      if (!this.loading && !(this.disabled || this.disable)) {
        if (!!this.counter && this.enableCounter) {
          this.disable = true
          this.nums = this.counter
          var timer = setInterval(() => {
            if (--this.nums === 0) {
              this.disable = false
              clearInterval(timer)
            }
          }, 1000);
        }
        this.$emit('click', event)
      }
    }
  }
}
</script>
