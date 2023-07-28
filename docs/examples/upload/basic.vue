<script setup>
import { ref } from 'vue'
import { FYUpload } from '@hitotek/fuzzy-ui-components'

const config = ref({
  // formItem, button, plain
  type: 'button',
  buttonConfig: {
    // direct dialog
    type: 'dialog',
    dialogConfig: {
      title: '导入规则',
      template: [
        {
          type: 'input',
          label: '规则名称',
          value: 'name',
          placeholder: '输入规则名称',
          limit: 32,
          require: true,
        },
        {
          type: 'upload',
          label: '文件',
          value: 'file',
        },
      ],
    },
    formModel: {
      name: '',
      file: null,
    },
  },
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
