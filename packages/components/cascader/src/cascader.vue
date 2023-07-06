<script setup lang="jsx">
import { computed, useSlots } from 'vue'
import { getRandomColor } from '@hitotek/fuzzy-ui-utils'

defineOptions({
  name: 'FYCascader',
})

defineProps({
  defaultIcon: {
    type: Boolean,
    default: false,
  },
})

const hasDefaultSlot = computed(() => {
  const slots = useSlots()
  return slots.default
})

const defaultIconStyle = computed(() => ({
  borderRadius: '50%',
  background: getRandomColor(),
  width: '18px',
  height: '18px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
}))

</script>

<template>
  <el-cascader
    v-bind="$attrs"
  >
    <template #default="{ data,node }">
      <!--   外部插槽传入    -->
      <slot
        v-if="hasDefaultSlot"
        :data="data"
        :node="node"
        name="default"
      />
      <!--   外部插槽不传入    -->
      <div
        v-else
        style="width: 100%;display: flex;justify-items: center; align-items: center;column-gap: 0.5rem"
      >
        <!--   data item 是否传入icon    -->
        <component
          :is="data.icon"
          v-if="data.icon"
        />
        <!--  data item 没有传入icon默认展示第一个字作为图标   -->
        <div
          v-else-if="defaultIcon"
          :style="defaultIconStyle"
        >
          {{ data.label.slice(0,1) }}
        </div>
        <span>{{ data.label }}</span>
      </div>
    </template>
  </el-cascader>
</template>
