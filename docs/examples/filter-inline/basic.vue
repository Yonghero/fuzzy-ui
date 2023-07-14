<script setup>
import { FYFilterInline } from '@hitotek/fuzzy-ui-components'
import { ref } from 'vue'
import tmpl from './template'

const loading = ref(false)

function submit(model) {
  loading.value = true
  console.log('🚀 ~ file: basic.vue:6 ~ submit ~ model:', model)
  setTimeout(() => {
    loading.value = false
  }, 1000)
}
</script>

<template>
  <div style="margin: 1rem">
    <FYFilterInline
      :loading="loading"
      :template="tmpl"
      @submit="submit"
    />
  </div>
</template>

<style>
.el-input {
  --el-input-width: 220px;
}
</style>
