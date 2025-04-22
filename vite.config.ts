import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import postcssPxToViewport from 'postcss-px-to-viewport-8-plugin'
const PxToViewport375 = postcssPxToViewport({
  unitToConvert: 'px', // 要转化的单位
  viewportWidth: 375, // UI设计稿的宽度
  unitPrecision: 6, // 转换后的精度，即小数点位数
  propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
  viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
  fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
  selectorBlackList: ['ignore-'], // 指定不转换为视窗单位的类名，
  minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
  mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
  replace: true, // 是否转换后直接更换属性值
  exclude: [/^(?!.*node_modules\/vant)/], // 设置忽略文件，用正则做目录名匹配
  landscape: false // 是否处理横屏情况
})
const PxToViewport750 = postcssPxToViewport({
  unitToConvert: 'px', // 要转化的单位
  viewportWidth: 750, // UI设计稿的宽度
  unitPrecision: 6, // 转换后的精度，即小数点位数
  propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
  viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
  fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
  selectorBlackList: ['ignore-'], // 指定不转换为视窗单位的类名，
  minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
  mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
  replace: true, // 是否转换后直接更换属性值
  exclude: [/node_modules\/vant/i], // 设置忽略文件，用正则做目录名匹配
  landscape: false // 是否处理横屏情况
})
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()]
    })
  ],
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true,
    proxy: {}
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  json: {
    stringify: false
  },
  css: {
    preprocessorOptions: {
      scss: { api: 'modern-compiler' }
    },
    postcss: {
      plugins: [PxToViewport750]
    }
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        dead_code: true,
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log']
      }
    }
  }
})
