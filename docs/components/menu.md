---
layout: doc
---

# Menu & Tab

> 可以当系统菜单栏也可以当Tab栏

## 基本使用


核心是传递 `template` 配置项 [配置字段的类型参考](https://github.com/Yonghero/fuzzyjs/blob/monorepo/types/options.ts)

提供菜单激活回调 `select` 事件 返回值为选中菜单的 `value`

提供菜单项点击回调 `itemClick` 事件 返回值为`tmplItem`  tips: 在真实项目中该事件使用频率更高

`icon` 属性 提供一个图标 可以是svg也可以是任何html

实现一下 `render` 渲染器 你可以根据业务渲染出任何MenuItem的样式

一键开启路由模式 ✈️ ✈️ ✈️ ✈️ ✈️ ✈️

传递 `router` 属性 即可

提供的 `value` 属性值为 `route_path`

具体请看代码！！！！！！！！！！

:::demo
menu/basic
:::

