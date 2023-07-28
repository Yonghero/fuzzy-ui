<script setup lang="jsx">
import { ref, inject, provide } from 'vue'
import { Edit } from '@element-plus/icons-vue'

defineOptions({
  name: 'ButtonUpload',
})
const emit = defineEmits(['type-check', 'file-change'])

const config = inject('config')
const buttonVisible = ref(false)
const tmpl = [
  {
    label: '从文件导入',
    icon: (<el-icon><Edit /></el-icon>),
    onClick: (e) => {
      openDialog()
    },
  },
]

const visible = ref(false)
const dialogVisible = ref(false)
const openDialog = () => {
  if (config.buttonConfig.type === 'dialog') {
    visible.value = true
  } else {
    directUpload()
  }
}
const handleSubmit = () => {

}
const handleFail = () => {

}
const handleCancel = () => {
}
provide('dialogVisible', visible)
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
const fileChange = (file, files) => {
  console.log(file, files)
}

</script>

<template>
  <template v-if="config.buttonConfig.type === 'dialog'">
    <FYActionPanel
      v-model:visible="buttonVisible"
      :template="tmpl"
    >
      <FYButton
        type="primary"
        class="upload-btn"
      >
        <span>
          <svg
            width="22"
            height="18"
            viewBox="0 0 22 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="&#229;&#175;&#188;&#229;&#133;&#165; 1">
              <path
                id="Vector"
                d="M20.7127 10.3808C20.7127 11.2224 20.5619 12.0378 20.2878 12.7874C19.2874 9.98626 16.6288 7.98737 13.4768 7.98737V9.18409C13.4768 9.64435 13.2164 10.052 12.8053 10.2624C12.6409 10.3413 12.449 10.3939 12.2709 10.3939C12.0105 10.3939 11.7638 10.315 11.5445 10.1572L6.72063 6.55394C6.41911 6.33038 6.24097 5.9753 6.24097 5.59395C6.24097 5.21259 6.41913 4.85751 6.72063 4.63393L11.5445 1.0175C11.7501 0.8597 12.0105 0.780792 12.2709 0.780792C12.449 0.780792 12.6409 0.820238 12.8053 0.912294C13.2164 1.10956 13.4768 1.53038 13.4768 1.99066V3.18738C17.4648 3.17421 20.7127 6.40927 20.7127 10.3808Z"
                fill="white"
              />
              <path
                id="Vector_2"
                d="M17.992 10.2107C17.5124 10.2107 17.115 10.5921 17.115 11.0523V12.0649C17.115 13.8403 17.0464 15.2606 13.6067 15.2606H6.59007C3.04067 15.2606 3.08179 13.7482 3.08179 11.894V7.68576C2.8351 5.04246 4.13701 4.46384 5.713 4.34547H5.76781C6.24747 4.34547 6.64488 3.96412 6.64488 3.50383C6.64488 3.04357 6.24747 2.64904 5.76781 2.64904H5.713V2.63589H4.83593C2.90363 2.63589 1.32764 4.14823 1.32764 6.00246V13.5773C1.32764 15.4315 2.90363 16.9438 4.83591 16.9438H15.3471C17.2794 16.9438 18.8554 15.4315 18.8554 13.5773V11.0523C18.8691 10.592 18.4717 10.2107 17.992 10.2107Z"
                fill="white"
              />
            </g>
          </svg>
        </span>
        导入
      </FYButton>
    </FYActionPanel>
    <FYDialog
      v-model="visible"
      :dialogConfig="config.buttonConfig.dialogConfig"
      :formModel="config.buttonConfig.formModel"
      @submit="handleSubmit"
      @fail="handleFail"
      @cancel="handleCancel"
      @file-change="fileChange"
    />
  </template>
  <template v-else>
    <FYActionPanel
      v-model:visible="buttonVisible"
      :template="tmpl"
    >
      <FYButton
        type="primary"
        class="upload-btn"
      >
        <span>
          <svg
            width="22"
            height="18"
            viewBox="0 0 22 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="&#229;&#175;&#188;&#229;&#133;&#165; 1">
              <path
                id="Vector"
                d="M20.7127 10.3808C20.7127 11.2224 20.5619 12.0378 20.2878 12.7874C19.2874 9.98626 16.6288 7.98737 13.4768 7.98737V9.18409C13.4768 9.64435 13.2164 10.052 12.8053 10.2624C12.6409 10.3413 12.449 10.3939 12.2709 10.3939C12.0105 10.3939 11.7638 10.315 11.5445 10.1572L6.72063 6.55394C6.41911 6.33038 6.24097 5.9753 6.24097 5.59395C6.24097 5.21259 6.41913 4.85751 6.72063 4.63393L11.5445 1.0175C11.7501 0.8597 12.0105 0.780792 12.2709 0.780792C12.449 0.780792 12.6409 0.820238 12.8053 0.912294C13.2164 1.10956 13.4768 1.53038 13.4768 1.99066V3.18738C17.4648 3.17421 20.7127 6.40927 20.7127 10.3808Z"
                fill="white"
              />
              <path
                id="Vector_2"
                d="M17.992 10.2107C17.5124 10.2107 17.115 10.5921 17.115 11.0523V12.0649C17.115 13.8403 17.0464 15.2606 13.6067 15.2606H6.59007C3.04067 15.2606 3.08179 13.7482 3.08179 11.894V7.68576C2.8351 5.04246 4.13701 4.46384 5.713 4.34547H5.76781C6.24747 4.34547 6.64488 3.96412 6.64488 3.50383C6.64488 3.04357 6.24747 2.64904 5.76781 2.64904H5.713V2.63589H4.83593C2.90363 2.63589 1.32764 4.14823 1.32764 6.00246V13.5773C1.32764 15.4315 2.90363 16.9438 4.83591 16.9438H15.3471C17.2794 16.9438 18.8554 15.4315 18.8554 13.5773V11.0523C18.8691 10.592 18.4717 10.2107 17.992 10.2107Z"
                fill="white"
              />
            </g>
          </svg>
        </span>
        导入
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
</template>

<style scoped></style>
