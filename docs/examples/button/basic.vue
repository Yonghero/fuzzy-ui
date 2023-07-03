<script setup>
import { Edit, Upload } from '@element-plus/icons-vue'
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

      <FYButton type="primary">
        插槽图标
        <el-icon class="el-icon--right">
          <Upload />
        </el-icon>
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
