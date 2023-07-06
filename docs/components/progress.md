---
layout: doc
---
# Progress 进度条


## 基本使用

使用 `color` `size` `tooltipProps`  去定义进度条的的颜色、大小

`tooltip` 提示框里的内容可通过名为`tooltip`的插槽接受用户传递的自定义内容

通过`progress`属性将进度条的值传递给插槽内容
:::demo 
progress/basic
:::



## Progress Attributes

| 属性名          | 描述          | 类型      |
|--------------|-------------|---------|
| color | 进度条的颜色 | string |
| size | 尺寸 | string |
| tooltipProps | 提示框属性 （具体见下图）| Object |

## TooltipProps Attributes

| 属性名          | 描述          | 类型      |  可选值     |
|--------------|-------------|---------|----------|
| placement | 出现位置 | string | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end |
| trigger | 触发方式 | string | click/hover
| width | 宽度 | string | 默认值 90px

