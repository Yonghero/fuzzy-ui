<script setup>
import { FYFilterInline } from '@hitotek/fuzzy-ui-components'
import { ref } from 'vue'

const loading = ref(false)

const tmpl = [
  {
    label: '负责人',
    type: 'input',
    value: '',
    defaultValue: 1,
  },
  {
    label: '创建人',
    type: 'select',
    value: 'createperson',
    defaultValue: 2,
    options: [{ label: '李校长', value: 1 }, { label: '王美丽', value: 2 }],
  },
  {
    label: '开始时间',
    type: 'datePicker',
    value: 'startTime',
  },
]

function submit(model) {
  loading.value = true
  console.log('🚀 ~ file: basic.vue:6 ~ submit ~ model:', model)
  setTimeout(() => {
    loading.value = false
  }, 1000)
}
</script>

<template>
  <div
    style="margin: 1rem"
    class="demo"
  >
    <FYFilterInline
      :loading="loading"
      :template="tmpl"
      @submit="submit"
    />
  </div>
</template>

<style>
.demo .el-input {
  --el-input-width: 220px;
}
</style>
