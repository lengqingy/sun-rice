<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 14:39:47
 * @LastEditTime: 2019-09-24 17:40:16
 * @LastEditors: Please set LastEditors
 -->
<template>
  <span class="sun-badge" :style="{ backgroundColor: color }"
    :class="['sun-badge-type-' + type, 'sun-badge-size-' + size]">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 's-badge',

  props: {
    color: String,
    type: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: 'normal'
    }
  }
}
</script>
