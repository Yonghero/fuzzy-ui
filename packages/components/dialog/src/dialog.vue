<script setup>
import {
  computed, onMounted, reactive, ref,
} from 'vue'
import { ElDialog } from 'element-plus'
import Form from './form.vue'

defineOptions({
  name: 'FYDialog',
})

const emit = defineEmits(['update:modelValue'])
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
      title: {
        type: String,
        default: '',
      },
      fullTitle: {
        type: String,
        default: '',
      },
      modalClass: {
        type: String,
        default: '',
      },

      closeOnClickModal: {
        type: Boolean,
        default: false,
      },
      labelPosition: {
        type: String,
        default: 'top',
      },
      formModelItems: {
        type: Array,
        default: () => [
        ],
      },
      dialogType: {
        type: String,
        default: '',
      },
      type: {
        type: String,
        default: 'create',
      },
      labelWidth: {
        type: [String, Number],
        default: '',
      },
    }),
  },

})
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
  if (props.dialogConfig.formModelItems.length >= 5) {
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

// init here
</script>

<template>
  <div class="fy-dialog-wrap">
    <!-- <el-dialog
      :model-value="props.modelValue"
      :title="getTitle"
      :modal-class="getModalClass"
      :close-on-click-modal="props.closeOnClickModal"
    >
      <el-form
        :label-position="props.labelPosition"
        :model="formModel"
      >
        <el-form-item
          label="Name"
          :style="{ flex: '0 0 98%' }"
        >
          <FYInput
            v-model="formModel.name"
            placeholder="输入迭代名称"
            limit="255"
          />
        </el-form-item>
        <el-form-item
          label="Activity zone"
          :style="{ flex: '0 0 49%', paddingRight: '15px' }"
        >
          <FYSelect
            v-model="formModel.region"
            :options="options1"
          />
        </el-form-item>
        <el-form-item
          label="Activity form"
          :style="{ flex: '0 0 49%' }"
        >
          <FYSelect
            v-model="formModel.type"
            :options="options1"
          />
        </el-form-item>
        <el-form-item
          label="Activity zone"
          :style="{ flex: '0 0 49%', paddingRight: '15px' }"
        >
          <FYDatePicker v-model="formModel.date" />
        </el-form-item>
        <el-form-item
          label="Activity form"
          :style="{ flex: '0 0 49%' }"
        >
          <FYDatePicker
            v-model="formModel.date2"
            :options="options1"
          />
        </el-form-item>
        <el-form-item
          label="Activity zone"
          :style="{ flex: '0 0 49%', paddingRight: '15px' }"
        >
          <FYCascader
            v-model="formModel.cascader"
            :options="cascaderOptions"
            :default-icon="true"
          />
        </el-form-item>
        <el-form-item
          label="Activity form"
          :style="{ flex: '0 0 49%' }"
        >
          <FYCascader
            v-model="formModel.cascader2"
            :options="cascaderOptions"
            :default-icon="true"
          />
        </el-form-item>
        <el-form-item
          label="Activity zone"
          :style="{ flex: '0 0 24.5%', paddingRight: '15px' }"
        >
          <FYSwitch v-model="formModel.switch" />
        </el-form-item>
        <el-form-item
          label="Activity form"
          :style="{ flex: '0 0 24.5%' }"
        >
          <FYSwitch v-model="formModel.switch2" />
        </el-form-item>
        <el-form-item
          label="Activity form"
          :style="{ flex: '0 0 49%' }"
        >
          <FYInput
            v-model="formModel.switch2"
            textarea
          />
        </el-form-item>
        <el-form-item
          label="Activity form"
          :style="{ flex: '0 0 24.5%' }"
        >
          <FYSwitch v-model="formModel.switch2" />
        </el-form-item>
        <el-form-item
          label="Activity form"
          :style="{ flex: '0 0 24.5%' }"
        >
          <FYSwitch v-model="formModel.switch2" />
        </el-form-item>
        <el-form-item
          label="Activity form"
          :style="{ flex: '0 0 49%' }"
        >
          <FYInput
            v-model="formModel.switch2"
            textarea
          />
        </el-form-item>
      </el-form>
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
          >
            确定
          </FYButton>
          <FYButton
            type="info"
            text
            link
            style="padding: 0;"
          >
            取消
          </FYButton>
        </slot>
      </template>
    </el-dialog> -->
    <el-dialog
      :model-value="props.modelValue"
      :title="getTitle"
      :modal-class="getModalClass"
      :close-on-click-modal="props.closeOnClickModal"
    >
      <!-- <el-form
        :label-position="props.labelPosition"
        :model="formModel"
      >
        <el-form-item
          label="Name"
          :style="{ flex: '0 0 98%' }"
        >
          <FYInput
            v-model="formModel.name"
            placeholder="输入迭代名称"
            limit="255"
          />
        </el-form-item>
        <el-form-item
          label="Activity zone"
          :style="{ flex: '0 0 98%'}"
        >
          <FYSelect
            v-model="formModel.region"
            :options="options1"
          />
        </el-form-item>
        <el-form-item
          label="Activity form"
          :style="{ flex: '0 0 98%' }"
        >
          <FYSwitch v-model="formModel.switch2" />
        </el-form-item>
        <el-form-item
          label="Activity form"
          :style="{ flex: '0 0 98%' }"
        >
          <FYInput
            v-model="formModel.switch2"
            textarea
          />
        </el-form-item>
      </el-form> -->
      <Form
        v-model="props.formModel"
        :labelPosition="props.dialogConfig.labelPosition"
        :labelWidth="props.dialogConfig.labelWidth"
        :formModelItems="props.dialogConfig.formModelItems"
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
          >
            确定
          </FYButton>
          <FYButton
            type="info"
            text
            link
            style="padding: 0;"
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
