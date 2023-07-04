<script setup lang="jsx">
import { FYCascader } from '@hitotek/fuzzy-ui-components'
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
  {
    value: 'guide2',
    label: 'Guide2',
  },
]

const value = ref(['guide'])

const props = {
  multiple: true, // 开始多选
}

const handleChange = (v) => {
  console.log(v)
}

</script>

<template>
  <div class="m-4">
    <p>正确用法</p>
    <FYCascader
      v-model="value"
      :options="options"
      :default-icon="true"
      :props="props"
      clearable
      @change="handleChange"
    />
  </div>
  <div class="m-4">
    <p>设置 collapse = true 将选中的标签折叠</p>
    <FYCascader
      v-model="value"
      :options="options"
      :default-icon="true"
      :props="props"
      collapse-tags
      clearable
      @change="handleChange"
    />
  </div>
  <div class="m-4">
    <p>使用 collapse-tags-tooltip 属性来启用鼠标悬停折叠文字以显示具体所选值的行为。</p>
    <FYCascader
      v-model="value"
      :options="options"
      :default-icon="true"
      :props="props"
      collapse-tags
      collapse-tags-tooltip
      clearable
      @change="handleChange"
    />
  </div>
</template>

<style>
.m-4 {
  margin: 10px;
}
</style>
