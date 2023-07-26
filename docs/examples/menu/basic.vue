<script setup lang="jsx">
import { FYMenu } from '@hitotek/fuzzy-ui-components'
import { Monitor, Camera, PictureRounded } from '@element-plus/icons-vue'

const tmpl = [
  {
    label: '页面一',
    value: '/page1',
    icon: (<el-icon><Monitor /></el-icon>),
  },
  {
    label: '页面二',
    value: '/page2',
    icon: (<el-icon><Camera /></el-icon>),
    children: [
      {
        label: 'Page2-1',
        value: '/page2/1',
      },
      {
        label: 'Page2-2',
        value: '/page2/2',
      },
    ],
  },
  {
    label: '页面三',
    value: '/page3',
    icon: (<el-icon ><PictureRounded /></el-icon>),
  },
  {
    label: '也可以是一个Tab',
    value: 'd',
    render({ tmplItem }) { // 支持自定义渲染
      console.log('🚀 ~ file: basic.vue:35 ~ render ~ tmplItem:', tmplItem)
      return (
        <div>{ tmplItem.label }</div>
      )
    },
  },
]

function onSelect({ key, keyPath, item }) {
  console.log(key, keyPath, item)
}

function onTmplItemClick(item) {
  console.log('🚀 ~ file: basic.vue:48 ~ onTmplItemSelect ~ item:', item)
}
</script>

<template>
  <div style="margin: 1rem">
    <!-- 传递 router 属性即开启路由模式 需要安装vue-router！！ -->
    <FYMenu
      :template="tmpl"
      router
      @select="onSelect"
      @itemClick="onTmplItemClick"
    />
  </div>
</template>
