<script setup>
import { Edit } from '@element-plus/icons-vue'

// 该组件可传递的属性和类型与element-plus的按钮组件保持一致
// https://element-plus.org/zh-CN/component/button.html
</script>

<template>
  <div style="margin: 20px">
    <div class="mb-4">
      <FYButton
        type="primary"
        loading
      >
        Primary
      </FYButton>
      <FYButton
        type="success"
        loading
      >
        Success
      </FYButton>
      <FYButton
        type="info"
        loading
      >
        Info
      </FYButton>
      <FYButton
        type="warning"
        loading
      >
        Warning
      </FYButton>
      <FYButton
        type="danger"
        loading
      >
        Danger
      </FYButton>
    </div>

    <div class="mb-4">
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

    <div class="mb-4">
      <FYButton
        type="info"
        text
        link
      >
        无背景颜色文字
      </FYButton>
      <FYButton
        type="primary"
        text
        link
      >
        无背景颜色文字
      </FYButton>
      <FYButton
        type="warning"
        text
        link
      >
        无背景颜色文字
      </FYButton>
    </div>

    <div class="mb-4">
      <FYButton
        type="primary"
        :icon="Edit"
      >
        支持图标
      </FYButton>
      <FYButton
        type="primary"
        :icon="Edit"
        round
      >
        支持图标和圆角
      </FYButton>
    </div>
  </div>
</template>

<style>
.mb-4 {
  margin-bottom: 20px;
}
</style>
