<script setup lang="jsx">
import {
  FYFilterInline,
  installFilterInlineItem,
} from '@hitotek/fuzzy-ui-components'
import { ref } from 'vue'

const loading = ref(false)

// 方式一, 导入安装组件工具函数, 传递如下组件配置
installFilterInlineItem({
  type: 'diySelect',
  renderer(props) {
    return (
      <FYSelect
        placeholder={`请选择${props.label}`}
        {...props}
        v-model={props.model[props.value]}
        placement="bottom-start"
      />
    )
  },
})

// 方式二, 给定自定义类型和自定义render组件
const tmpl = [
  {
    label: '负责人',
    type: 'input',
    value: 'lew',
    defaultValue: '李恩伟',
    render(props) {
      return (
        <FYInput v-model={props.model[props.value]}/>
      )
    },
  },
  {
    label: '创建人',
    type: 'diySelect',
    value: 'createperson',
    defaultValue: 2,
    options: [{ label: '李校长', value: 1 }, { label: '王美丽', value: 2 }],
  },
  {
    label: '开始时间',
    type: 'datePicker',
    value: 'startTime',
  },
]

function submit(model) {
  loading.value = true
  console.log('🚀 ~ file: basic.vue:6 ~ submit ~ model:', model)
  setTimeout(() => {
    loading.value = false
  }, 1000)
}
</script>

<template>
  <div
    style="margin: 1rem"
    class="demo"
  >
    <FYFilterInline
      :loading="loading"
      :template="tmpl"
      @submit="submit"
    />
  </div>
</template>

<style>
.demo .el-input {
  --el-input-width: 220px;
}
</style>
