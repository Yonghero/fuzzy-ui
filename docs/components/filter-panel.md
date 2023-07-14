---
layout: doc
---
# PingCode 同款查询面板

## 基本使用

核心是传递 `template` 配置项  [配置字段的类型参考](https://github.com/Yonghero/fuzzyjs/blob/monorepo/types/options.ts)

组件绑定 `v-mode:visible` 的值来控制面板是否展示

传递的 `默认插槽` 是触发面板显示的 HTML 元素

支持  `submit`、 `cancel`、 `reset` 等事件 具体参数参考 [FilterPanel Event](##Event) 

组件内部暂时封装全部逻辑和样式

:::demo
filter-panel/basic
:::


## 组件扩展



## Event

| 事件名            | 说明                | 回调参数             |
|------------------|--------------------|---------------------|
| submit           | 面板的确定按钮事件    | value 当面面板的筛选值 |
| reset            | 重置按钮事件         | undefined           |
| cancel           | 取消按钮事件         | undefined           |


