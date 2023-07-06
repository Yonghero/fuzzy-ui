<template>
  <div style="margin: 20px">
    <div class="mb-4">
      <p>单选</p>
      <FYSelect
        v-model="value1"
        :options="options1"
      />
      <p>多选（清空）</p>
      <FYSelect
        v-model="value2"
        :options="options1"
        default-icon
        multiple
        clearable
      />
      <p>空数据效果</p>
      <FYSelect
        v-model="value3"
        :options="options3"
      />
      <p>虚拟化列表</p>
      <FYSelect
        v-model="value4"
        :options="options4"
        virtual
      />
      <p>标签化展示</p>
      <FYSelect
        v-model="value5"
        :options="options1"
        tag
        multiple
        :multiple-limit="1"
      />
      <!-- <el-select-v2
      v-model="value5"
      :options="options5"
    /> -->
      <p>权限控制快捷样式</p>
      <FYSelect
        v-model="value6"
        :options="options6"
        access
      />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
const value5 = ref('')
const value6 = ref('')
const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
// const options5 = []
const options4 = Array.from({ length: 10000 }).map((_, idx) => ({
  value: `Option ${idx + 1}`,
  label: `${initials[idx % 10]}${idx}`,
}))
const options1 = [
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
const options3 = [

]
const options6 = [
  {
    label: '公开',
    desc: '组织全部成员可见，仅测试库成员可编辑',
    value: true,
  },
  {
    label: '私有',
    desc: '仅测试库成员可见及编辑',
    value: false,
  },
]
</script>
<style>
.mb-4 {
  margin-bottom: 20px;
}

</style>
