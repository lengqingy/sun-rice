<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 14:39:47
 * @LastEditTime: 2019-09-02 14:26:55
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="sun-collapse sun-line-top-bottom">
    <slot />
  </div>
</template>

<script>
export default ({
  name: 's-collapse',

  props: {
    accordion: Boolean,
    value: [String, Number, Array]
  },

  data() {
    return {
      items: []
    }
  },

  methods: {
    switch(name, expanded) {
      if (!this.accordion) {
        name = expanded
          ? this.value.concat(name)
          : this.value.filter(activeName => activeName !== name)
      }
      this.$emit('change', name)
      this.$emit('input', name)
    }
  }
})
</script>
