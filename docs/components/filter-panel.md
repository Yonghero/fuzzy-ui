---
layout: doc
---
# PingCode 同款查询面板

## 基本使用

核心是传递 `template` 配置项 [配置字段的类型参考](https://github.com/Yonghero/fuzzyjs/blob/monorepo/types/options.ts)

组件绑定 `v-mode:visible` 的值来控制面板是否展示

传递的 `默认插槽` 是触发面板显示的 HTML 元素

支持  `submit`、 `cancel`、 `reset` 等事件 具体参数参考 [FilterPanel Event](##Event) 

组件内部暂时封装全部逻辑和样式

:::demo
filter-panel/basic
:::


## 组件扩展

现已内置 `type` 为 `select` 、 `datePicker` 类型的组件 [内置组件合集](https://github.com/Yonghero/fuzzy-ui/blob/main/packages/components/filter-panel/src/composable/builtIn-formItem.jsx)

有两种方式扩展组件

`方式一 `❕❕ 导入工具函数 `installFilterPanelItem` 传入配置对象

`方式二 `❕❕ template配置项增加 `render` 函数, 返回你想要的自定义组件

具体代码如下 ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ 

:::demo
filter-panel/renderer
:::



## Event

| 事件名            | 说明                | 回调参数             |
|------------------|--------------------|---------------------|
| submit           | 面板的确定按钮事件    | value 当面面板的筛选值 |
| reset            | 重置按钮事件         | undefined           |
| cancel           | 取消按钮事件         | undefined           |


