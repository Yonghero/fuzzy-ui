<script setup>
import { useDisabledDate } from './composable/useDisabledDate'

defineOptions({
  name: 'FYDatePicker',
})

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
  <div
    class="fy-date-picker"
    style="width: 100%"
  >
    <el-date-picker
      type="monthrange"
      range-separator="To"
      placeholder="请选择"
      start-placeholder="请选择"
      end-placeholder="请选择"
      :disabled-date="disabledDate"
      v-bind="$attrs"
    />
  </div>
</template>

<style>
.fy-date-picker .el-input {
  width: 100%;
}
</style>
