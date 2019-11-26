<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 14:39:47
 * @LastEditTime: 2019-09-25 09:40:30
 * @LastEditors: Please set LastEditors
 -->
<template>
  <transition name="sun-dialog-bounce">
    <div v-show="value" :class="['sun-dialog', className]">
      <div v-if="title" v-text="title"
        :class="['sun-dialog-header', { 'sun-dialog-header-isolated': !message && !$slots.default }]" />
      <div class="sun-dialog-content" v-if="message || $slots.default">
        <slot>
          <div v-if="message" v-html="message"
            :class="['sun-dialog-message', { 'sun-dialog-message-has-title': title }]" />
        </slot>
      </div>
      <div class="sun-line-top"
        :class="['sun-dialog-footer', { 'sun-dialog-buttons': showCancelButton && showConfirmButton }]">
        <sun-button v-show="showCancelButton" :loading="loading.cancel" size="large" class="sun-dialog-cancel"
          @click="handleAction('cancel')">
          {{ cancelButtonText || '取消' }}
        </sun-button>
        <div v-show="showCancelButton" class="sun-line-right" style="width:1px;"></div>
        <sun-button v-show="showConfirmButton" :loading="loading.confirm" size="large"
          :class="['sun-dialog-confirm', { 'left': showCancelButton && showConfirmButton }]"
          @click="handleAction('confirm')">
          {{ confirmButtonText || '确定' }}
        </sun-button>
      </div>
    </div>
  </transition>
</template>

<script>
import SunPopup from '../../popup'
import SunButton from '../../button'

export default ({
  name: 's-dialog',

  components: { SunButton },

  mixins: [SunPopup],

  props: {
    title: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    },
    callback: Function,
    className: [String, Object, Array],
    beforeClose: Function,
    confirmButtonText: {
      type: String,
      default: ''
    },
    cancelButtonText: {
      type: String,
      default: ''
    },
    showCancelButton: Boolean,
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      loading: {
        confirm: false,
        cancel: false
      }
    }
  },

  methods: {
    handleAction(action) {
      if (this.beforeClose) {
        this.loading[action] = true
        this.beforeClose(action, state => {
          if (state !== false) {
            this.onClose(action)
          }
          this.loading[action] = false
        })
      } else {
        this.onClose(action)
      }
    },

    onClose(action) {
      this.$emit('input', false)
      this.$emit(action)
      this.callback && this.callback(action)
    }
  }
})
</script>
