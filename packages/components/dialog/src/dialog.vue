<script setup>
import {
  computed, ref, watch, watchEffect,
} from 'vue'
import { ElDialog } from 'element-plus'
import Form from './DialogForm.jsx'
import DeletePanel from './DialogDeletePanel.jsx'

defineOptions({
  name: 'FYDialog',
})
const emit = defineEmits(['update:modelValue', 'submit', 'fail', 'cancel', 'confirm', 'type-check'])
const props = defineProps({
  // 控制表单显示与否
  modelValue: {
    type: Boolean,
    default: false,
  },
  // 绑定的表单对象
  formModel: {
    type: Object,
    default: () => ({}),
  },
  dialogConfig: {
    type: Object,
    default: () => ({
      // 配合表单类型的title
      title: '',
      // 完全按照传进来的title显示
      fullTitle: '',
      // 控制对话框的class
      modalClass: '',
      // 控制点击空白处关闭对话框与否
      closeOnClickModal: false,
      // 控制表单域标签的位置
      labelPosition: 'top',
      // 表单项列表
      template: [],
      // 控制对话框样式
      dialogType: '',
      // 对话框业务类型
      type: 'create',
      // 表单域标签的宽度
      labelWidth: '',
    }),
  },

})

const model = ref({})

watchEffect(() => {
  model.value = props.formModel
})

// 适时清理校验结果
watch(() => props.modelValue, (newV) => {
  formRef.value?.clearValidate()
  if (!newV) {
    // 每次关闭将绑定对象还原初始状态
    formRef.value?.resetFields()
  }
})

const getModalClass = computed(() => {
  const target = []
  // 为未来对话框扩展样式
  if (props.dialogConfig.dialogType === 'super') {
    target.push('fy-dialog-super')
  }
  // 上同
  if (props.dialogConfig.dialogType === 'max') {
    target.push('fy-dialog-max')
  }
  if (props.dialogConfig.modalClass) {
    target.push(props.modalClass)
  }
  // 统一为表单条目大于5条时，使用双列对话框，否则使用单列对话框
  if (props.dialogConfig.template?.length >= 5) {
    target.push('fy-dialog-default')
  } else if (props.dialogConfig.template) {
    target.push('fy-dialog-small')
  } else if (props.dialogConfig.type === 'delete') {
    target.push('fy-dialog-delete-type')
  }
  return target.join(' ')
})
const getTitle = computed(() => {
  // 完全按照传进来的title显示
  if (props.dialogConfig.fullTitle) {
    return props.dialogConfig.fullTitle
  }
  if (props.dialogConfig.title) {
    let type
    switch (props.dialogConfig.type) {
      case 'create':
        type = '新建'
        break
      case 'update':
        type = '修改'
        break
      case 'delete':
        type = ''
        break
      default:
        type = '新建'
        break
    }
    return `${type}${props.dialogConfig.title}`
  }
  return ''
})

const formRef = ref(null)
const submit = () => {
  if (props.dialogConfig.type !== 'delete') {
    formRef.value?.validate()
  } else {
    emit('confirm')
  }
}
const handleSubmit = () => {
  emit('submit', { ...model.value })
}

// form组件校验失败时的回调
const handleSubmitFail = (e) => {
  emit('fail', { target: e, formModel: props.formModel })
}
const cancel = () => {
  formRef.value?.resetFields()
  emit('update:modelValue', false)
  if (props.dialogConfig.type !== 'delete') {
    emit('cancel', props.formModel)
  } else {
    emit('cancel')
  }
}
const closedFn = () => {
  emit('update:modelValue', false)
}
const getComfirmButtonType = computed(() => {
  if (['create', 'update'].includes(props.dialogConfig.type) || !props.dialogConfig.type) {
    return 'primary'
  } if (['delete'].includes(props.dialogConfig.type)) {
    return 'danger'
  }
  return ''
})
// 文件上传类型校验结果
const typeCheck = (e) => {
  emit('type-check', e)
}
// 上传文件改变的回调
const fileChange = (file, files) => {
  emit('file-change', file, files)
}
</script>

<template>
  <div class="fy-dialog-wrap">
    <el-dialog
      v-bind="$attrs"
      :model-value="props.modelValue"
      :title="getTitle"
      :modal-class="getModalClass"
      :close-on-click-modal="props.dialogConfig.closeOnClickModal || false"
      destroy-on-close
      @closed="closedFn"
    >
      <!-- eslint-disable -->
      <Form
        v-if="props.dialogConfig.type === 'create' || props.dialogConfig.type === 'update' || !props.dialogConfig.type"
        ref="formRef"
        v-model="model"
        :labelPosition="props.dialogConfig.labelPosition"
        :labelWidth="props.dialogConfig.labelWidth"
        :template="props.dialogConfig.template"
        :businessType="props.dialogConfig.type"
        @submit="handleSubmit"
        @fail="handleSubmitFail"
        @type-check="typeCheck"
        @file-change="fileChange"
      />
      <DeletePanel
        v-else-if="props.dialogConfig.type === 'delete'"
        :dialogConfig="props.dialogConfig"
      />
      <DetailForm
        v-else-if="props.dialogConfig.type === 'detail'"
        ref="formDetailRef"

      >

      </DetailForm>
      <template #header>
        <slot name="header" />
      </template>
      <template #footer>
        <slot name="footer" >
          <FYButton
            :type="getComfirmButtonType"
            style="
              display: flex;
              padding: 10px 32px;
              width: 22px;
              height: 16px;
              margin-left: 16px;
              box-sizing: content-box;
              color: #FFF;
              font-family: 'PingFang SC';
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              line-height: 22px; 
            "
            @click="submit"
          >
            确定
          </FYButton>
          <FYButton
            type="info"
            text
            link
            style="
              padding: 0;
              color: #AAA;
              font-family: 'PingFang SC';
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              line-height: 22px;
            "
            @click="cancel"
          >
            取消
          </FYButton>
        </slot>
      </template>
    </el-dialog>
  </div>
</template>
<style lang="scss">
@use '../../../theme-chalk/src/dialog/dialog.scss';
</style>
