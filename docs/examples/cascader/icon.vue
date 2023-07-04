<script setup lang="jsx">
import { FYCascader } from '@hitotek/fuzzy-ui-components'
import { UserFilled } from '@element-plus/icons-vue'
import { ref } from 'vue'

const options = [
  {
    value: 'guide',
    label: 'Guide',
    icon: (<el-icon><UserFilled /></el-icon>), // 自定义图标 传入jsx 无传递则展示默认图标
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

const value = ref()

const handleChange = (v) => {
  console.log(v)
}

</script>

<template>
  <div class="m-4">
    <p>图标展示</p>
    <FYCascader
      v-model="value"
      :options="options"
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
