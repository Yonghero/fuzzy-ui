<template>
  <div style="margin: 20px">
    <div class="mb-4">
      <button @click="switchValue">
        打开对话框
      </button>
      <FYDialog
        v-model="value"
        :dialogConfig="dialogConfig"
        :formModel="formModel"
        @submit="handleSubmit"
        @fail="handleFail"
        @cancel="handleCancel"
        @open="handleOpen"
        @opened="handleOpend"
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
const dialogConfig = ({
  title: '测试计划',
  template: [
    {
      type: 'input',
      label: 'input',
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
const handleOpend = () => {
}

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
