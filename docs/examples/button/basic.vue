<script setup>
import { FYButton } from '@hitotek/fuzzy-ui/components'

// 该组件可传递的属性和类型与element-plus的按钮组件保持一致
// https://element-plus.org/zh-CN/component/button.html
</script>

<template>
  <div style="margin: 20px">
    <div class="mb-4">
      <FYButton>Default</FYButton>
      <FYButton type="primary">
        Primary
      </FYButton>
      <FYButton type="success">
        Success
      </FYButton>
      <FYButton type="info">
        Info
      </FYButton>
      <FYButton type="warning">
        Warning
      </FYButton>
      <FYButton type="danger">
        Danger
      </FYButton>
    </div>

    <div class="mb-4">
      <FYButton plain>
        Plain
      </FYButton>
      <FYButton
        type="primary"
        plain
      >
        Primary
      </FYButton>
      <FYButton
        type="success"
        plain
      >
        Success
      </FYButton>
      <FYButton
        type="info"
        plain
      >
        Info
      </FYButton>
      <FYButton
        type="warning"
        plain
      >
        Warning
      </FYButton>
      <FYButton
        type="danger"
        plain
      >
        Danger
      </FYButton>
    </div>

    <div class="mb-4">
      <FYButton round>
        Round
      </FYButton>
      <FYButton
        type="primary"
        round
      >
        Primary
      </FYButton>
      <FYButton
        type="success"
        round
      >
        Success
      </FYButton>
      <FYButton
        type="info"
        round
      >
        Info
      </FYButton>
      <FYButton
        type="warning"
        round
      >
        Warning
      </FYButton>
      <FYButton
        type="danger"
        round
      >
        Danger
      </FYButton>
    </div>

    <div />
    <FYButton
      type="primary"
    >
      这是第一个完成的组件！！！
    </FYButton>
  </div>
</template>

<style>
.mb-4 {
  margin-bottom: 10px;
}
</style>
