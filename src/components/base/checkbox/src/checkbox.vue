<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 14:39:47
 * @LastEditTime: 2019-09-02 14:24:11
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="sun-checkbox">
    <span class="sun-checkbox-check" :class="[{ 'sun-checkbox-disabled': isDisabled, 'sun-checkbox-checked' : checked}]"
      @click="onClick"></span>
    <span v-if="$slots.default" class="sun-checkbox-label" @click="onClick('label')">
      <slot />
    </span>
  </div>
</template>

<script>
import findParent from '@/mixins/find-parent'

export default ({
  name: 's-checkbox',

  mixins: [findParent],

  props: {
    name: {
      type: String,
      default: ''
    },
    value: null,
    disabled: Boolean,
    labelDisabled: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    checked: {
      get() {
        return this.parent ? this.parent.value.indexOf(this.name) !== -1 : this.value
      },

      set(val) {
        const { parent } = this
        if (parent) {
          const parentValue = this.parent.value.slice()
          if (val) {
            if (parent.max && parentValue.length >= parent.max) {
              return
            }
            /* istanbul ignore else */
            if (parentValue.indexOf(this.name) === -1) {
              parentValue.push(this.name)
              parent.$emit('input', parentValue)
            }
          } else {
            const index = parentValue.indexOf(this.name)
            /* istanbul ignore else */
            if (index !== -1) {
              parentValue.splice(index, 1)
              parent.$emit('input', parentValue)
            }
          }
        } else {
          this.$emit('input', val)
        }
      }
    },

    isDisabled() {
      return (this.parent && this.parent.disabled) || this.disabled
    }
  },

  watch: {
    value(val) {
      this.$emit('change', val)
    }
  },

  created() {
    this.findParent('s-checkbox-group')
  },

  methods: {
    onClick(target) {
      if (!this.isDisabled && !(target === 'label' && this.labelDisabled)) {
        this.checked = !this.checked
      }
    }
  }
})
</script>
