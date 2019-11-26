<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-29 14:13:11
 * @LastEditTime: 2019-09-29 14:13:11
 * @LastEditors: your name
 -->
## 自定义主题

### 在项目中改变 SCSS 变量

sun-rice 的主题使用 SCSS 编写，如果你的项目也使用了 SCSS，那么可以直接在项目中改变 sun-rice 的样式变量。新建一个样式文件，例如 sun-rice-variables.scss，写入以下内容：

```scss
/* 改变主题色变量 */
/* color variables */
$black: #000;
$white: #fff;
$red: #f44;
$blue: #2c88ff;
$blue-light: #8fbdfa;
$orange: #f60;
$green: #06bf04;
$gray: #c9c9c9;
$gray-light: #e5e5e5;
$gray-darker: #666;
$gray-dark: #999;

/* default colors */
$text-color: #080808;
$border-color: #eee;
$active-color: #e8e8e8;
$background-color: #f8f8f8;
$placeholder-color: #ccc;

/* button */
$button-default-color: #484848;
$button-primary-background-light-color: #e2edfd;
$button-primary-border-light-color: #e2edfd;

/* loading */
$loading-default-light-color: #69a0e0;

/* 引入 sun-rice 基础样式 */
@import '~sun-rice/theme/components/index.scss';
```

之后，在项目的入口文件中，直接引入以上样式文件即可（无需引入 sun-rice 编译好的 CSS 文件）：

```js
import Vue from 'vue'
import SunRice from 'sun-rice'
import './sun-rice-variables.scss'

Vue.use(SunRice)
```
