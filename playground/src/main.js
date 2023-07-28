import { createApp } from 'vue'
import FuzzyUI from '@hitotek/fuzzy-ui-components'
import './tailwind.css'
import './style.scss'
import '@hitotek/fuzzy-ui-theme-chalk'
import { ClickOutside, Focus } from '@hitotek/fuzzy-ui-utils'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import App from './App.vue'

const app = createApp(App)
app.directive('click-outside', ClickOutside)
app.directive('focus', Focus)
app.use(ElementPlus, {
  locale: zhCn,
})

app.use(FuzzyUI).mount('#app')
