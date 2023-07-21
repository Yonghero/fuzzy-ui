<script setup lang="jsx">
import { FYTable } from '@hitotek/fuzzy-ui-components'
import { ref } from 'vue'
import { MoreFilled } from '@element-plus/icons-vue'
import { ElDivider, ElIcon } from 'element-plus'

const tmpl = [
  {
    label: 'date',
    value: 'date',
  },
  {
    label: 'name',
    value: 'name',
  },
  {
    label: 'address',
    value: 'address',
  },
]

const tableData = ref()

setTimeout(() => {
  tableData.value = [
    {
      date: '2016-05-03',
      index: 1,
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      index: 2,
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      index: 3,
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      index: 4,
      address: 'No. 189, Grove St, Los Angeles',
    },
  ]
}, 1000)

const renderer = {
  header({ values }) {
    return (
      <div class="header">
        已选中 <span style="color: var(--el-color-primary)">{values.length}</span> 项
        <ElDivider direction="vertical" />
        <ElIcon><MoreFilled /></ElIcon>
        <span style="cursor: pointer">更多</span>
      </div>
    )
  },
}

const onSelection = (v) => {
  console.log('🚀 ~ file: table.vue:62 ~ onSelection ~ v:', v)
}

</script>

<template>
  <div style="margin: 1rem">
    <FYTable
      :template="tmpl"
      :data="tableData"
      :renderer="renderer"
      :columnSelection="true"
      @selection="onSelection"
    />
  </div>
</template>

<style>
.header {
  width: 100%;
  height: 100%;
  background-color: #F5F5F5;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 0 10px;
  color: #666;
  column-gap: 10px;
}
</style>
