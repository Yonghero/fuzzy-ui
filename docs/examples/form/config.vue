<script setup>
import { FYForm } from '@hitotek/fuzzy-ui-components'
import {
  ref, onMounted,
} from 'vue'

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
    desc: '请输入您合法身法的完整姓名',
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
    desc: '暂不支持第三种性别',
  },
  {
    type: 'datePicker',
    label: '生日',
    value: 'datePicker',
    half: true,
    desc: '请如实填写您的公历生日',

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
                label: '拱墅',
              },
              {
                value: 'feedback',
                label: '下沙',
              },

            ],
          },
          {
            value: 'navigation',
            label: '温州',
            children: [
              {
                value: 'side nav',
                label: '江南皮革厂',
              },
              {
                value: 'top nav',
                label: '百丈及',
              },
            ],
          },
        ],
      },
    ],
    half: true,
    desc: '请填写您的出生所在地',

  },
])
const templateRead = ref([
  {
    label: '姓名',
    value: 'input',
    desc: '请输入您合法身法的完整姓名',
  },
  {
    label: '性别',
    value: 'input2',
    desc: '暂不支持第三种性别',
  },
  {
    label: '生日',
    value: 'input3',
    desc: '请如实填写您的公历生日',
  },
  {
    label: '祖籍',
    value: 'textarea',
    desc: '请填写您的出生所在地',
  },
])
const modelValue = ref({
  input: '李恩伟',
  input2: '男',
  input3: '2000-1-1 18：18：18',
  textarea: '浙江',
})
const modelValue2 = ref({
  input: '李恩伟',
  select: '男',
  datePicker: '2000-1-1 18：18：18',
  cascader: '浙江',
})
</script>

<template>
  <div style="margin: 1rem">
    <p>查看</p>
    <FYForm
      ref="myForm"
      :template="templateRead"
      :modelValue="modelValue"
      labelPosition="left"
      :config="true"
      businessType="read"
    />
    <p>编辑</p>
    <FYForm
      ref="myForm"
      :template="template"
      :modelValue="modelValue2"
      labelPosition="top"
      :config="true"
      businessType="write"
    />
  </div>
</template>
