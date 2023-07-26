<script setup lang="jsx">
import { FYTable } from '@hitotek/fuzzy-ui-components'
import { ref, shallowRef } from 'vue'
import { MoreFilled, FullScreen } from '@element-plus/icons-vue'
import { ElDivider, ElIcon } from 'element-plus'

const tmpl = shallowRef([
  {
    label: '日期',
    value: 'date',
    type: 'input',
    width: 140,
    visible: true,
    'show-overflow-tooltip': true,
    onChange({ value }) {
      console.log('🚀 ~ file: table.vue:13 ~ onChange ~ value:', value)
    },
  },
  {
    label: '姓名',
    value: 'name',
    visible: true,
    width: 140,
    render({ value }) {
      return (
        <div
         class="custom-render"
         onClick={() => {
           alert('展开详情！！')
         }}
         >
          <span>{value}</span>
          <el-tooltip
            effect="dark"
            content="展开"
            placement="top"
          >
            <div class="extra">
              <el-icon><FullScreen /></el-icon>
            </div>
          </el-tooltip>

        </div>
      )
    },
  },
  {
    label: '空数据',
    value: 'date1',
    visible: true,
    width: 80,
    onChange({ value }) {
      console.log('🚀 ~ file: table.vue:13 ~ onChange ~ value:', value)
    },
  },
  {
    label: '地址',
    value: 'address',
    visible: true,
    'show-overflow-tooltip': true,
  },
])

const tableData = ref()

setTimeout(() => {
  tableData.value = Array.from({ length: 5 }, (_, idx) => ({
    date: '2016-05-03',
    index: idx + 1,
    name: `${idx}Tom`,
    address: '浙江高山CNo. 189, Grove St, Los Angeles',
  }))
}, 1000)

/**
 * 我是渲染器
 */
const renderer = {
  // values -> selection Values
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

const onHeaderSelection = (template) => {
  console.log('🚀 ~ file: table.vue:118 ~ onHeaderSelection ~ template:', template)
  tmpl.value = template
}

</script>

<template>
  <div style="margin: 1rem;">
    <FYTable
      ref="Ele"
      :template="tmpl"
      :data="tableData"
      :renderer="renderer"
      columnSelection
      columnIndex
      @selection="onSelection"
      @headerSelection="onHeaderSelection"
    />
  </div>
</template>

<style lang="scss">
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
.custom-render {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  // padding: 0 1rem;

  .extra {
    padding: 0.5rem;
    display: inline-flex;
    column-gap: .5rem;
    align-items: center;
    line-height: 1;
    position: relative;
    border-radius: 0.25rem;
    transition: background .2s ease-in-out,color .2s ease-in-out;
    background: transparent;
    cursor: pointer;
    color: #999;
    &:hover {
      color: #6698ff;
      background: rgba(102,152,255,.1);
    }
  }
}
</style>

<style lang="sass">

html:not(.dark)
  --trigger-target-color: rgb(239, 244, 255)

html.dark
  --trigger-target-color: rgb(46 49 55)

.trigger-target
  padding: 0.5rem
  display: inline-flex
  column-gap: .5rem
  align-items: center
  line-height: 1
  position: relative
  border-radius: 0.25rem
  transition: background .2s ease-in-out,color .2s ease-in-out
  background: transparent
  cursor: pointer
  color: #999
  &:hover
    color: #6698ff
    background: rgba(102,152,255,.1)
</style>
