<script setup>
import { Edit } from '@element-plus/icons-vue'
</script>

<template>
  <FYButton
    type="primary"
    loading
  >
    loading
  </FYButton>
  <FYButton
    type="primary"
    :icon="Edit"
    round
  >
    支持图标和圆角
  </FYButton>
  <FYButton
    type="info"
    text
    link
  >
    无颜色背景
  </FYButton>
</template>
