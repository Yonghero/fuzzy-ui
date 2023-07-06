<script setup>
import { FYDatePicker, createRangeDatePicker } from '@hitotek/fuzzy-ui-components'

const { StartDatePicker, EndDatePicker } = createRangeDatePicker()
// 我的选择是全部禁用
const db = (time) => !!time

</script>

<template>
  <div class="demo-date-picker">
    <div class="block">
      <span class="demonstration">禁用小于当前时间的选择</span>
      <FYDatePicker :disableLessThan="true" />
    </div>
  </div>
  <div class="demo-date-picker">
    <div class="block">
      <span class="demonstration">禁用大于当前时间的选择</span>
      <FYDatePicker :disableMoreThan="true" />
    </div>
  </div>
  <div class="demo-date-picker">
    <div class="block">
      <span class="demonstration">传递自定义函数自主判断是否禁用</span>
      <FYDatePicker :disabled-date="db" />
    </div>
  </div>
  <div class="demo-date-picker">
    <div class="block">
      <span class="demonstration">截止时间基于开始时间限制</span>
      <span class="demonstration">除了双向绑定的值内置，其余属性依旧可以传递</span>
      <div style="width: 100%;display: flex;align-items: center;justify-content:center;column-gap: 10px;">
        开始时间：<StartDatePicker placeholder="选择开始时间" /> <div style="margin: 10px" />
        截止时间：<EndDatePicker />
      </div>
    </div>
  </div>
</template>

<style scoped>
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}
.demo-date-picker .block {
  padding: 15px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}
.demo-date-picker .block:last-child {
  border-right: none;
}
.demo-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
