<template>
  <sun-picker
    ref="picker"
    class="sun-address-picker"
    show-toolbar
    value-key="name"
    :title="title"
    :loading="loading"
    :columns="displayColumns"
    :item-height="itemHeight"
    :visible-item-count="visibleItemCount"
    @change="onChange"
    @confirm="$emit('confirm', $event)"
    @cancel="$emit('cancel', $event)"
  />
</template>

<script>
import { SunPicker } from '../../../base/picker'
import AreaListDefault from './area'

export default({
  name: 's-address-picker',

  components: { SunPicker },

  props: {
    value: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    loading: Boolean,
    areaList: {
      type: Object,
      default: () => AreaListDefault
    },
    itemHeight: Number,
    visibleItemCount: Number,
    columnsNum: {
      type: [String, Number],
      default: 3
    }
  },

  data () {
    return {
      code: this.value,
      columns: [{ values: [] }, { values: [] }, { values: [] }]
    }
  },

  computed: {
    province () {
      return this.areaList.province_list || {}
    },

    city () {
      return this.areaList.city_list || {}
    },

    county () {
      return this.areaList.county_list || {}
    },

    displayColumns () {
      return this.columns.slice(0, +this.columnsNum)
    }
  },

  watch: {
    value () {
      this.code = this.value
    },

    code () {
      this.setValues()
    },

    areaList: {
      deep: true,
      immediate: true,
      handler () {
        this.$nextTick(this.setValues)
      }
    }
  },

  methods: {
    // get list by code
    getList (type, code) {
      let result = []
      if (type !== 'province' && !code) {
        return result
      }

      const list = this[type]
      result = Object.keys(list).map(code => ({
        code,
        name: list[code]
      }))

      if (code) {
        result = result.filter(item => item.code.indexOf(code) === 0)
      }

      return result
    },

    // get index by code
    getIndex (type, code) {
      const compareNum = type === 'province' ? 2 : type === 'city' ? 4 : 6
      const list = this.getList(type, code.slice(0, compareNum - 2))
      code = code.slice(0, compareNum)

      for (let i = 0; i < list.length; i++) {
        if (list[i].code.slice(0, compareNum) === code) {
          return i
        }
      }

      return 0
    },

    onChange (picker, values, index) {
      this.code = values[index].code
      this.$nextTick(() => {
        this.$emit('change', picker, values, index)
      })
    },

    setValues () {
      let code = this.code || Object.keys(this.county)[0] || ''
      const { picker } = this.$refs
      const province = this.getList('province')
      const city = this.getList('city', code.slice(0, 2))

      if (!picker) {
        return
      }

      picker.setColumnValues(0, province)
      picker.setColumnValues(1, city)

      if (city.length && code.slice(2, 4) === '00') {
        code = city[0].code
      }

      picker.setColumnValues(2, this.getList('county', code.slice(0, 4)))
      this.$nextTick(() => {
        picker.setIndexes([
          this.getIndex('province', code),
          this.getIndex('city', code),
          this.getIndex('county', code)
        ])
      })
    },

    getValues () {
      return this.$refs.picker ? this.$refs.picker.getValues() : []
    }
  }
})
</script>
