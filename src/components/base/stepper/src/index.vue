<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 14:39:47
 * @LastEditTime: 2019-09-25 09:58:42
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="sun-stepper">
    <sun-button :class="['sun-stepper-minus', { disabled: minusDisabled }]" @click="onChange('minus')">-</sun-button>
    <input type="number" class="sun-stepper-input" :value="currentValue" :disabled="disabled || disableInput"
      @input="onInput" @blur="onBlur">
    <sun-button :class="['sun-stepper-plus', { disabled: plusDisabled }]" @click="onChange('plus')">+</sun-button>
  </div>
</template>

<script>
import SunButton from '../../button'

export default ({
  name: 's-stepper',

  components: { SunButton },

  props: {
    value: null,
    integerOnly: Boolean,
    disabled: Boolean,
    disableInput: Boolean,
    min: {
      type: [String, Number],
      default: 1
    },
    max: {
      type: [String, Number],
      default: Infinity
    },
    step: {
      type: [String, Number],
      default: 1
    },
    defaultValue: {
      type: [String, Number],
      default: 1
    }
  },

  data() {
    const value = this.range(this.value || this.defaultValue)
    if (value !== +this.value) {
      this.$emit('input', value)
    }

    return {
      currentValue: value
    }
  },

  computed: {
    minusDisabled() {
      return this.disabled || this.currentValue <= this.min
    },

    plusDisabled() {
      return this.disabled || this.currentValue >= this.max
    }
  },

  watch: {
    value(val) {
      if (val !== this.currentValue) {
        this.currentValue = this.format(val)
      }
    },

    currentValue(val) {
      this.$emit('input', val)
      this.$emit('change', val)
    }
  },

  methods: {
    // filter illegal characters
    format(value) {
      value = String(value).replace(/[^0-9.-]/g, '')
      return value === '' ? 0 : this.integerOnly ? Math.floor(value) : +value
    },

    // limit value range
    range(value) {
      return Math.max(Math.min(this.max, this.format(value)), this.min)
    },

    onInput(event) {
      const { value } = event.target
      const formatted = this.format(value)

      if (+value !== formatted) {
        event.target.value = formatted
      }

      this.currentValue = formatted
    },

    onChange(type) {
      if (this[`${type}Disabled`]) {
        this.$emit('overlimit', type)
        return
      }

      const diff = type === 'minus' ? -this.step : +this.step
      const value = Math.round((this.currentValue + diff) * 100) / 100
      this.currentValue = this.range(value)
      this.$emit(type)
    },

    onBlur(event) {
      this.currentValue = this.range(this.currentValue)
      this.$emit('blur', event)
    }
  }
})
</script>
