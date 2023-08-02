<script setup>
import { FYForm } from '@hitotek/fuzzy-ui-components'
import {
  ref, onMounted,
} from 'vue'

const props = {
  // 表单项的数据来源
  template: {
    type: Array,
    default: () => [],
  },
  // 表单域标签位置
  labelPosition: {
    type: String,
    default: 'top',
  },
  // 表单域标签宽度
  labelWidth: {
    type: String,
    default: 'auto',
  },
  // el-form绑定的对象
  modelValue: {
    type: Object,
    default: () => ({}),
  },
  // 是否启用校验
  shouldValidate: {
    type: Boolean,
    default: true,
  },
  // 分为write类型（即新增和编辑），以及read（详情）
  businessType: {
    type: String,
    default: 'write',
  },
  // form组件和formItem组件的配置
  config: {
    type: Boolean,
    default: false,
  },
}
const template = ref([
  {
    type: 'input',
    label: '姓名',
    value: 'input',
    placeholder: '请输入搜索文字',
    limit: 10,
    require: true,
    rules: [{
      min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur',
    }],
    desc: '123',
  },
  {
    type: 'select',
    label: '地点',
    value: 'select',
    placeholder: '请输入搜索文字',
    options: [
      {
        value: 'value1',
        label: '杭州',
      },
      {
        value: 'value2',
        label: '上海',
      },
    ],
    half: true,
    desc: '123',
  },
  {
    type: 'datePicker',
    label: '生日',
    value: 'datePicker',
    half: true,
    desc: '123',
  },
  {
    type: 'cascader',
    label: '组织',
    value: 'cascader',
    options: [
      {
        value: 'guide',
        label: '财务部',
        children: [
          {
            value: 'disciplines',
            label: '财务一组',
            children: [
              {
                value: 'consistency',
                label: '会计组',
              },
              {
                value: 'feedback',
                label: '出纳组',
              },
            ],
          },
          {
            value: 'navigation',
            label: '开发组',
            children: [
              {
                value: 'side nav',
                label: '前端组',
              },
              {
                value: 'top nav',
                label: '后端组',
              },
            ],
          },
        ],
      },
    ],
    half: true,
    desc: '123',

  },
  {
    type: 'cascader',
    label: '祖籍',
    value: 'cascader2',
    options: [
      {
        value: 'guide',
        label: '中国',
        children: [
          {
            value: 'disciplines',
            label: '浙江',
            children: [
              {
                value: 'consistency',
                label: '杭州',
              },
              {
                value: 'feedback',
                label: '温州',
              },
            ],
          },
          {
            value: 'navigation',
            label: '安徽',
            children: [
              {
                value: 'side nav',
                label: '蚌埠',
              },
              {
                value: 'top nav',
                label: '兖州',
              },
            ],
          },
        ],
      },
    ],
    half: true,
  },
  {
    type: 'select',
    label: '性别',
    value: 'select2',
    placeholder: '请输入搜索文字',
    options: [
      {
        value: 'value1',
        label: '男',
      },
      {
        value: 'value2',
        label: '女',
      },
    ],
    half: true,
  },
  {
    type: 'select',
    label: '爱好',
    value: 'select3',
    placeholder: '请输入搜索文字',
    options: [
      {
        value: 'value1',
        label: '打游戏',
      },
      {
        value: 'value2',
        label: '吃饭',
      },
    ],
    half: true,
  },
  {
    type: 'switch',
    label: '应聘与否',
    value: 'switch',
    cb: () => {
    },
    oneOfFour: true,
  },
  {
    type: 'switch',
    label: '接受加班',
    value: 'switch2',
    cb: () => {
    },
    oneOfFour: true,
  },
  {
    type: 'input',
    label: '个人介绍',
    value: 'input2',
    placeholder: '请输入搜索文字',
    textarea: true,
    half: true,
  },
])
const template2 = ref([
  {
    type: 'input',
    label: '姓名',
    value: 'input',
    placeholder: '请输入搜索文字',
    limit: 10,
    require: true,
    rules: [{
      min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur',
    }],
    desc: '123',
  },
  {
    type: 'select',
    label: '性别',
    value: 'select',
    placeholder: '请输入搜索文字',
    options: [
      {
        value: 'value1',
        label: '男',
      },
      {
        value: 'value2',
        label: '女',
      },
    ],
    half: true,
    desc: '123',
  },
  {
    type: 'datePicker',
    label: '生日',
    value: 'datePicker',
    half: true,
    desc: '123',
  },
  {
    type: 'cascader',
    label: '祖籍',
    value: 'cascader',
    options: [
      {
        value: 'guide',
        label: '浙江',
        children: [
          {
            value: 'disciplines',
            label: '杭州',
            children: [
              {
                value: 'consistency',
                label: '拱墅区',
              },
              {
                value: 'feedback',
                label: '萧山区',
              },
            ],
          },
          {
            value: 'navigation',
            label: '安徽省',
            children: [
              {
                value: 'side nav',
                label: '黄山市',
              },
              {
                value: 'top nav',
                label: '严州',
              },
            ],
          },
        ],
      },
    ],
    half: true,
    desc: '123',

  },
])
const modelValue = ref({
  input: '字段字段字段字段',
  input2: '字段字段字段字段',
  input3: '字段字段字段字段',
  textarea: '字段字段字段字段字段字段字段字段字段字段字段字段字段字段字段字段',
  textarea2: 'xxx1',
  textarea3: 'x3432',
  textarea4: '2132adsa',
  textarea5: 'gdsah325',
})
const modelValue2 = ref({
  input: '',
  select: '',
  datePicker: '',
  cascader: '',
  cascader2: '',
  select2: '',
  select3: '',
  switch: '',
  switch2: '',
  input2: '',

})
const modelValue3 = ref({
  input: '',
  select: '',
  datePicker: '',
  cascader: '',
})
</script>

<template>
  <div style="margin: 1rem">
    <p>配置项较少时</p>
    <FYForm
      ref="myForm"
      :template="template2"
      :modelValue="modelValue3"
    />
    <br>
    <p>配置项较多时</p>
    <FYForm
      ref="myForm"
      :template="template"
      :modelValue="modelValue2"
    />
  </div>
</template>
