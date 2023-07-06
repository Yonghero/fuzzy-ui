<script setup>
import { FYDatePicker } from '@hitotek/fuzzy-ui-components'
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')

const shortcuts = [
  {
    text: '今天',
    value: new Date(),
  },
  {
    text: '明天',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24)
      return date
    },
  },
  {
    text: '下周',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() + 3600 * 1000 * 24 * 7)
      return date
    },
  },
]

</script>

<template>
  <div class="demo-date-picker">
    <div class="block">
      <span class="demonstration">默认</span>
      <FYDatePicker
        v-model="value1"
        type="date"
      />
    </div>
    <div class="block">
      <span class="demonstration">具有快速选项的选取器</span>
      <FYDatePicker
        v-model="value2"
        type="date"
        placeholder="Pick a day"
        :shortcuts="shortcuts"
      />
    </div>
  </div>
</template>

<style scoped>
.demo-date-picker {
  display: flex;
  padding: 20px;
  flex-wrap: nowrap;
  width: 100%;
}
.demo-date-picker .block {
  padding: 10px;
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
