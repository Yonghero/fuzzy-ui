<template>
  <div style="margin: 20px">
    <div class="mb-4">
      <button @click="switchValue">
        打开对话框
      </button>
      <FYDialog
        v-model="value"
        :dialogConfig="dialogConfig"
        @confirm="handleConfirm"
        @cancel="handleCancel"
      />
    </div>
  </div>
</template>
<script setup>
import {
  ref,
} from 'vue'

const value = ref(false)
const dialogConfig = ({
  title: '确认删除',
  type: 'delete',
  businessType: '字段',
  tagText: '需求',
  customDesc: '删除测试用例会一起删除未完成测试计划内的执行用例，删除后如果想找回测试用例，可以通过测试库设置内的回收站进行恢复。',
})
const switchValue = () => {
  value.value = !value.value
}
const handleConfirm = () => {
  value.value = false
}
const handleCancel = () => {
  value.value = false
}
</script>
<style>
.mb-4 {
  margin-bottom: 20px;
}
</style>
