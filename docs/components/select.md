---
layout: doc
---

# Select 选择框

选择框及常用功能。

## 基本使用

支持传入 `defaultIcon` 使用自带 icon 的选择框，可以直接写字符串 defaultIcon 或者 布尔值 true.

支持传入的 options 对象数组里带上 `icon` 字段，建议使用 jsx 的写法，直接将 icon 组件传入，例如：`(<el-icon><UserFilled /></el-icon>)`.

支持传入 default 插槽来生成自定义选择项内容

:::demo  
select/icon
:::

支持传入 `access` 并按照[{label: '', desc: ''}, {label: '', desc: ''}]的格式，套用给定的权限控制选择框模板.

支持传入 `virtual` 使用虚拟化列表的选择框.

支持传入 `tag` 使用标签化的选项.

支持模仿 pincode 的空数据选择框效果

支持传入 `multiple` 使用多选框，注意：目前默认是开启 `collapse-tags` 为 true，可以手动传入 false 覆盖
:::demo  
select/basic
:::

## Select API

### Select Attributes

该组件可传递的属性和类型与 element-plus 的 select 组件保持一致

> https://element-plus.org/zh-CN/component/select.html
