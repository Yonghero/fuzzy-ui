---
layout: doc
---

# Upload

导入导出

## 基本使用

所有类型的 upload 组件都需要传入 Object 类型的`config`，其中导入按钮需要指定`type`,分别为`formItem`、`button`、`plain`，formItem 将会只显示选取文件那一栏， button 分为两种模式，在`buttonConfig`中字段`type`通过`direct`和`dialog`分为对话框和直接选取文件， plain 为另一种样式的直接选取文件的按钮，在对话框模式下请保证传入表示表单项的`template`和表单对象的`formModel`

### 通过对话框导入

可以使用数组`allow`来规定允许上传的文件类型，分别是 pdf、doc、jpg、excel、zip 和其他所有类型 file
其中使用事件`typeCheck`和`fileChange`来分别接收上传文件是否符合类型限制，以及目前上传文件对象本身

:::demo
upload/basic
:::

### 按钮直接导入

:::demo
upload/button-direct
:::

### 只显示上传栏

:::demo
upload/upload-item
:::

### 另一种样式的按钮上传

:::demo
upload/upload-button
:::

### 导出

请在`config`中保证传入`url`和`fileName`

:::demo
upload/export-button
:::
