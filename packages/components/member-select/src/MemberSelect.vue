<script setup>
/**
 * @author younghero
 * @Date 2023-8-2
 * @description 人员选择
 */

import { computed, ref } from 'vue'
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

const emits = defineEmits(['update:visible'])

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

</script>

<template>
  <el-popover
    :visible="popoverVisible"
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
          :activeIdx="activeIdx"
          :template="template"
        />
        <TheFooter />
      </div>
    </template>
  </el-popover>
</template>

<style lang="scss">
@use "../../../theme-chalk/src/member-select/member-select.scss"
</style>
