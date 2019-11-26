<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 14:39:47
 * @LastEditTime: 2019-09-25 16:12:26
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div :class="['sun-cell-group', { 'sun-line-top-bottom': border }]">
    <slot />
  </div>
</template>

<script>
export default ({
  name: 's-cell-group',

  props: {
    border: {
      type: Boolean,
      default: true
    }
  }
})
</script>
