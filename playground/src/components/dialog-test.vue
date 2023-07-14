<script setup>
import {
  ref,
} from 'vue'

const value = ref(true)

const dialogConfig = ({
  title: '测试计划',
  formModelItems: [
    // {
    //   type: 'cascader',
    //   label: 'cascader',
    //   value: 'cascader',
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
    // },
    {
      type: 'input',
      label: 'input',
      value: 'input',
      placeholder: '请输入搜索文字',
      limit: 10,
    },
    {
      type: 'select',
      label: 'select',
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
    },
    {
      type: 'input',
      label: 'input',
      value: 'input2',
      placeholder: '请输入搜索文字',
      textarea: true,
    },
    {
      type: 'switch',
      label: 'switch',
      value: 'switch',
      cb: () => {
        console.log('我是回调函数')
      },
    },
    // {
    //   type: 'datePicker',
    //   label: 'datePicker',
    //   value: 'datePicker',

    // },

  ],
})
const dialogConfigDefault = ({
  title: '测试计划',
  formModelItems: [
    {
      type: 'input',
      label: '长输入',
      value: 'input',
      placeholder: '请输入搜索文字',
      limit: 10,
    },
    {
      type: 'select',
      label: 'select',
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
      label: 'datePicker',
      value: 'datePicker',
      half: true,
    },
    {
      type: 'cascader',
      label: 'cascader',
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
      label: 'cascader',
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
      label: 'select',
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
      label: 'select',
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
      label: 'switch',
      value: 'switch',
      cb: () => {
        console.log('我是回调函数')
      },
      oneOfFour: true,
    },
    {
      type: 'switch',
      label: 'switch',
      value: 'switch2',
      cb: () => {
        console.log('我是回调函数')
      },
      oneOfFour: true,
    },
    {
      type: 'input',
      label: 'input',
      value: 'input2',
      placeholder: '请输入搜索文字',
      textarea: true,
      half: true,

    },
  ],
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
</script>

<template>
  <p>dialog外壳</p>
  <FYDialog
    v-model="value"
    :dialogConfig="dialogConfigDefault"
    :formModel="formModel"
  />
</template>
