import Theme from 'vitepress/theme'
import ElementPlus from 'element-plus'
// import FuzzyUI from '@hitotek/fuzzy-ui-components'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import '@hitotek/fuzzy-ui-theme-chalk'
import './custom.scss'
import { VPDemo } from '../vitepress'


export default {
  ...Theme,
  enhanceApp(ctx) {
    Theme.enhanceApp(ctx)
    // 注册ElementPlus
    ctx.app.use(ElementPlus, {
      locale:zhCn, // 语言设置
    })
    
    ctx.app.mixin({
      async mounted(){
        // 注册FuzzyUI
        import('@hitotek/fuzzy-ui-components').then(module => {
          ctx.app.use(module.default)
        })
      }
    })
     // 注册所有图标
     for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      ctx.app.component(key, component)
    }
    ctx.app.component('Demo', VPDemo)
  },
}
