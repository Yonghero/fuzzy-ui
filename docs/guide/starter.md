---
layout: doc
---

# 快速开始

本节将介绍如何在项目中使用 Fuzzy UI

## 用法

### 完整引入

完整导入会更方便

```javascript

import { createApp } from 'vue'
import FuzzyUI from '@hitotek/fuzzy-ui'
import '@hitotek/fuzzy-ui/style' // UI 样式
import App from './App.vue'

const app = createApp(App)

app.use(FuzzyUI)
app.mount('#app')

```

### 手动导入

```vue

<script setup>
import { FYButton } from '@hitotek/fuzzy-ui'

</script>

<template>
  <FYButton>
    我是 FYButton
  </FYButton>
</template>

```