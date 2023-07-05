<script setup>
import { useDisabledDate } from './composable/useDisabledDate'

defineOptions({
  name: 'FYDatePicker',
})

// 截止至今年
// 截止至本月
const props = defineProps({
  disableLessThan: { // 禁用小于当前时间的选择
    type: Boolean,
    default: false,
  },
  disableMoreThan: { // 禁用大于当前时间的选择
    type: Boolean,
    default: false,
  },
})

// 时间禁用函数
const disabledDate = useDisabledDate(props)

</script>

<template>
  <el-date-picker
    type="monthrange"
    range-separator="To"
    placeholder="请选择"
    start-placeholder="请选择"
    end-placeholder="请选择"
    :disabled-date="disabledDate"
    v-bind="$attrs"
  />
</template>
