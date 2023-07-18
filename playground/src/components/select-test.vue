<script setup lang="jsx">
import { ref } from 'vue'
import { UserFilled } from '@element-plus/icons-vue'
import {
  ElIcon,
} from 'element-plus'

const value = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
const value5 = ref()
const value6 = ref()
const value7 = ref()
const value8 = ref()
const value9 = ref()
const value10 = ref()
const options = [
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
const options10 = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
]
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
const options4 = [

]
const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
// const options5 = []
const options5 = Array.from({ length: 10000 }).map((_, idx) => ({
  value: `Option ${idx + 1}`,
  label: `${initials[idx % 10]}${idx}`,
}))
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
const handleChange = () => {
}
const handleVisibleChange = () => {
}
const handleRemoveTag = () => {
}
const handleClear = () => {
}
const handleBlur = () => {
}
const handleFocus = () => {
}

</script>

<template>
  <div>
    <p>单选</p>
    <FYSelect
      v-model="value10"
      :options="options10"
      @change="handleChange"
      @visible-change="handleVisibleChange"
      @clear="handleClear"
      @blur="handleBlur"
      @focus="handleFocus"
    />
    <p>多选</p>
    <FYSelect
      v-model="value"
      :options="options"
      default-icon
      multiple
      @remove-tag="handleRemoveTag"
    />
    <p>使用默认图标</p>
    <FYSelect
      v-model="value6"
      :options="options"
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
    <p>空数据效果</p>
    <FYSelect
      v-model="value4"
      :options="options4"
    />
    <p>虚拟化列表</p>
    <FYSelect
      v-model="value5"
      :options="options5"
      virtual
    />
    <p>虚拟化列表 多选 自定义内容</p>
    <!-- <FYSelect
      v-model="value7"
      :options="options5"
      virtual
      style="width: 240px"
      multiple
    /> -->
    <FYSelect
      v-model="value7"
      :options="options5"
      virtual
      style="width: 240px"
      multiple
    >
      <template #default="{data}">
        <div style="display: flex;align-items: center;column-gap: 0.5rem">
          <el-icon><UserFilled /></el-icon>
          <span>{{ data.label }}</span>
        </div>
      </template>
    </FYSelect>
    <p>标签化展示</p>
    <FYSelect
      v-model="value8"
      :options="options3"
      tag
    />
    <!-- <el-select-v2
      v-model="value5"
      :options="options5"
    /> -->
    <p>权限控制快捷样式</p>
    <FYSelect
      v-model="value9"
      :options="options6"
      access
    />
  </div>
</template>
<style scoped lang="scss">
</style>
