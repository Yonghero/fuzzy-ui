<script setup lang="jsx">
import {
  Notification, Monitor, Camera, PictureRounded,
} from '@element-plus/icons-vue'

defineOptions({
  name: 'FYTopNavigation',
})

const props = defineProps({
  config: {
    type: Object,
    default: () => ({
      icon: <el-icon><Notification /></el-icon>,
      title: '产品管理',
      menu: [
        {
          label: '页面一',
          value: '/page1',
          icon: (<el-icon><Monitor /></el-icon>),
        },

      ],
    }),
  },
})

// init here
</script>

<template>
  <div class="fy-top-navigation">
    <div class="left-one">
      <component
        :is="config.icon"
      />
      <span class="title">{{ config.title }}</span>
      <div
        v-if="config.menu && config.menu.length"
        class="divider"
      />
      <FYMenu
        v-if="config.menu && config.menu.length"
        :template="config.menu"
        class="top-nav-menu"
      />
    </div>
    <div class="right">
      <slot name="operation">
        <span class="avatar-default">李俊</span>
      </slot>
    </div>
  </div>
</template>
<style lang="scss">
@use "../../../theme-chalk/src/top-navigation/top-navigation.scss"
</style>
