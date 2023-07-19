---
layout: doc
---

# ActionPanel

## 基本使用

核心是传递 `template` 配置项 [配置字段的类型参考](https://github.com/Yonghero/fuzzyjs/blob/monorepo/types/options.ts)

配置属性 `icon` 为一个渲染函数 会将配置的图标显示在面板项的左侧 默认无配置无图标展示

配置属性 `disabled` 为一个bool 来决定面板项是否为禁用状态

配置属性 `sideRender` 为一个渲染函数 则会将该渲染函数插入面板项的右侧

配置属性 `onClick` 为一个函数 该函数会作为点击面板项的回调函数

组件绑定 `v-mode:visible` 的值来控制面板是否展示

组件绑定 `placement` 的值来决定面板展开后的位置 可取的范围值与element-plus的popover组件一致

组件绑定 `trigger` 的值来决定开发面板的方式 默认为 click 可取的范围值与element-plus的popover组件一致


传递的 `默认插槽` 是触发面板显示的 HTML 元素

:::demo
action-panel/basic
:::

## 面板叠加


点击以下面板 会展面板项的多种状态 具体表现快去点点看看吧 🥳

```js
// 关键导入辅助函数
import { mergeTemplate } from '@hitotek/fuzzy-ui'

const tmpl1 = [{ label: 'x',...}] // 第一个面板的配置
const tmpl2 = [{ label: 'xx',...}] // 第二个面板的配置

// ... tmpl3 tmpl4 ... 可无限配第n个 🤔

// 使用合并后的配置作为该组件的template属性
const tmpl = mergeTemplate(tmpl1. tmpl2) //  mergeTemplate(tmpl1, tmpl2, tmpl3,....)

```

:::demo
action-panel/overlay
:::