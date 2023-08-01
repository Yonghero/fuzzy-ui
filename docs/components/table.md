---
layout: doc
---

# Table 表格

## 已知问题

> 当前部署的静态站点默认添加了 `table` 组件相关的样式 会导致以下的例子的样式上出现一些问题！！
> 推荐直接在项目中进行调试使用。
> 该组件目前都为纯前端实现 无法做到持久化 如需持久化需要与后端配合


## 基本使用

核心是传递 `template` 配置项 [配置字段的类型参考](https://github.com/Yonghero/fuzzyjs/blob/monorepo/types/options.ts)

组件属性 `columnIndex` 默认为 `true` 代表是否开启序号

组件属性 `columnSelection` 默认为 `false` 代表是否开启多选

现在将你的鼠标移至表格第一列
你会发现Amazing的事情～ `多选和序号功能二合一`
不仅如此 请你再选中一个checkbox
现在表头发生了巨大变化 你所看到的表头是给组件传递的`renderer`渲染器属性中实现的
`header` 组件实例 具体实现请看代码😎
例子中实现的`header`组件只是一个示范 具体需要哪些额外的功能根据业务具体实现


ok 将鼠标移动至第二列 hover一下 你会看到出现了一只笔
按下去！
现在该字段已经进入了可编辑模式
配置`template`里对应字段的 `type` 属性设置为 `input`
记得顺带加上`onChange`属性函数 这将会是你编辑后能获取编辑值的地方 你可以在这个函数中
向后端发送修改请求 等等等...

按照正常逻辑 现在应该将鼠标移至第三列 这是一个自定义渲染的示例
实现一下 `render` 渲染器 你可以根据业务渲染出任何样式 具体实现请看代码

看最后一列！！ 默认情况下，如果单元格内容过长 会占用多行显示 若需要单行显示可以使用 `show-overflow-tooltip` 属性 它接受一个 Boolean 为 true 时多余的内容会在 hover 时以 tooltip 的形式显示出来

:::demo
table/basic
:::



## 扩展功能

### 小数位数

如果表格数据为数字类型并且需要做位数限制 

只需配置type类型为 `limit{number}`
保留 number 位 

**例: { type: 'limit3' }、{ type: 'limit4' } ...**

### 图片预览

配置type类型为 `imagePreview`

表格数据需要为图片的地址 如果传递为数组 则可预览多张图片 表格默认展示第一张

内嵌 `el-image` 组件 如果部分属性需要自定义传递 可给配置项传递该组件的属性 内部会实现覆盖

### 时间展示规则

配置type类型为 `timeDisplay{format}`

`format` 为精度值 **Minute | second | Day** 具体到分、秒、日

**例: { type: 'timeDisplayMinute' }、{ type: 'timeDisplayDay' } ...**

今天内，显示为“今天XX：XX”

今年内非今天，显示为“XX月XX日XX：XX”

非今年内，显示为“XXXX年XX月XX日XX：XX”

:::demo
table/update
:::



## 固定列和排序

想要哪个字段为固定列给它配置`fixed`属性为`true`

如果还要排序功能那请再配置`sortable`属性为`true`

如果你想借用其他自定义组件来给表格排序 那也很简单！

table组件实例会暴露`sort`方法 第一个参数填上你要排序的字段

第二个参数是排序的方式升序和降序

具体实现请看以下代码🤩

`ascending 表示升序`

`descending 表示降序`

`null 表示还原为原始顺序`

:::demo
table/FixedSort
:::



## 表格配置

压轴出场介绍的往往都是重量级的 👏 👏 👏

将目光和鼠标聚集到组件的右上角的设置图案上

点击

出现一个对话框

你可以在这里控制表格内的每列数据是否展示

按照什么顺序展示

左侧面板为全部列的展示 逻辑操作一试便懂

右侧面板为表格内正展示的列 这是可拖拽的 试试看 调整一下列的顺序！

配置`visible`属性 赋予默认值

组件监听 `headerSelection` 事件 收到的参数值为排序后的 `template`

> 要做到持久化 需要与后端进行配置 目前纯前端实现

:::demo
table/TableSetting
:::