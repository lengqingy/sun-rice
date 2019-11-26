<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 14:39:47
 * @LastEditTime: 2019-08-30 14:39:47
 * @LastEditors: your name
 -->
<template>
  <div class="sun-radio-group">
    <slot />
  </div>
</template>

<script>
export default({
  name: 's-radio-group',

  props: {
    value: null,
    disabled: Boolean
  },

  watch: {
    value (value) {
      this.$emit('change', value)
    }
  }
})
</script>
