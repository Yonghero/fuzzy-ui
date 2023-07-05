---
layout: doc
---
# Cascader 级联选择器

当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择

## 基本使用

:::demo
cascader/basic
:::

## 带图标的

:::demo 默认展示传入文本的第一个字作为图标
cascader/icon
:::


## 可清空

:::demo 通过设置```clearable```设置输入框清空
cascader/clearable
:::

## 自定义节点内容

:::demo 你可以通过 scoped slot 自定义节点的内容 您可以访问 scope 中的 node 和 data 属性 分别表示当前节点的 Node 对象和当前节点的数据
cascader/slot
:::

## 多选

:::demo 在标签中添加 :props="props" 并设置 props = { multiple: true } 来开启多选模式。
cascader/multiple
:::

## Cascader API

### Cascader Attributes
| 属性名          | 描述          | 类型      |
|--------------|-------------|---------|
| default-icon | 是否展示默认样式的图标 | boolean |

### Cascader Item
| 属性名   | 描述       | 类型                          |
|-------|----------|-----------------------------|
| label | 展示项属性名   | boolean                     |
| value | 展示项属性值   | boolean                     |
| icon  | 展示项自定义图标 | VueComponent 、 JsxComponent |




该组件更多可传递的属性和类型与element-plus的cascader组件保持一致 
> https://element-plus.org/zh-CN/component/cascader.html
