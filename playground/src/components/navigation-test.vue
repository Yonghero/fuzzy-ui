<script setup lang="jsx">
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
      {
        label: 'Page2-2-3-3-3',
        value: '/page2/2-3-3',
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
  <div
    class="navigation-wrap"
  >
    <!-- 传递 router 属性即开启路由模式 需要安装vue-router！！ -->
    <FYNavigation
      :template="tmpl"
      router
      @select="onSelect"
      @itemClick="onTmplItemClick"
    />
  </div>
</template>
<style scoped lang="scss">
.navigation-wrap {
  transform: translateX(0px);
  height: 100%;
  top: 0px;
  position: relative;
  overflow-y: hidden;
  z-index: 1000;
}
</style>
