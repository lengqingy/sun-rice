<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 14:39:47
 * @LastEditTime: 2019-09-02 14:56:11
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="group">
    <div class="block">
      <div class="text">不同类别</div>
      <div class="items">
        <s-button class="item" @click="showImagePreview1" size="large">预览单个图片</s-button>
        <s-button class="item" @click="showImagePreview2" size="large">预览多个图片</s-button>
        <s-button class="item" @click="showImagePreview2(1)" size="large">指定初始位置</s-button>
        <s-button class="item" @click="showImagePreview2(0, 1000)" size="large">自动关闭</s-button>
      </div>
    </div>
  </div>
</template>

<script>
import SunImagePreview from '@/components/base/image-preview'

export default {
  name: 'sun-image-preview-demo',

  methods: {
    showImagePreview1(position, timer) {
      const instance = SunImagePreview([
        'https://img.yzcdn.cn/upload_files/2017/03/15/FkubrzN7AgGwLlTeb1E89-T_ZjBg.png'
      ], typeof position === 'number' ? position : 0)

      if (timer) {
        setTimeout(() => {
          instance.close()
        }, timer)
      }
    },
    showImagePreview2(position, timer) {
      const instance = SunImagePreview([
        'https://img.yzcdn.cn/upload_files/2017/03/15/FkubrzN7AgGwLlTeb1E89-T_ZjBg.png',
        'https://img.yzcdn.cn/upload_files/2017/03/14/FmTPs0SeyQaAOSK1rRe1sL8RcwSY.jpeg',
        'https://img.yzcdn.cn/upload_files/2017/03/15/FvexrWlG_WxtCE9Omo5l27n_mAG_.jpeg'
      ], typeof position === 'number' ? position : 0)

      if (timer) {
        setTimeout(() => {
          instance.close()
        }, timer)
      }
    }
  }
}
</script>

<style scoped lang="scss" >

.group {
  display: flex;
  flex-direction: column;
  margin: 10px;

  .block {
    padding-bottom: 20px;

    .text {
      margin: 10px;
    }

    .items {
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-start;
      .item {
        margin-bottom: 5px;
      }
    }
  }
}
</style>
