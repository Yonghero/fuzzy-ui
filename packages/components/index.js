import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import * as YHComponents from './export-components'

export * from './export-components'
export default {
  ...YHComponents,
  install: (app) => { // 全局组件注册
    // 依赖于Element Plus 提前安装
    app.use(ElementPlus, {
      locale: zhCn,
    })
    Object.keys(YHComponents).forEach((name) => {
      app.use(YHComponents[name])
    })
  },

}
