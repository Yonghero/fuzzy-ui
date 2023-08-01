<script setup lang="jsx">
import {
  Notification, Camera,
} from '@element-plus/icons-vue'

defineOptions({
  name: 'FYTopNavigation',
})

// eslint-disable-next-line
const props = defineProps({
  config: {
    type: Object,
    default: () => ({
      icon: <el-icon><Notification /></el-icon>,
      title: '产品管理',
      menu: [
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

      ],
    }),
  },
})

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
