<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 14:39:47
 * @LastEditTime: 2019-09-25 10:07:56
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="sun-submit-bar">
    <div class="sun-submit-bar-tip" v-if="tip || $slots.tip">
      {{ tip }}
      <slot name="tip" />
    </div>
    <div class="sun-submit-bar-bar">
      <slot />
      <div class="sun-submit-bar-price">
        <template v-if="hasPrice">
          <span>{{ label }}</span>
          <span class="sun-submit-bar-price-decimal">{{ currency }}</span>
          <span class="sun-submit-bar-price-integer">{{ priceInterger }}.{{ priceDecimal }}</span>

        </template>
      </div>
      <sun-button :type="buttonType" :disabled="disabled" :loading="loading" @click="$emit('submit')">
        {{ loading ? '' : buttonText }}
      </sun-button>
    </div>
  </div>
</template>

<script>
import SunButton from '../../../base/button'

export default ({
  name: 's-submit-bar',

  components: { SunButton },

  props: {
    tip: {
      type: String,
      default: ''
    },
    type: Number,
    price: Number,
    label: {
      type: String,
      default: ''
    },
    loading: Boolean,
    disabled: Boolean,
    buttonText: {
      type: String,
      default: ''
    },
    currency: {
      type: String,
      default: '¥'
    },
    buttonType: {
      type: String,
      default: 'primary'
    }
  },

  computed: {
    hasPrice() {
      return typeof this.price === 'number'
    },
    priceInterger() {
      return Math.floor(this.price / 100)
    },
    priceDecimal() {
      const decimal = Math.floor(this.price % 100)
      return (decimal < 10 ? '0' : '') + decimal
    }
  }
})
</script>
