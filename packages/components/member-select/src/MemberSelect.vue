<script setup>
/**
 * @author younghero
 * @Date 2023-8-2
 * @description 人员选择
 */

import {
  computed, ref, watchEffect, watch,
} from 'vue'
import { tmplProps } from '@hitotek/fuzzy-ui-utils'
import TheHeader from './TheHeader.vue'
import TheBody from './TheBody.vue'
import TheFooter from './TheFooter.vue'

defineOptions({
  name: 'FYMemberSelect',
})

const props = defineProps({
  ...tmplProps,
  visible: {
    type: Boolean,
    default: false,
  },
})

const emits = defineEmits(['update:visible', 'checked'])

// popover 受控模式
const popoverVisible = computed({
  get() {
    return props.visible
  },
  set(value) {
    emits('update:visible', value)
  },
})

// 默认tab下标
const activeIdx = ref(0)

// 输入框值
const searchVal = ref('')

// 选中的人员信息
const checkedValues = ref([])

// 选中人员的默认值
watchEffect(() => {
  checkedValues.value = Array.from(
    props.template.reduce((pre, cur) => {
      const defaultValue = cur?.defaultValue ?? []
      while (defaultValue.length) {
        pre.add(defaultValue.shift())
      }
      return pre
    }, new Set()),
  )
})

watch(checkedValues.value, (val) => emits('checked', val))

defineExpose({
  checkedValues: computed(() => checkedValues.value),
})

</script>

<template>
  <el-popover
    v-model:visible="popoverVisible"
    :width="260"
    :show-arrow="false"
    trigger="click"
    placement="bottom-start"
    popper-class="fy-member-select-popover"
    popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
  >
    <template #reference>
      <slot />
    </template>
    <template #default>
      <div class="fy-member-select-wrap">
        <TheHeader
          v-model:searchVal="searchVal"
          v-model:activeIdx="activeIdx"
          :template="template"
        />
        <TheBody
          v-model:checkedValues="checkedValues"
          :searchVal="searchVal"
          :activeIdx="activeIdx"
          :template="template"
        />
        <TheFooter :checkedValues="checkedValues" />
      </div>
    </template>
  </el-popover>
</template>

<style lang="scss">
@use "../../../theme-chalk/src/member-select/member-select.scss"
</style>
