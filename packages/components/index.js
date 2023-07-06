import * as YHComponents from './export-components'

export * from './export-components'

export default {
  ...YHComponents,
  install: (app) => { // 全局组件注册
    Object.keys(YHComponents).forEach((name) => {
      app.use(YHComponents[name])
    })
  },
}
