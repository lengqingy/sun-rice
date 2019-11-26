<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 14:39:47
 * @LastEditTime: 2019-09-25 10:03:41
 * @LastEditors: Please set LastEditors
 -->
<template>
  <transition name="sun-toast-pop">
    <div class="sun-toast" v-show="visible" :class="customClass"
      :style="{ 'padding': iconType === '' ? '10px' : '20px' }">
      <img v-if="ICON_LIST[iconType]" class="sun-toast-icon" :src="ICON_LIST[iconType]" />
      <sun-spinner v-if="iconType=='loading'" class="sun-toast-loading" :size="28" color="white" type="fading-circle" />
      <span class="sun-toast-text" :style="{ 'padding-top': iconType === '' ? '0' : '10px' }">{{ message }}</span>
    </div>
  </transition>
</template>

<script>
import SuccessIcon from '@/assets/toast_success.png'
import WarningIcon from '@/assets/toast_warning.png'
import ErrorIcon from '@/assets/toast_error.png'
import SunSpinner from '../../spinner'

const ICON_LIST = {
  success: SuccessIcon,
  warning: WarningIcon,
  error: ErrorIcon
}

export default {
  name: 's-toast',

  components: { SunSpinner },

  props: {
    message: {
      type: String,
      default: ''
    },
    position: {
      type: String,
      default: 'middle',
      validator(value) {
        return [
          'top',
          'middle',
          'bottom'
        ].indexOf(value) > -1
      }
    },
    iconType: {
      type: String,
      default: '',
      validator(value) {
        return [
          'success',
          'warning',
          'error',
          'loading'
        ].indexOf(value) > -1 || value === ''
      }
    }
  },

  data() {
    return {
      ICON_LIST,
      visible: false
    }
  },

  computed: {
    customClass() {
      var classes = []
      switch (this.position) {
        case 'top':
          classes.push('sun-toast-placetop')
          break
        case 'bottom':
          classes.push('sun-toast-placebottom')
          break
        default:
          classes.push('sun-toast-placemiddle')
      }
      return classes.join(' ')
    }
  }
}
</script>
