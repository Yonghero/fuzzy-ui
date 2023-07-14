import * as builtInFormItems from './builtIn-formItem'

export const formItemMap = new Map()

export function installFormItem(item) {
  if (Array.isArray(item)) {
    for (const nape of item) {
      formItemMap.set(nape.type, nape.renderer)
    }
  } else {
    formItemMap.set(item.type, item.renderer)
  }
}

// 安装内置组件
installFormItem(Object.entries(builtInFormItems).map(([, value]) => value))
