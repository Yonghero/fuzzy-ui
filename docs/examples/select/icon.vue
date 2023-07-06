<template>
  <div style="margin: 20px">
    <div class="mb-4">
      <p>使用默认图标</p>
      <FYSelect
        v-model="value1"
        :options="options3"
        default-icon
      />
      <p>使用jsx, options内带element icon图标</p>
      <FYSelect
        v-model="value2"
        :options="options2"
      />
      <p>自定义节点内容</p>
      <FYSelect
        v-model="value3"
        :options="options3"
        multiple
      >
        <template #default="{data}">
          <div style="display: flex;align-items: center;column-gap: 0.5rem">
            <el-icon><UserFilled /></el-icon>
            <span>{{ data.label }}</span>
          </div>
        </template>
      </FYSelect>
    </div>
  </div>
</template>
<script setup lang="jsx">
import { ref } from 'vue'
import { UserFilled } from '@element-plus/icons-vue'
import {
  ElIcon,
} from 'element-plus'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const options2 = [
  {
    value: 'Option1',
    label: 'Option1',
    icon: (<el-icon><UserFilled /></el-icon>),
  },
  {
    value: 'Option2',
    label: 'Option2',
    icon: (<el-icon><UserFilled /></el-icon>),
  },
  {
    value: 'Option3',
    label: 'Option3',
    icon: (<el-icon><UserFilled /></el-icon>),
  },
  {
    value: 'Option4',
    label: 'Option4',
    icon: (<el-icon><UserFilled /></el-icon>),
  },
]
const options3 = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
]

</script>
<style>
.mb-4 {
  margin-bottom: 20px;
}

</style>
