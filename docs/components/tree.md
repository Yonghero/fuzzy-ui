---
layout: doc
---

# Tree

树组织及常用功能

## 基本使用

### 普通查看树级结构

请传入 Object 类型的树状结构的配置信息`config`，其中核心字段是`dataSource`,请保持和 el-tree 组件参数`data`一致的类型，请保证数组每一项内有`id`和`label`， 可使用插槽名 `custom-icon` 来替换自定义 icon，也支持在 `dataSource` 里每项传入 `render函数`进行自定义内容的渲染
:::demo
tree/basic
:::

### 可拖拽

在`config`中传入`draggable`为 true 开启可拖拽，目前支持的拖拽规则有：1.在`dataSource`中的每项使用`allowDrag`规定是否可以拖拽 2.每项使用`notLevelOne`为 true 表示该项不能放到最外层 3.`levelOne`表示该项必须放在最外层 4.`forbid`数组表示该项不能被拖拽进符合 id 的项内

:::demo
tree/drag
:::

### 直接在树上操作的新增编辑删除

在`config`中传入`editable`为 true 表示可以新增编辑删除树

:::demo
tree/not-form
:::

### 在表单中操作的新增编辑删除

在`config`中传入`editable`为 true 表示可以新增编辑删除树
传入`ifDialog`为 true 表示操作在表单中进行，同时还需要传入类 form 组件表单项的数组`dialogTmpl`与树每项对应起来

:::demo
tree/form
:::
