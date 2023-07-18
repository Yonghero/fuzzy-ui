---
layout: doc
---

# dialog 对话框

常见对话框及其功能

## 基本使用

### 新增和编辑

核心分为三个 prop, 分别是`v-model`绑定的控制 dialog 显示与否的布尔值。
`dialogConfig`对象内，控制对话框的`title`标题，`template`表单项，其中数组每一项请按照表单项的类型来相对应的传入原子组件的 props，`rules`指定该项的校验规则,每一项表单宽度默认是占满的， `half`指定为 true 表示宽度占一半，`oneOfFour`表示宽度占四分之一。 `type`控制对话框的类型。
`formModel`双向绑定表单实际值。

### 删除

核心为`dialogConfig`参数，其中 type 需要指定为`delete`, `businessType`指定删除的对象类型，`tagText`指定删除的字段名字，`customDesc`为自定义的删除描述

## 配置项<=4 时的对话框

:::demo
dialog/mini
:::

## 配置项>4 时的对话框

:::demo
dialog/default
:::

## 有滚动条

:::demo
dialog/longList
:::

## 编辑对话框

:::demo
dialog/edit
:::

## 删除对话框

:::demo
dialog/delete
:::

## Dialog Attributes

该组件可传递的属性和类型与 element-plus 的 dialog 组件保持一致

> https://element-plus.org/zh-CN/component/dialog.html
