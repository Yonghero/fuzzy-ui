<script setup lang="jsx">
import { tmplProps } from '@hitotek/fuzzy-ui-utils'
import { computed } from 'vue'
import * as BuiltInAllSelect from './BuiltInSelect'

const props = defineProps({
  ...tmplProps,
  activeIdx: {
    type: Number,
    default: 0,
  },
})

const activeTmplItem = computed(() => props.template[props.activeIdx])

// 选择框渲染器
const SelectRenderer = computed(() => {
  // 当前选中的tab类型

  // 渲染器组件类型
  const { type } = activeTmplItem.value

  // 查找是否已经有实现的渲染器组件
  const RendererKey = Object.keys(BuiltInAllSelect)
    .find((key) => BuiltInAllSelect[key].name.split('Member')[1].toLocaleLowerCase() === type)

  if (RendererKey) {
    return BuiltInAllSelect[RendererKey]
  }

  // 默认返回最基础的适配组件
  return BuiltInAllSelect.Select
})

</script>

<template>
  <div class="member-select-body">
    <component
      :is="SelectRenderer"
      :tmplItem="activeTmplItem"
    />
  </div>
</template>
