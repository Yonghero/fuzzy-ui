<template>
  <div style="margin: 20px">
    <div class="mb-4">
      <button @click="switchValue">
        打开对话框
      </button>
      <FYDialog
        v-model="value"
        :dialogConfig="dialogConfigDefault"
        :formModel="formModel"
        @submit="handleSubmit"
        @fail="handleFail"
        @cancel="handleCancel"
        @open="handleOpen"
      />
    </div>
  </div>
</template>
<script setup>
import {
  ref,
} from 'vue'

const value = ref(false)
const handleOpen = () => {
}
const dialogConfigDefault = ({
  title: '测试计划',
  template: [
    {
      type: 'input',
      label: '长输入',
      value: 'input',
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
      oneOfFour: true,
    },
    {
      type: 'switch',
      label: '选择',
      value: 'switch2',
      cb: () => {
        console.log('我是回调函数')
      },
      oneOfFour: true,
    },
    {
      type: 'input',
      label: '长文本',
      value: 'input2',
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
  switch: true,
  switch2: true,
  datePicker: '',
  cascader: [],
  cascader2: [],
  input2: '',
})
const handleSubmit = () => {
  value.value = false
}
const handleFail = () => {
}
const handleCancel = () => {
}
const switchValue = () => {
  value.value = !value.value
}

</script>
<style>
.mb-4 {
  margin-bottom: 20px;
}
</style>
