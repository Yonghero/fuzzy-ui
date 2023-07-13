import * as builtInFormItems from './builtIn-formItem'

export const formItemMap = new Map()

export function installFilterPanelItem(item) {
  if (Array.isArray(item)) {
    for (const nape of item) {
      formItemMap.set(nape.type, nape.renderer)
    }
  } else {
    formItemMap.set(item.type, item.renderer)
  }
}

// 安装内置组件
installFilterPanelItem(Object.entries(builtInFormItems).map(([, value]) => value))
