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
  expandTrigger: 'hover',
}

const handleChange = (v) => {
  console.log(v)
}

</script>

<template>
  <div class="m-4">
    <p>clearable 可清空当前选择的数据</p>
    <FYCascader
      v-model="value"
      :options="options"
      :default-icon="true"
      :props="props"
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
