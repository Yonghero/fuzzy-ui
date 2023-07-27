<script setup>
import {
  computed, ref, watch,
} from 'vue'
import { ElDialog } from 'element-plus'
import Form from './Form.jsx'
import DeletePanel from './DeletePanel.jsx'

defineOptions({
  name: 'FYDialog',
})

const emit = defineEmits(['update:modelValue', 'submit', 'fail', 'cancel', 'confirm', 'type-check'])
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  formModel: {
    type: Object,
    default: () => ({}),
  },
  dialogConfig: {
    type: Object,
    default: () => ({
      title: '',
      fullTitle: '',
      modalClass: '',
      closeOnClickModal: false,
      labelPosition: 'top',
      template: [],
      dialogType: '',
      type: 'create',
      labelWidth: '',
    }),
  },

})
watch(() => props.modelValue, (newV, oldV) => {
  formRef.value?.clearValidate()
  if (!newV) {
    formRef.value?.resetFields()
  }
})
const getModalClass = computed(() => {
  const target = []
  if (props.dialogConfig.dialogType === 'super') {
    target.push('fy-dialog-super')
  }
  if (props.dialogConfig.dialogType === 'max') {
    target.push('fy-dialog-max')
  }
  if (props.dialogConfig.modalClass) {
    target.push(props.modalClass)
  }
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
  emit('submit', props.formModel)
}
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
const typeCheck = (e) => {
  emit('type-check', e)
}
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
      @closed="closedFn"
    >
      <!-- eslint-disable -->
      <Form
        v-if="props.dialogConfig.type === 'create' || props.dialogConfig.type === 'update' || !props.dialogConfig.type"
        ref="formRef"
        v-model="props.formModel"
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
        <slot name="footer">
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
<style lang="scss" scoped>
@use '../../../theme-chalk/src/dialog/dialog.scss';
</style>
