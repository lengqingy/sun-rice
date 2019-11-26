<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 14:39:47
 * @LastEditTime: 2019-09-25 09:52:12
 * @LastEditors: Please set LastEditors
 -->
<template>
  <i v-text="text" @touchstart.stop.prevent="onFocus" @touchmove="onBlur" @touchend="onBlur" @touchcancel="onBlur"
    :class="['sun-key', 'sun-line-top-right', className]" />
</template>

<script>

export default ({
  name: 's-key',

  props: {
    text: [String, Number],
    type: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      active: false
    }
  },

  computed: {
    className() {
      let types = this.type.slice(0)
      this.active && types.push('active')

      return types
    }
  },

  methods: {
    onFocus() {
      this.active = true
      this.$emit('press', this.text)
    },

    onBlur() {
      this.active = false
    }
  }
})
</script>
