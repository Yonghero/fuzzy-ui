<script setup>
import { ref } from 'vue'

const typeCheck = (e) => {
  console.log(e, '校验结果')
}
const fileChange = (file, files) => {
  console.log(file, files, 'files')
}
const config2 = {
  export: true,
  url: 'https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-assets/extension/0.3.9/package.crx~tplv-t2oaga2asx-image.image',
  name: 'test',
}
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
</script>

<template>
  <div class="wrap">
    <p>上传对话框</p>
    <FYUpload
      :config="config"
      @type-check="typeCheck"
      @file-change="fileChange"
    />
    <p>上传对话框</p>
    <FYUpload
      :config="config2"
    />
  </div>
</template>
<style scoped lang="scss">
</style>
