---
layout: doc
---

# FilePreview

## 基本使用

给组件传递`src`文件路径 根据文件扩展名自动解析选择展示组件

也可参数指定文件类型 传递`type`字段 可选excel、word、pdf

支持文件后缀
- .docx
- .xlsx
- .pdf

`v-model:visible` 绑定值为弹窗显示的Boolean值

传递 `title` 为弹窗标题 也可传递header的具名插槽

传递一个默认插槽 点击插槽内组件自动打开文件预览

可传递`width` `height` 决定预览区域的宽高


:::tip
不支持 .doc 后缀的word文件
:::

:::demo
file-preview/basic
:::

