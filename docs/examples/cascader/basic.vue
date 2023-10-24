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
]

const value = ref()

const props = {
  expandTrigger: 'hover',
}

const handleChange = (v) => {
  console.log(v)
}

</script>

<template>
  <div class="m-4">
    <p>单击时子选项展开 (default)</p>
    <FYCascader
      v-model="value"
      :options="options"
      :default-icon="true"
      :disabled="true"
      @change="handleChange"
    />
  </div>
  <div class="m-4">
    <p>子选项在悬停时展开</p>
    <FYCascader
      v-model="value"
      :options="options"
      :props="props"
      @change="handleChange"
    />
  </div>
</template>

<style>
.m-4 {
  margin: 10px;
}
</style>
