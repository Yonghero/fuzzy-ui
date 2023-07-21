<script setup lang="jsx">
import { FYActionPanel } from '@hitotek/fuzzy-ui-components'
import { ref } from 'vue'
import { mergeTemplate } from '@hitotek/fuzzy-ui-utils'
import { MessageBox } from '@element-plus/icons-vue'

const visible = ref(false)

const tmpl1 = [
  {
    label: '面板一禁用状态',
    icon: (<el-icon><MessageBox /></el-icon>),
    disabled: true,
    onClick: () => {
      alert('click')
    },
  },
  {
    label: '自定义Render',
    render: () => (<span>自定义render</span>),
    sideRender: () => (<span>side ...</span>),
    onClick: () => {
      alert('click')
    },
  },
  {
    label: '不传递icon',
    // icon: (<el-icon><MessageBox /></el-icon>),
    sideRender: () => (<span>side ...</span>),
    onClick: () => {
      alert('click')
    },
  },
  {
    label: '传递icon',
    icon: (<el-icon><MessageBox /></el-icon>),
    sideRender: () => (<span>side ...</span>),
    onClick: () => {
      alert('click')
    },
  },
]
const tmpl2 = [
  {
    label: '面板二',
    icon: (<el-icon><MessageBox /></el-icon>),
    sideRender: () => (<span>side ...</span>),
    onClick: () => {
      alert('click')
    },
  },
  {
    label: '面板二',
    icon: (<el-icon><MessageBox /></el-icon>),
    sideRender: () => (<span>side ...</span>),
    onClick: () => {
      alert('click')
    },
  },
  {
    label: '面板二',
    icon: (<el-icon><MessageBox /></el-icon>),
    sideRender: () => (<span>side ...</span>),
    onClick: () => {
      alert('click')
    },
  },
]
const tmpl = mergeTemplate(tmpl1, tmpl2)
</script>

<template>
  <div style="margin: 1rem">
    <FYActionPanel
      v-model:visible="visible"
      :template="tmpl"
    >
      <div
        style="cursor: pointer;"
        class="trigger-target"
      >
        点我看看 面板分层术🌲
      </div>
    </FYActionPanel>
  </div>
</template>
