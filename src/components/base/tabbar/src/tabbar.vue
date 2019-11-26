<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 14:39:47
 * @LastEditTime: 2019-09-25 10:03:00
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div :class="['sun-tabbar sun-tabbar-top-bottom', { 'sun-tabbar-fixed': fixed }]" :style="style">
    <slot />
  </div>
</template>

<script>

export default ({
  name: 's-tabbar',

  data() {
    return {
      items: []
    }
  },

  props: {
    value: Number,
    fixed: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number,
      default: 1
    }
  },

  computed: {
    style() {
      return {
        zIndex: this.zIndex
      }
    }
  },

  watch: {
    items() {
      this.setActiveItem()
    },
    value() {
      this.setActiveItem()
    }
  },

  methods: {
    setActiveItem() {
      this.items.forEach((item, index) => {
        item.active = index === this.value
      })
    },
    onChange(active) {
      this.$emit('input', active)
      this.$emit('change', active)
    }
  }
})
</script>
