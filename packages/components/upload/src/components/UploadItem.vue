<script setup>
import {
  ref, inject, watch,
} from 'vue'
import excel from '../assets/excel.png'
import file from '../assets/file.png'
import pdf from '../assets/pdf.png'
import pic from '../assets/pic.png'
import rar from '../assets/rar.png'
import word from '../assets/word.png'

defineOptions({
  name: 'UploadItem',
})
const currentFile = ref(null)
const currentFileName = ref('')
const noEvent = (e) => {
  e.stopPropagation()
}
const emit = defineEmits(['type-check', 'file-change'])
const config = inject('config')
const dialogVisible = inject('dialogVisible')
watch(dialogVisible, (newV) => {
  if (!newV.value) {
    myRef.value.clearFiles()
    currentFile.value = null
  }
})
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
</script>

<template>
  <el-upload
    ref="myRef"
    class="fy-upload-item"
    :drag="config.drag"
    :multiple="config.multiple"
    :auto-upload="false"
    :on-change="onChange"
    :show-file-list="false"
  >
    <div>
      <span
        v-if="!currentFile"
        class="upload-icon"
      >
        <svg
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          fit=""
          height="1em"
          width="1em"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
        ><g
          id="agufile/cloud-upload-fill"
          stroke-width="1"
          fill-rule="evenodd"
        ><path
          id="agu路径"
          d="M10.422 2.133C7.42 1.332 5.975 4.789 5.946 4.888c-.03.098-.177.054-.177.054-.24-.249-1.297-.82-2.408-.088-1.11.732-.709 2.122-.709 2.122S.52 6.961.086 9.712c-.435 2.75 2.19 3.466 2.19 3.466H7.24V10.22H6.092v-.005c-.057 0-.102-.05-.102-.114 0-.037.017-.07.045-.091L8.07 7.67a.149.149 0 0 1 .115-.058.15.15 0 0 1 .12.065l2.018 2.32.03.033c.004.018.01.04.01.061 0 .07-.052.128-.116.128-.003 0-.003-.003-.005-.003v.005H9.147v2.96h4.505s2.148-.59 2.338-3.015c.192-2.426-2.456-3.205-2.456-3.205s-.112-4.028-3.112-4.828z"
        /></g></svg>
      </span>

      <div class="el-upload__text">
        <span
          v-if="!currentFile"
          class="upload-tip"
        >
          点击此处
          <el-link
            type="primary"
            class="upload-linktext"
          >上传文件</el-link>
        </span>
        <img
          v-else-if="currentFile === 'excel'"
          class="upload-type-icon"
          :src="excel"
          alt=""
        >
        <img
          v-else-if="currentFile === 'pdf'"
          class="upload-type-icon"
          :src="pdf"
          alt=""
        >
        <img
          v-else-if="currentFile === 'doc'"
          class="upload-type-icon"
          :src="word"
          alt=""
        >
        <img
          v-else-if="currentFile === 'zip'"
          class="upload-type-icon"
          :src="rar"
          alt=""
        >
        <img
          v-else-if="currentFile === 'jpg'"
          class="upload-type-icon"
          :src="pic"
          alt=""
        >
        <img
          v-else-if="currentFile === 'file'"
          class="upload-type-icon"
          :src="file"
          alt=""
        >
      </div>
    </div>

    <template
      v-if="currentFile"
      #trigger
    >
      <span
        class="upload-file-info"
        @click="noEvent"
      >{{ currentFileName }}</span>
      <el-link
        type="primary"
        class="upload-rebtn upload-linktext"
      >
        重新上传
      </el-link>
    </template>
  </el-upload>
</template>

<style scoped lang="scss">
</style>
