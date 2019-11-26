<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 14:39:47
 * @LastEditTime: 2019-09-24 17:27:22
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div :class="['sun-cell', { required, clickable, 'sun-line-top-bottom': border}]" @click="onClick">
    <slot name="left-icon">
      <img v-if="icon" class="sun-cell-left-icon" :src="icon" />
    </slot>
    <div v-if="title || $slots.title" class="sun-cell-title" :style="`max-width: ${titleWidth}px`">
      <slot name="title">
        <span v-text="title" />
        <div v-if="label" v-text="label" class="sun-cell-name-label" />
      </slot>
    </div>
    <div v-if="value === 0|| value === '0' || value || $slots.default"
      :class="['sun-cell-value', { alone: !$slots.title && !title }]" :style="`max-width: ${labelWidth}px`">
      <slot>
        <span v-text="value" />
      </slot>
    </div>
    <slot name="right-icon">
      <img v-if="arrowDirection" :class="['sun-cell-right-icon', arrowDirection]"
        src="../../../../assets/arrow_right.png" />
    </slot>
    <slot name="extra" />
  </div>
</template>

<script>
export default ({
  name: 's-cell',

  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      default: ''
    },
    titleWidth: {
      type: [String, Number],
      default: ''
    },
    labelWidth: {
      type: String,
      default: ''
    },
    required: Boolean,
    clickable: Boolean,
    border: Boolean,
    arrowDirection: {
      type: String,
      default: '',
      validator(value) {
        return [
          'up',
          'down',
          'right',
          'left'
        ].indexOf(value) > -1 || value === ''
      }
    }
  },

  methods: {
    onClick(event) {
      this.$emit('click', event)
    }
  }
})
</script>
