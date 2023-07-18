<script setup>
import { computed } from 'vue'
import { tmplProps } from '@hitotek/fuzzy-ui-utils'
import ActionMenuItem from './ActionMenuItem.vue'
import ActionMenuContent from './ActionMenuContent.vue'

defineOptions({
  name: 'FYActionPanel',
})

const props = defineProps({
  ...tmplProps,
  visible: {
    type: Boolean,
    default: false,
  },
})

const emits = defineEmits(['update:visible'])

// popover 受控模式
const popoverVisible = computed({
  get() {
    return props.visible
  },
  set(value) {
    emits('update:visible', value)
  },
})

// init here
</script>

<template>
  <div class="fy-action-panel-warp">
    <el-popover
      v-model:visible="popoverVisible"
      width="240"
      :show-arrow="false"
      trigger="click"
      placement="bottom-start"
      popper-class="fy-acton-panel-popover"
    >
      <template #reference>
        <slot />
      </template>
      <template #default>
        <div class="fy-action-panel">
          <ActionMenuContent>
            <ActionMenuItem />
            <ActionMenuItem />
            <ActionMenuItem />
            <ActionMenuItem />
            <ActionMenuItem />
          </ActionMenuContent>
          <ActionMenuContent :divider="false">
            <ActionMenuItem />
            <ActionMenuItem />
            <ActionMenuItem />
            <ActionMenuItem />
            <ActionMenuItem />
          </ActionMenuContent>
        </div>
      </template>
    </el-popover>
  </div>
</template>

<style lang="scss">
.fy-action-panel-wrap {
  .el-popper {
    padding: 0;
  }
  .fy-action-panel {
    padding: 10px 0;
    display: block;
    width: 240px;
    background: var(--el-bg-color-overlay);
    border-radius: 0.25rem;
    box-shadow: 0 0 16px #00000014;
    border: 1px solid var(--el-border-color-light);
  }
}

</style>
