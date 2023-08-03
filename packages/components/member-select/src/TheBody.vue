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
  checkedValues: {
    type: Array,
    default: () => ([]),
  },
  searchVal: {
    type: String,
    default: '',
  },
})

const emits = defineEmits(['update:checkedValues'])

// const defaultValues = computed(() => props.template.reduce((pre, cur) => {
//   const defaultValue = cur?.defaultValue ?? []
//   while (cur.defaultValue.length) {
//     pre.add(cur.defaultValue.shift())
//   }
//   return pre
// }, new Set()))

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

const values = computed({
  get() {
    return props.checkedValues
  },
  set(val) {
    emits('update:checkedValues', val)
  },
})

const onCheck = (v) => {
  values.value = v
}

</script>

<template>
  <div class="member-select-body">
    <component
      :is="SelectRenderer"
      :tmplItem="activeTmplItem"
      :values="values"
      :searchVal="searchVal"
      @check="onCheck"
    />
  </div>
</template>
