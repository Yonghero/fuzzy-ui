---
layout: doc
---
# DatePicker 日期选择器

用于选择或输入日期

## 选择某一天
以”日“为基本单位，基础的日期选择控件

基本单位由 `type` 属性指定。 通过 `shortcuts` 配置快捷选项。

:::demo 
date-picker/basic
:::

## 禁用指定日期的使用
传递 `disableMoreThan` 或者 `disableLessThan`  去选择是否禁用指定日期

如不满足需求 可直接传递 `disabled-date` 该参数接受一个 Date 对象作为参数 应该返回一个 Boolean 值
:::demo
date-picker/disabled
:::



## Attributes
| 属性名              | 描述            | 类型      |
|------------------|---------------|---------|
| disableLessThan  | 是否禁用小于当前时间的选择 | boolean |
| disableMoreThan  | 是否禁用大于当前时间的选择 | boolean |

该组件可传递的属性和类型与element-plus的date-picker组件保持一致 
> https://element-plus.org/zh-CN/component/date-picker.html
