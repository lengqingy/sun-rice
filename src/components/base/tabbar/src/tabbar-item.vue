<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 14:39:47
 * @LastEditTime: 2019-09-25 10:03:19
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div :class="['sun-tabbar-item', {'sun-tabbar-item-active': active}]" @click="onClick">
    <div :class="['sun-tabbar-item-icon', {'sun-tabbar-item-icon-dot': dot}]">
      <slot name="icon" :active="active">
      </slot>
      <div v-if="info" class="sun-tabbar-item-icon-info">{{ info }}</div>
    </div>
    <div class="sun-tabbar-item-text">
      <slot :active="active" />
    </div>
  </div>
</template>

<script>

export default ({
  name: 's-tabbar-item',

  props: {
    icon: String,
    dot: Boolean,
    info: [String, Number]
  },

  data() {
    return {
      active: false
    }
  },

  beforeCreate() {
    this.$parent.items.push(this)
  },

  destroyed() {
    this.$parent.items.splice(this.$parent.items.indexOf(this), 1)
  },

  methods: {
    onClick(event) {
      this.$parent.onChange(this.$parent.items.indexOf(this))
      this.$emit('click', event)
    }
  }
})
</script>
