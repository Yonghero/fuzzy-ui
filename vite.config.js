// import * as path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    // alias: {
    //   '@/': `${path.resolve(__dirname, './packages')}/`,
    // },
  },

  // build: {
  //   lib: {
  //     entry: path.resolve(__dirname, './packages/components/index.js'),
  //     name: 'fuzzy-ui',
  //     fileName: (format) => `fuzzy-ui.${format}.js`,
  //   },
  //   outDir: path.resolve(__dirname, './lib/dist'),
  //   // emptyOutDir: false,
  //   rollupOptions: {
  //     // 确保外部化处理那些你不想打包进库的依赖
  //     external: ['vue', 'element-plus', 'elementPlus'],
  //     output: {
  //       // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
  //       globals: {
  //         vue: 'Vue',
  //         'element-plus': 'ElementPlus',
  //       },
  //     },
  //   },
  // },
})
