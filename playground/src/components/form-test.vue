<script setup>
import {
  ref, onMounted,
} from 'vue'

const template = ref([
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
    desc: '123',
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
    desc: '123',
  },
  {
    type: 'datePicker',
    label: '时间选择',
    value: 'datePicker',
    half: true,
    desc: '123',
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
    desc: '123',

  },
  // {
  //   type: 'cascader',
  //   label: '选择',
  //   value: 'cascader2',
  //   options: [
  //     {
  //       value: 'guide',
  //       label: 'Guide',
  //       children: [
  //         {
  //           value: 'disciplines',
  //           label: 'Disciplines',
  //           children: [
  //             {
  //               value: 'consistency',
  //               label: 'Consistency',
  //             },
  //             {
  //               value: 'feedback',
  //               label: 'Feedback',
  //             },
  //             {
  //               value: 'efficiency',
  //               label: 'Efficiency',
  //             },
  //             {
  //               value: 'controllability',
  //               label: 'Controllability',
  //             },
  //           ],
  //         },
  //         {
  //           value: 'navigation',
  //           label: 'Navigation',
  //           children: [
  //             {
  //               value: 'side nav',
  //               label: 'Side Navigation',
  //             },
  //             {
  //               value: 'top nav',
  //               label: 'Top Navigation',
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  //   half: true,
  // },
  // {
  //   type: 'select',
  //   label: '选择',
  //   value: 'select2',
  //   placeholder: '请输入搜索文字',
  //   options: [
  //     {
  //       value: 'value1',
  //       label: 'label1',
  //     },
  //     {
  //       value: 'value2',
  //       label: 'label2',
  //     },
  //   ],
  //   half: true,
  // },
  // {
  //   type: 'select',
  //   label: '选择',
  //   value: 'select3',
  //   placeholder: '请输入搜索文字',
  //   options: [
  //     {
  //       value: 'value1',
  //       label: 'label1',
  //     },
  //     {
  //       value: 'value2',
  //       label: 'label2',
  //     },
  //   ],
  //   half: true,
  // },
  // {
  //   type: 'switch',
  //   label: '选择',
  //   value: 'switch',
  //   cb: () => {
  //   },
  //   oneOfFour: true,
  // },
  // {
  //   type: 'switch',
  //   label: '选择',
  //   value: 'switch2',
  //   cb: () => {
  //   },
  //   oneOfFour: true,
  // },
  // {
  //   type: 'input',
  //   label: '长文本',
  //   value: 'input2',
  //   placeholder: '请输入搜索文字',
  //   textarea: true,
  //   half: true,

  // },
])
const templateRead = ref([
  {
    label: '任务名称',
    value: 'input',
    desc: '描述1',
  },
  {
    label: '任务名称2',
    value: 'input2',
    desc: '描述2',
  },
  {
    label: '任务名称3',
    value: 'input3',
    desc: '描述3',
  },
  {
    label: '任务名称4',
    value: 'textarea',
    desc: '描述4',
  },
  {
    label: '任务名称5',
    value: 'textarea2',
    desc: '描述5',
  },
  {
    label: '任务名称6',
    value: 'textarea3',
    desc: '描述6',
  },
  {
    label: '任务名称7',
    value: 'textarea4',
    desc: '描述7',
  },
  {
    label: '任务名称8',
    value: 'textarea5',
    desc: '描述8',
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
const myForm = ref(null)
setTimeout(() => {
  myForm.value.validate()
}, 2000)
const submit = (e) => {
  console.log(e, 'submit')
}

</script>

<template>
  <FYForm
    ref="myForm"
    :template="template"
    :modelValue="modelValue"
    :config="true"
    businessType="write"
  />
</template>
