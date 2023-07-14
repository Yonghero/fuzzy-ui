<script setup>
import { FYFilterPanel } from '@hitotek/fuzzy-ui-components'
import { ref } from 'vue'

// 需要传入以下格式
const tmpl = [
  {
    label: '负责人',
    type: 'select', // 负责人对应的组件类型
    value: 'person',
    defaultValue: 1,
    options: [{ label: '王小谟', value: 1 }, { label: '张大哥', value: 2 }],
  },
  {
    label: '创建人',
    type: 'select',
    value: 'createperson',
    defaultValue: 2,
    options: [{ label: '李校长', value: 1 }, { label: '王美丽', value: 2 }],
  },
  {
    label: '开始时间',
    type: 'datePicker',
    value: 'startTime',
    digit: true, // 代表需要数字关系运算符
  },
]

const visible = ref(false)

const result = ref([])

function submit(values) {
  result.value = values
  console.log('🚀 ~ file: basic.vue:35 ~ submit ~ result.value :', result.value)
}

function cancel() {
  // do someing when cancel
}

function reset() {
  // do someing when reset
}
</script>

<template>
  <div style="margin: 1rem">
    <FYFilterPanel
      v-model:visible="visible"
      :template="tmpl"
      @submit="submit"
      @cancel="cancel"
      @reset="reset"
    >
      <div
        class="trigger-target"
        @click="visible = true"
      >
        <el-icon><Expand /></el-icon>
        <span>筛选</span>
        <div
          v-show="result.length"
          class="badge"
        >
          {{ result.length }}
        </div>
      </div>
    </FYFilterPanel>
  </div>
</template>

<style scoped lang='sass'>

html:not(.dark)
  --trigger-target-color: rgb(239, 244, 255)

html.dark
  --trigger-target-color: rgb(46 49 55)

.trigger-target
  padding: 0.5rem
  display: inline-flex
  column-gap: .5rem
  align-items: center
  line-height: 1
  position: relative
  border-radius: 0.25rem
  transition: background .2s ease-in-out,color .2s ease-in-out
  background: transparent
  cursor: pointer
  color: #999
  &:hover
    color: #6698ff
    background: rgba(102,152,255,.1)
  .badge
    color: rgb(102, 152, 255)
    background-color: var(--trigger-target-color)
    border-radius: 50%
    text-align: center
    white-space: nowrap
    min-width: 1rem
    height: 1rem
    border-radius: 1rem
    line-height: 1rem
    font-size: .75rem
    padding: 0 4px

</style>
