import * as builtInFormItems from './builtIn-formItem'

export const filterDisplayItemMap = new Map()

export function installFilterDisplayItem(item) {
  if (Array.isArray(item)) {
    for (const nape of item) {
      filterDisplayItemMap.set(nape.type, nape.renderer)
    }
  } else {
    filterDisplayItemMap.set(item.type, item.renderer)
  }
}

// 安装内置组件
installFilterDisplayItem(Object.entries(builtInFormItems).map(([, value]) => value))
