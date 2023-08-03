---
layout: doc
---

# MemberSelect

## 基本使用

核心是传递 `template` 配置项

template为数组每一项都代表一个Tab配置

Tab对应的选择组件目前内置两款组件 `select` | `treeSelect` 给定相应的`options`数据即可渲染出组件

**注意treeSelect类型组件的options** 如果是需要选择的项需要加上 `member: true` 代表是一个可选择的成员

监听 `checked` 事件 获取选中的数据 具体用法可复制以下代码 


:::demo
member-select/basic
:::

