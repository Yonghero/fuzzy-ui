<script setup lang="jsx">

/**
 * @author younghero
 * @Date 2023-7-19
 * @description 动作面板
 */

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
  placement: {
    type: String,
    default: 'bottom-start',
  },
  trigger: {
    type: String,
    default: 'click',
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

// 根据tmpl生成 menuContent
const genTmpl = (tmpl, divider = false) => {
  const MenuItem = tmpl.map((item, idx) => {
    const slots = {}

    if (item.sideRender) {
      slots.sideRender = () => (<item.sideRender></item.sideRender>)
    }

    return (
      <ActionMenuItem
        key={idx}
        v-slots={slots}
        tmplItem={item}
      />
    )
  })

  return (
    <ActionMenuContent divider={divider}>
      { MenuItem }
    </ActionMenuContent>
  )
}

const ActionMenuRenderer = computed(() => {
  if (props.template[0] && Array.isArray(props.template[0])) {
    return <>
      { props.template.map((tmpl, index) => genTmpl(tmpl, index !== props.template.length - 1)) }
    </>
  }

  return genTmpl(props.template)
})

</script>

<template>
  <div class="fy-action-panel-wrap">
    <el-popover
      v-model:visible="popoverVisible"
      width="240"
      :show-arrow="false"
      :trigger="trigger"
      :placement="placement"
      popper-class="fy-action-panel-popover"
    >
      <template #reference>
        <slot />
      </template>
      <template #default>
        <div class="fy-action-panel">
          <component :is="ActionMenuRenderer" />
        </div>
      </template>
    </el-popover>
  </div>
</template>

<style lang="scss">
@use "../../../theme-chalk/src/action-panel/action-panel.scss"
</style>
