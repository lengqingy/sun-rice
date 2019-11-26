<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 14:39:47
 * @LastEditTime: 2019-09-25 09:56:00
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="sun-radiolist" @change="$emit('change', currentValue)">
    <sun-cell v-for="(option, index) in options" :key="index">
      <label class="sun-radiolist-label" slot="title">
        <span :class="{'is-right': align === 'right'}" class="sun-radio">
          <input class="sun-radio-input" type="radio" v-model="currentValue" :disabled="option.disabled"
            :value="option.value || option">
          <span class="sun-radio-core"></span>
        </span>
        <span class="sun-radio-label" v-text="option.label || option"></span>
      </label>
    </sun-cell>
  </div>
</template>

<script>
import { SunCell } from '../../cell'
export default {
  name: 's-radio',

  components: {
    SunCell
  },
  props: {
    align: String,
    options: {
      type: Array,
      required: true
    },
    value: String
  },
  data() {
    return {
      currentValue: this.value
    }
  },
  watch: {
    value(val) {
      this.currentValue = val
    },
    currentValue(val) {
      this.$emit('input', val)
    }
  }
}
</script>
