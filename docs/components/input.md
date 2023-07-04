---
layout: doc
---

# Input 输入框

输入框及常用功能。

## 基本使用

:::demo 传入数组字段 `filterList` 去定义输入框的筛选选项
input/filter-list
:::

支持圆角 `round`.

支持前后图标 `suffix-icon`和`prefix-icon` 字段可以传 element 自带的 icon 使用插槽 prefix 和 suffix 可以传图片作为图标.

支持文字限制 `limit` 传数字直接开启字数限制和最长字数控制.

支持长文本 `textarea` 可以传形式为[3,6]的数组，表示最小三行最大六行的长文本输入框，也可以直接传 textarea 表示使用长文本，按照默认的行数限制.

支持点击时伸缩 `flex` 传布尔值 true 或直接传 flex 表示开启伸长特效，注意，目前暂不支持 type 为 textarea 的输入框的伸长.

:::demo  
input/basic
:::

## Input API

### Input Attributes

该组件可传递的属性和类型与 element-plus 的 input 组件保持一致

> https://element-plus.org/zh-CN/component/input.html
