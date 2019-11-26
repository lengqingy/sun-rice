<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 14:39:47
 * @LastEditTime: 2019-09-24 17:33:34
 * @LastEditors: Please set LastEditors
 -->
<template>
  <transition name="sun-slide-bottom">
    <div v-show="value" :class="['sun-actionsheet', { 'sun-actionsheet-title': title }]">
      <div v-if="title" class="sun-actionsheet-header sun-line-top-bottom">
        <div v-text="title" />
        <img class="sun-actionsheet-header-close" src="../../../../assets/del.png" @click="onCancel" v-if="isCancel">
      </div>
      <div v-else>
        <div v-for="item in actions" :key="item.name"
          :class="['sun-actionsheet-item', 'sun-line-top', { 'sun-actionsheet-disabled': item.disabled }, item.className]"
          @click.stop="onClickItem(item)">
          <template v-if="!item.loading">
            <span class="name">{{ item.name }}</span>
            <span class="sun-actionsheet-subname" v-if="item.subname">{{ item.subname }}</span>
          </template>
          <sun-spinner v-else class="sun-actionsheet-loading" :size="20" color="#000" type="fading-circle" />
        </div>
      </div>
      <div v-if="cancelText" v-text="cancelText" class="sun-actionsheet-cancel top" @click="onCancel" />
      <div v-else class="sun-actionsheet-content">
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
import SunPopup from '../../popup'
import SunSpinner from '../../spinner'

export default ({
  name: 's-actionsheet',

  components: { SunSpinner },

  mixins: [SunPopup],

  props: {
    value: Boolean,
    title: {
      type: String,
      default: ''
    },
    cancelText: {
      type: String,
      default: ''
    },
    actions: {
      type: Array,
      default: () => []
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    isCancel: Boolean
  },

  methods: {
    onClickItem(item) {
      if (item.callback && !item.disabled) {
        item.callback(item)
      }
    },

    onCancel() {
      this.$emit('input', false)
      this.$emit('cancel')
    }
  }
})
</script>
