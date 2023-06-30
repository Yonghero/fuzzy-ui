import Theme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import FuzzyUI from '@hitotek/fuzzy-ui/components'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import '@hitotek/fuzzy-ui/style'
import './custom.scss'

import { VPDemo } from '../vitepress'


export default {
  ...Theme,
  enhanceApp(ctx) {
    Theme.enhanceApp(ctx)
    // 注册ElementPlus
    ctx.app.use(ElementPlus, {
      locale, // 语言设置
    })
    // 注册FuzzyUI
    ctx.app.use(FuzzyUI)
     // 注册所有图标
     for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      ctx.app.component(key, component)
    }
    ctx.app.component('Demo', VPDemo)
  },
}