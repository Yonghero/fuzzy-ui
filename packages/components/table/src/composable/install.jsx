import * as builtInFormItems from './builtIn-formItem'

export const tableEditItem = new Map()

export function installTableEditItem(item) {
  if (Array.isArray(item)) {
    for (const nape of item) {
      tableEditItem.set(nape.type, nape.renderer)
    }
  } else {
    tableEditItem.set(item.type, item.renderer)
  }
}

// 安装内置组件
installTableEditItem(Object.entries(builtInFormItems).map(([, value]) => value))
