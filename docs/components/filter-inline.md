---
layout: doc
---
# Filter Inline 内联查询面板

## 基本使用

核心是传递 `template` 配置项 [配置字段的类型参考](https://github.com/Yonghero/fuzzyjs/blob/monorepo/types/options.ts)


点击按钮来传递数据，并向用户反馈加载状态

通过设置 `loading` 属性为 `true` 来显示按钮中加载中状态。

按钮绑定 `submit` 事件 做为事件回调 返回值为表单的表单数据对象

:::demo
filter-inline/basic
:::
