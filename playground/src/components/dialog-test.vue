<script setup>
import {
  ref,
} from 'vue'

const value = ref(true)

const dialogConfigDefault = ({
  title: '测试计划',
  template: [
    {
      type: 'input',
      label: '长输入',
      value: 'input',
      placeholder: '请输入搜索文字',
      limit: 10,
      require: true,
      rules: [{
        min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur',
      }],
    },
    {
      type: 'select',
      label: '选择',
      value: 'select',
      placeholder: '请输入搜索文字',
      options: [
        {
          value: 'value1',
          label: 'label1',
        },
        {
          value: 'value2',
          label: 'label2',
        },
      ],
      half: true,
    },
    {
      type: 'datePicker',
      label: '时间选择',
      value: 'datePicker',
      half: true,
    },
    {
      type: 'cascader',
      label: '选择',
      value: 'cascader',
      options: [
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
      ],
      half: true,
    },
    {
      type: 'cascader',
      label: '选择',
      value: 'cascader2',
      options: [
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
      ],
      half: true,
    },
    {
      type: 'select',
      label: '选择',
      value: 'select2',
      placeholder: '请输入搜索文字',
      options: [
        {
          value: 'value1',
          label: 'label1',
        },
        {
          value: 'value2',
          label: 'label2',
        },
      ],
      half: true,
    },
    {
      type: 'select',
      label: '选择',
      value: 'select3',
      placeholder: '请输入搜索文字',
      options: [
        {
          value: 'value1',
          label: 'label1',
        },
        {
          value: 'value2',
          label: 'label2',
        },
      ],
      half: true,
    },
    {
      type: 'switch',
      label: '选择',
      value: 'switch',
      cb: () => {
      },
      oneOfFour: true,
    },
    {
      type: 'switch',
      label: '选择',
      value: 'switch2',
      cb: () => {
      },
      oneOfFour: true,
    },
    {
      type: 'input',
      label: '长文本',
      value: 'input2',
      placeholder: '请输入搜索文字',
      textarea: true,
      half: true,

    },
  ],
  closeOnClickModal: false,
})
const formModel = ref({
  input: '',
  select: '',
  select2: '',
  select3: '',
  switch: false,
  switch2: false,
  datePicker: '',
  cascader: [],
  cascader2: [],
  input2: '',
})
const handleSubmit = () => {
}
const handleFail = () => {
}
const handleCancel = () => {
}
const switchValue = () => {
  value.value = !value.value
}

</script>

<template>
  <p>dialog外壳</p>
  <button @click="switchValue">
    切换打开
  </button>
  <FYDialog
    v-model="value"
    :dialogConfig="dialogConfigDefault"
    :formModel="formModel"
    :close-on-click-modal="false"
    @submit="handleSubmit"
    @fail="handleFail"
    @cancel="handleCancel"
  />
</template>
