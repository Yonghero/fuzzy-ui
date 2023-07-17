<script setup>
import {
  computed, onMounted, reactive, ref,
} from 'vue'
import { ElDialog } from 'element-plus'
import Form from './form.jsx'

defineOptions({
  name: 'FYDialog',
})

const emit = defineEmits(['update:modelValue', 'submit', 'fail', 'cancel'])
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
console.log(props.dialogConfig, 'dialogConfig')
const cascaderOptions = [
  {
    value: 'guide',
    label: 'Guide',
    children: [
      {
        value: 'disciplines',
        label: 'Disciplines',
        children: [
          {
            value: 'consistency',
            label: 'Consistency',
          },
          {
            value: 'feedback',
            label: 'Feedback',
          },
          {
            value: 'efficiency',
            label: 'Efficiency',
          },
          {
            value: 'controllability',
            label: 'Controllability',
          },
        ],
      },
      {
        value: 'navigation',
        label: 'Navigation',
        children: [
          {
            value: 'side nav',
            label: 'Side Navigation',
          },
          {
            value: 'top nav',
            label: 'Top Navigation',
          },
        ],
      },
    ],
  },
]
const formModel = reactive({
  name: '',
  region: '',
  type: '',
  date: '',
  date2: '',
  cascader: '',
  cascader2: '',
  switch: '',
  switch2: '',
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
  if (props.dialogConfig.template.length >= 5) {
    target.push('fy-dialog-default')
  } else {
    target.push('fy-dialog-small')
  }
  return target.join(' ')
})
const getTitle = computed(() => {
  if (props.dialogConfig.fullTitle) {
    return props.dialogConfig.fullTitle
  }
  if (props.dialogConfig.title) {
    let type
    switch (props.type) {
      case 'create':
        type = '新建'
        break
      case 'update':
        type = '修改'
        break
      case 'delete':
        type = '删除'
        break
      default:
        type = '新建'
        break
    }
    return `${type}${props.dialogConfig.title}`
  }
  return ''
})
// const initDialogBody = () => {
//   console.log(11)
//   const header = document.querySelector('.el-dialog__header')
//   const parent = document.querySelector('.el-dialog')
//   const { height: heightTotal } = parent.getBoundingClientRect()
//   const { height: height1 } = header.getBoundingClientRect()
//   const footer = document.querySelector('.el-dialog__footer')
//   const { height: height2 } = footer.getBoundingClientRect()
//   const body = document.querySelector('.el-dialog__body')
//   body.style.height = `calc(${heightTotal}px - ${height1}px - ${height2}px)`
// }

onMounted(() => {})

const options1 = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
]
const formRef = ref(null)
const submit = () => {
  console.log(1)
  console.log(formRef.value.validate, 'formRef')
  formRef.value?.validate()
  // formRef.value?.validateField('input')
}
const handleSubmit = (e) => {
  console.log('dialog接收到了form', props.formModel)
  emit('submit', props.formModel)
}
const handleSubmitFail = (e) => {
  emit('fail', { target: e, formModel: props.formModel })
}
const cancel = () => {
  formRef.value?.resetFields()
  emit('update:modelValue', false)
  emit('cancel', props.formModel)
}
const closedFn = () => {
  emit('update:modelValue', false)
  console.log(formRef.value, 'formRef.value')
  formRef.value?.resetFields()
}
</script>

<template>
  <div class="fy-dialog-wrap">
    <el-dialog
      v-bind="$attrs"
      :model-value="props.modelValue"
      :title="getTitle"
      :modal-class="getModalClass"
      @closed="closedFn"
    >
      <Form
        ref="formRef"
        v-model="props.formModel"
        :labelPosition="props.dialogConfig.labelPosition"
        :labelWidth="props.dialogConfig.labelWidth"
        :template="props.dialogConfig.template"
        status-icon
        @submit="handleSubmit"
        @fail="handleSubmitFail"
      />
      <template #header>
        <slot name="header" />
      </template>
      <template #footer>
        <slot name="footer">
          <FYButton
            type="primary"
            style="
              width: 112px;
              height: 42px;
              padding: 10px 32px;
              margin-left: 16px;
            "
            @click="submit"
          >
            确定
          </FYButton>
          <FYButton
            type="info"
            text
            link
            style="padding: 0;"
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
