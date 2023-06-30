<script setup>
import { YHButton } from '@hitotek/fuzzy-ui/components'

// 该组件可传递的属性和类型与element-plus的按钮组件保持一致
// https://element-plus.org/zh-CN/component/button.html
</script>

<template>
  <div style="margin: 20px">
    <div class="mb-4">
      <YHButton>Default</YHButton>
      <YHButton type="primary">
        Primary
      </YHButton>
      <YHButton type="success">
        Success
      </YHButton>
      <YHButton type="info">
        Info
      </YHButton>
      <YHButton type="warning">
        Warning
      </YHButton>
      <YHButton type="danger">
        Danger
      </YHButton>
    </div>

    <div class="mb-4">
      <YHButton plain>
        Plain
      </YHButton>
      <YHButton
        type="primary"
        plain
      >
        Primary
      </YHButton>
      <YHButton
        type="success"
        plain
      >
        Success
      </YHButton>
      <YHButton
        type="info"
        plain
      >
        Info
      </YHButton>
      <YHButton
        type="warning"
        plain
      >
        Warning
      </YHButton>
      <YHButton
        type="danger"
        plain
      >
        Danger
      </YHButton>
    </div>

    <div class="mb-4">
      <YHButton round>
        Round
      </YHButton>
      <YHButton
        type="primary"
        round
      >
        Primary
      </YHButton>
      <YHButton
        type="success"
        round
      >
        Success
      </YHButton>
      <YHButton
        type="info"
        round
      >
        Info
      </YHButton>
      <YHButton
        type="warning"
        round
      >
        Warning
      </YHButton>
      <YHButton
        type="danger"
        round
      >
        Danger
      </YHButton>
    </div>

    <div />
    <YHButton
      type="primary"
    >
      这是第一个完成的组件！！！
    </YHButton>
  </div>
</template>

<style>
.mb-4 {
  margin-bottom: 10px;
}
</style>
