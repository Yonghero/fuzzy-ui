import * as builtInFormItems from './builtIn-formItem'

export const filterInlineItemMap = new Map()

export function installFilterInlineItem(item) {
  if (Array.isArray(item)) {
    for (const nape of item) {
      filterInlineItemMap.set(nape.type, nape.renderer)
    }
  } else {
    filterInlineItemMap.set(item.type, item.renderer)
  }
}

// 安装内置组件
installFilterInlineItem(Object.entries(builtInFormItems).map(([, value]) => value))
