<script setup lang="jsx">
import { FYTable, FYActionPanel } from '@hitotek/fuzzy-ui-components'
import { ref } from 'vue'
import { MoreFilled, FullScreen, Sort } from '@element-plus/icons-vue'
import { ElDivider, ElIcon } from 'element-plus'

const tmpl = [
  {
    label: 'date',
    value: 'date',
    type: 'input',
    visible: false,
    onChange({ value }) {
      console.log('🚀 ~ file: table.vue:13 ~ onChange ~ value:', value)
    },
  },
  {
    label: 'name',
    value: 'name',
    sortable: true,
    visible: true,
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
    label: 'address',
    value: 'address',
    visible: true,
  },
]

const tableData = ref()

setTimeout(() => {
  tableData.value = [
    {
      date: '2016-05-03',
      index: 1,
      name: 'ATom',
      address: 'CNo. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-02',
      name: 'BTom',
      index: 2,
      address: 'DNo. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'DTom',
      index: 3,
      address: 'BNo. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-01',
      name: 'CTom',
      index: 4,
      address: 'ANo. 189, Grove St, Los Angeles',
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

const Ele = ref()

const selectSortPropVisible = ref(false)

const sortTmpl = [
  { label: 'date' },
  { label: 'name' },
  { label: 'address' },
].map((tm) => ({
  ...tm,
  sideRender: () => (<el-icon size="15"><Sort /></el-icon>),
  onClick() {
    Ele.value.sort(tm.label)
    selectSortPropVisible.value = false
  },
}))
console.log('🚀 ~ file: table.vue:110 ~ sortTmpl:', sortTmpl)

</script>

<template>
  <div style="margin: 1rem;">
    <FYActionPanel
      v-model:visible="selectSortPropVisible"
      :template="sortTmpl"
      style="margin: 1rem"
    >
      <div
        style="cursor: pointer;"
        class="trigger-target"
      >
        按照字段排序吧🤟🏻
      </div>
    </FYActionPanel>
    <FYTable
      ref="Ele"
      :template="tmpl"
      :data="tableData"
      :renderer="renderer"
      :columnSelection="true"
      @selection="onSelection"
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
  padding: 0 1rem;

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
