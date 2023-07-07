---
layout: doc
---

# switch 状态切换栏

状态切换栏及常用功能。

## 基本使用

支持传入 `activeMessage` 和 `inActiveMessage` 改变状态切换时的消息提示.

支持传入 `changeFailMessage` 改变状态切换失败时的消息提示.

支持传入类型为 function 或者 async function 的 `cb` 来插入状态改变前的事件逻辑，根据事件执行的成功与否，会决定最终消息提示的类型

:::demo  
switch/basic
:::

## Switch API

### Switch Attributes

该组件可传递的属性和类型与 element-plus 的 switch 组件保持一致

> https://element-plus.org/zh-CN/component/switch.html
