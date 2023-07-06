---
layout: doc
---
# Progress 进度条


## 基本使用

使用 `color` `size` `tooltipProps`  去定义进度条的的颜色、大小

`tooltip` 提示框里的内容可通过名为`tooltip-right`的插槽接受用户传递的自定义内容

通过`progress`属性将进度条的值传递给插槽内容
:::demo 
progress/basic
:::



## 双向进度条

开启 `bothway` 属性

`tooltip-right`的插槽 接收右侧进度条的弹出框内容

`tooltip-left`的插槽 接收左侧侧进度条的弹出框内容

`color` 右侧进度条颜色

`restColor` 左侧进度条颜色

`value` 右侧进度条的数值

左侧进度条的数组组件内部自动计算 `100 - value`

:::demo 
progress/bothway
:::



## Progress Attributes

| 属性名          | 描述          | 类型      | 默认值     |
|--------------|-------------|---------|---------|
| color | 进度条的颜色 | string | #409eff
| size | 尺寸 | string | default |
| tooltipProps | 提示框属性 （具体见下图）| Object |
| bothway | 双向进度条 | boolean | false |
| restColor | 开启双向进度条后的左侧进度条颜色 | string | #dcdcdc |
| showPercent | 是否展示百分比 | string | true |





## TooltipProps Attributes

| 属性名          | 描述          | 类型      |  可选值     |
|--------------|-------------|---------|----------|
| placement | 出现位置 | string | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end |
| trigger | 触发方式 | string | click/hover
| width | 宽度 | string | 默认值 90px

