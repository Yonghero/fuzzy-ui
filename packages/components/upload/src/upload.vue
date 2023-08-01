<script setup lang="jsx">
import { provide } from 'vue'

import ButtonUpload from './components/ButtonUpload.vue'
import UploadItem from './components/UploadItem.vue'
import PlainButtonUpload from './components/PlainButtonUpload.vue'
import ExportButton from './components/ExportButton.vue'

defineOptions({
  name: 'FYUpload',
})

const props = defineProps({
  config: {
    type: Object,
    default: () => ({
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
    }),
  },
})
provide('config', props.config)
const emit = defineEmits(['type-check'])
const typeCheck = (e) => {
  emit('type-check', e)
}
const fileChange = (file, files) => {
  console.log(file, files)
}

</script>

<template>
  <div class="fy-upload-wrap">
    <!-- 表单项上传 -->
    <UploadItem
      v-if="props.config.type === 'formItem'"
      @type-check="typeCheck"
      @fileChange="fileChange"
    />

    <!-- 按钮对话框上传或者直接按钮上传 -->
    <ButtonUpload
      v-if="props.config.type === 'button'"
      @type-check="typeCheck"
      @fileChange="fileChange"
    />

    <!-- 另一种样式的按钮上传 -->
    <PlainButtonUpload
      v-if="props.config.type === 'plain'"
      @type-check="typeCheck"
      @fileChange="fileChange"
    />

    <!-- 导出 -->
    <ExportButton v-if="props.config.export === true" />
  </div>
</template>
<style lang="scss" scoped>
@use '../../../theme-chalk/src/upload/upload-item.scss';
</style>
