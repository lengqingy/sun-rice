<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 14:39:47
 * @LastEditTime: 2019-09-25 10:00:41
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div :class="[
      'sun-switch',
      {'on': value,
      'disabled': disabled}
    ]" :style="style" @click="onClick">
    <div class="sun-switch-node">
      <sun-spinner v-if="loading" class="sun-switch-loading" :size="size/2" color="#000" type="fading-circle" />
      <div class="sun-switch-text" v-if="text">
        <span>{{value ? text[0] : text[1]}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import SunSpinner from '../../spinner'

export default ({
  name: 's-switch',

  components: { SunSpinner },

  props: {
    value: Boolean,
    loading: Boolean,
    disabled: Boolean,
    size: {
      type: Number,
      default: 30
    },
    text: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    style() {
      return {
        fontSize: this.size + 'px'
      }
    }
  },

  methods: {
    onClick() {
      if (!this.disabled && !this.loading) {
        this.$emit('input', !this.value)
        this.$emit('change', !this.value)
      }
    }
  }
})
</script>
