import * as builtInFormItems from './builtIn-formItem'

export const filterPanelItemMap = new Map()

export function installFilterPanelItem(item) {
  if (Array.isArray(item)) {
    for (const nape of item) {
      filterPanelItemMap.set(nape.type, nape.renderer)
    }
  } else {
    filterPanelItemMap.set(item.type, item.renderer)
  }
}

// 安装内置组件
installFilterPanelItem(Object.entries(builtInFormItems).map(([, value]) => value))
