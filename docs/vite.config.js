import { defineConfig } from 'vite'
// import ElementPlus from 'unplugin-element-plus/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vueJsx()],
  server: {
    host: '10.4.99.100',
    port: 5174,
  },
})
