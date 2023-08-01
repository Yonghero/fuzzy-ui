<script setup lang="jsx">
import { ref, inject } from 'vue'
import { Paperclip } from '@element-plus/icons-vue'

defineOptions({
  name: 'ButtonUpload',
})
const emit = defineEmits(['type-check', 'file-change'])

const config = inject('config')
const buttonVisible = ref(false)
const tmpl = [
  {
    label: '本地文件',
    icon: (<el-icon><Paperclip /></el-icon>),
    onClick: () => {
      openDialog()
    },
  },
]

const openDialog = () => {
  directUpload()
}
const currentFile = ref(null)
const currentFileName = ref('')
const onChange = (file, files) => {
  const typeList = file.name.split('.')
  const type = typeList[typeList.length - 1]
  currentFileName.value = file.name
  if (['pdf'].includes(type)) {
    currentFile.value = 'pdf'
  } else if (['doc', 'docx'].includes(type)) {
    currentFile.value = 'doc'
  } else if (['jpg', 'jpeg', 'gif', 'png'].includes(type)) {
    currentFile.value = 'jpg'
  } else if (['xlsx', 'xls', 'csv'].includes(type)) {
    currentFile.value = 'excel'
  } else if (['rar', 'zip'].includes(type)) {
    currentFile.value = 'zip'
  } else {
    currentFile.value = 'file'
  }
  // 限制文件类型
  if (config.allow && config.allow.length) {
    if (config.allow.includes(type)) {
      emit('type-check', true)
    } else {
      emit('type-check', false)
    }
  }
  emit('file-change', file, files)
}
const myRef = ref(null)
const directUpload = () => {
  myRef.value.click()
}
</script>

<template>
  <FYActionPanel
    v-model:visible="buttonVisible"
    :template="tmpl"
  >
    <FYButton
      plain
      :icon="Paperclip"
    >
      附件
    </FYButton>
  </FYActionPanel>
  <el-upload
    class="fy-upload-button"
    :drag="config.drag"
    :multiple="config.multiple"
    :auto-upload="false"
    :on-change="onChange"
    :show-file-list="false"
  >
    <button
      ref="myRef"
      style="visibility: hidden"
    >
      隐藏按钮
    </button>
  </el-upload>
</template>

<style scoped></style>
