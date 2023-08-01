<script setup lang="jsx">
import { FYTable } from '@hitotek/fuzzy-ui-components'
import { ref, shallowRef } from 'vue'
import { MoreFilled } from '@element-plus/icons-vue'
import { ElDivider, ElIcon } from 'element-plus'

const tmpl = shallowRef([
  {
    label: '现在',
    value: 'date',
    type: 'timeDisplayMinute',
    visible: true,
    onChange({ value }) {
      console.log('🚀 ~ file: table.vue:13 ~ onChange ~ value:', value)
    },
  },
  {
    label: '今年',
    value: 'date2',
    type: 'timeDisplayDay',
    visible: true,
    onChange({ value }) {
      console.log('🚀 ~ file: table.vue:13 ~ onChange ~ value:', value)
    },
  },
  {
    label: '去年',
    value: 'date3',
    type: 'timeDisplayDay',
    visible: true,
    onChange({ value }) {
      console.log('🚀 ~ file: table.vue:13 ~ onChange ~ value:', value)
    },
  },
  {
    label: '图片',
    type: 'imagePreview',
    value: 'imagePreview',
    visible: true,
    width: 140,
  },
  {
    label: '保留位',
    type: 'limit3',
    value: 'date1',
    visible: true,
    width: 80,
    // limit: 3, // 保留 limit 位小数
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
    date: new Date(),
    index: idx + 1,
    date2: new Date('2023 10/20'),
    date3: new Date('2022 10/20'),
    imagePreview: idx === 0
      ? 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
      : [
        'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
        'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
        'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
        'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
        'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
      ],
    date1: 2.23,
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
