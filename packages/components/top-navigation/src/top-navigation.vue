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
          label: '更多',
          value: '/page2',
          icon: (<el-icon><Camera /></el-icon>),
          children: [
            {
              label: '信息管理',
              value: '/page2/1',
            },
            {
              label: '人员管理',
              value: '/page2/2',
            },
            {
              label: '布控管理',
              value: '/page2/2-3-3',
              children: [
                {
                  label: '车牌布防',
                  value: '/page2/2-3-3-1',
                },
                {
                  label: '路线布防',
                  value: '/page2/2-3-3-2',
                },
              ],
            },
          ],
        },

      ],
    }),
  },
})

const emits = defineEmits(['select', 'itemClick'])

function onSelect({ key, keyPath, item }) {
  emits('select', { key, keyPath, item })
}

function onTmplItemClick(item) {
  emits('itemClick', item)
}

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
        @select="onSelect"
        @itemClick="onTmplItemClick"
      />
    </div>
    <div class="right">
      <slot name="operation" />
    </div>
  </div>
</template>
<style lang="scss">
@use "../../../theme-chalk/src/top-navigation/top-navigation.scss"
</style>
