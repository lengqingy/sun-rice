<!--
 * @Author: your name
 * @Date: 2019-09-09 16:38:56
 * @LastEditTime: 2019-11-14 14:01:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /sun-rice-new/documents/toast.md
 -->
## Toast 轻提示

### 使用指南

```javascript
import SunToast from 'sun-rice';
```

### 代码演示

#### 文字提示

```javascript
SunToast('提示信息')
```

#### 不同位置提示

```javascript
SunToast({
  message: '提示信息',
  position: 'bottom'
})
SunToast({
  message: '提示信息',
  position: 'top'
})
```


#### 不同类别提示

```javascript
SunToast({
  message: '操作成功',
  iconType: 'success'
})
SunToast({
  message: '操作警告',
  iconType: 'warning'
})
SunToast({
  message: '操作失败',
  iconType: 'error'
})
```

#### 高级用法 -- 倒计时
```html
<button @click="openCustomizedToast" >倒计时 Toast</button>
```

```javascript
openCustomizedToast() {
      let second = 5
      const toast = SunToast({
        duration: second * 1000,
        message: `倒计时 ${second} 秒`,
        iconType: 'loading'
      })

      const timer = setInterval(() => {
        second--
        if (second) {
          toast.message = `倒计时 ${second} 秒`
        } else {
          clearInterval(timer)
        }
      }, 1000)
    }
```

### Options

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| type | 提示类型，可选值为 `success` `warning` `error` | `String` | - |
| position | 位置，可选值为 `top` `middle` `bottom` | `String` | `middle` |
| message | 内容 | `String` | - |
| duration | 存在时间 | `Number` | `2000` |
| iconType | 图标类型，可选值为`success` `warning` `error` `loading` | `String` | `` |
