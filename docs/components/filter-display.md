---
layout: doc
---

# FilterDisplay

## 基本使用

核心是传递 `template` 配置项 [配置字段的类型参考](https://github.com/Yonghero/fuzzyjs/blob/monorepo/types/options.ts)

配置项内配置 `onChange` 事件为关键

当选择值修改后组件内部主动触发该事件回调函数返回的值即为绑定值

你可以在该事件内完成你想要的任何操作

:::demo
filter-display/basic
:::


## 组件扩展

现已内置 `type` 为 `input` 、`select`  类型的组件 [内置组件合集](https://github.com/Yonghero/fuzzy-ui/blob/main/packages/components/filter-display/src/composable/builtIn-formItem.jsx)

有两种方式扩展组件

`方式一 `❕❕ 导入工具函数 `installFilterDisplayItem` 传入配置对象

`方式二 `❕❕ template配置项增加 `render` 函数, 返回你想要的自定义组件

具体代码如下 ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ 

:::demo
filter-display/renderer
:::
