<script setup>
import { ref } from 'vue'
import { FYUpload } from '@hitotek/fuzzy-ui-components'

const config = ref({
  // formItem, button, plain
  type: 'formItem',
})
const typeCheck = (e) => {
  console.log(e, '校验结果')
}
const fileChange = (file, files) => {
  console.log(file, files, 'files')
}
</script>

<template>
  <div style="margin: 1rem">
    <FYUpload
      :config="config"
      @type-check="typeCheck"
      @file-change="fileChange"
    />
  </div>
</template>
