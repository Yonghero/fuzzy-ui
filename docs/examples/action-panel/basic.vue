<script setup lang="jsx">
import { FYActionPanel } from '@hitotek/fuzzy-ui-components'
import { ref } from 'vue'

import { MessageBox, ArrowLeft, ArrowRight } from '@element-plus/icons-vue'

const visible = ref(false)

const tmpl = [
  {
    label: '我的需求',
    icon: (<el-icon><MessageBox /></el-icon>),
    sideRender: () => (<span>...</span>),
    onClick: () => {
      alert('click')
    },
  },
  {
    label: '向左移动',
    icon: (<el-icon><ArrowLeft /></el-icon>),
    sideRender: () => (<span>...</span>),
    onClick: () => {
      alert('click')
    },
  },
  {
    label: '向右边移动',
    icon: (<el-icon><ArrowRight /></el-icon>),
    sideRender: () => (<span>...</span>),
    onClick: () => {
      alert('click')
    },
  },
]

const visible1 = ref(false)
const visible2 = ref(false)
</script>

<template>
  <div style="margin: 1rem;display: flex; column-gap: 1rem;">
    <FYActionPanel
      v-model:visible="visible"
      :template="tmpl"
    >
      <div
        style="cursor: pointer;"
        class="trigger-target"
      >
        点我 ⇢ 打开动作面板
      </div>
    </FYActionPanel>

    <FYActionPanel
      v-model:visible="visible1"
      :template="tmpl"
      placement="right"
    >
      <div
        style="cursor: pointer;"
        class="trigger-target"
      >
        点我 ⇢ 我会出现会在你的👉
      </div>
    </FYActionPanel>

    <FYActionPanel
      v-model:visible="visible2"
      :template="tmpl"
      placement="left"
    >
      <div
        style="cursor: pointer;"
        class="trigger-target"
      >
        点我 ⇢ 我会出现会在你的👈
      </div>
    </FYActionPanel>
  </div>
</template>

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
