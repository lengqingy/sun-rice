/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 14:39:47
 * @LastEditTime: 2019-09-09 16:29:42
 * @LastEditors: Please set LastEditors
 */
// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // "postcss-import": {},
    // "postcss-url": {},
    // "postcss-salad": {},
    // "postcss-mixins": {},
    // to edit target browsers: use "browserslist" field in package.json
    // "autoprefixer": {}, // 由于cssnext和cssnano都具有autoprefixer,事实上只需要一个，所以把默认的autoprefixer删除掉，然后把cssnano中的autoprefixer设置为false。著作权归作者所有。
    // "postcss-aspect-ratio-mini": {},
    // "postcss-write-svg": { utf8: false },
    // "postcss-cssnext": {
    //   warnForDuplicates: false,
    // },
    "postcss-px-to-viewport": { // 主要用来把px单位转换为vw、vh、vmin或者vmax这样的视窗单位，也是vw适配方案的核心插件之一
      viewportWidth: 375, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
      viewportHeight: 667, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
      unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
      viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
      selectorBlackList: ['.ignore', '.hairlines'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
      minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
      mediaQuery: false // 允许在媒体查询中转换`px`
    },
    // "postcss-viewport-units": {},
    // "cssnano": {
    //   "cssnano-preset-advanced": {
    //     zindex: false,
    //     // autoprefixer: false
    //   },
    //   // preset: "advanced", // 需要安装 cssnano-preset-advanced
    //   // autoprefixer: false,
    //   // "postcss-zindex": false
    // }
  }
}