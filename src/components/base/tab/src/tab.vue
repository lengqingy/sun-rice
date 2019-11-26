<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 14:39:47
 * @LastEditTime: 2019-09-25 10:01:20
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="sun-tab pane" v-show="isSelected">
    <slot v-if="inited" />
    <div v-if="$slots.title" ref="title">
      <slot name="title" />
    </div>
  </div>
</template>

<script>
import findParent from '@/mixins/find-parent'

export default ({
  name: 's-tab',

  mixins: [findParent],

  props: {
    title: String,
    disabled: Boolean
  },

  data() {
    return {
      inited: false
    }
  },

  computed: {
    index() {
      return this.parent.tabs.indexOf(this)
    },

    isSelected() {
      return this.index === this.parent.curActive
    }
  },

  watch: {
    'parent.curActive'() {
      this.inited = this.inited || this.isSelected
    },

    title() {
      this.parent.setLine()
    }
  },

  created() {
    this.findParent('s-tabs')
  },

  mounted() {
    const { tabs } = this.parent
    const index = this.parent.$slots.default.indexOf(this.$vnode)
    tabs.splice(index === -1 ? tabs.length : index, 0, this)
    if (this.$slots.title) {
      this.parent.renderTitle(this.$refs.title, this.index)
    }
  },

  destroyed() {
    this.parent.tabs.splice(this.index, 1)
  }
})
</script>
