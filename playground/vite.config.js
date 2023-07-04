import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ElementPlus from 'unplugin-element-plus/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), ElementPlus()],
  resolve: {
    alias: {
      utils: `${path.resolve(__dirname, '../packages/utils')}/`,
    },
  },
})
