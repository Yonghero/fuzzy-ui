<script setup lang="jsx">
import { FYCascader } from '@hitotek/fuzzy-ui-components'
import { UserFilled } from '@element-plus/icons-vue'
import { ref } from 'vue'

const options = [
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
const options1 = [
  {
    value: 'guide',
    label: 'Guide',
    icon: (<el-icon><UserFilled /></el-icon>), // 自定义图标 传入jsx 无传递则展示默认图标
    children: [
      {
        value: 'disciplines',
        label: 'Disciplines',
        icon: (<el-icon><UserFilled /></el-icon>), // 自定义图标 传入jsx 无传递则展示默认图标
        children: [
          {
            value: 'consistency',
            label: 'Consistency',
            icon: (<el-icon><UserFilled /></el-icon>), // 自定义图标 传入jsx 无传递则展示默认图标
          },
          {
            value: 'feedback',
            label: 'Feedback',
            icon: (<el-icon><UserFilled /></el-icon>), // 自定义图标 传入jsx 无传递则展示默认图标
          },
          {
            value: 'efficiency',
            label: 'Efficiency',
            icon: (<el-icon><UserFilled /></el-icon>), // 自定义图标 传入jsx 无传递则展示默认图标
          },
          {
            value: 'controllability',
            label: 'Controllability',
          },
        ],
      },
    ],
  },
]

const value = ref()

const handleChange = (v) => {
  console.log(v)
}

</script>

<template>
  <div class="m-4">
    <p>默认图标展示,默认文本的第一个字</p>
    <FYCascader
      v-model="value"
      :options="options"
      :default-icon="true"
      @change="handleChange"
    />
  </div>
  <div class="m-4">
    <p>自定义图标展示</p>
    <FYCascader
      v-model="value"
      :options="options1"
      :default-icon="true"
      @change="handleChange"
    />
  </div>
</template>

<style>
.m-4 {
  margin: 10px;
}
</style>
