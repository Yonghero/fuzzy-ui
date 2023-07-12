import { createApp } from 'vue'
import FuzzyUI from '@hitotek/fuzzy-ui-components'
import './tailwind.css'
import './style.scss'
import '@hitotek/fuzzy-ui-theme-chalk'
import { ClickOutside } from '@hitotek/fuzzy-ui-utils'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

import App from './App.vue'

const app = createApp(App)
app.directive('click-outside', ClickOutside)
app.use(ElementPlus, {
  locale: zhCn,
})

app.use(FuzzyUI).mount('#app')
