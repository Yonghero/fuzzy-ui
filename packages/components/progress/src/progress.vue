<script setup>
import {
  ref, watch, computed,
} from 'vue'

import { ElPopover } from 'element-plus'

defineOptions({
  name: 'FYProgress',
})

const props = defineProps({
  value: {
    type: Number,
    required: true,
    default: 0,
    validator: (value) => value >= 0 && value <= 100,
  },
  bothway: {
    type: Boolean, // 是否开启双向进度条
    default: false,
  },
  color: {
    type: String,
    default: '#409eff',
  },
  restColor: {
    type: String,
    default: '#dcdcdc',
  },
  showPercent: {
    type: Boolean,
    default: true,
  },
  size: {
    type: String,
    default: 'default',
  },
  tooltipProps: {
    type: Object,
    default: () => ({
      width: 30,
      trigger: 'hover',
      placement: 'top',
    }),
  },
})

const emit = defineEmits(['click'])

const progress = ref(props.value)

watch(
  () => props.value,
  (newValue) => {
    progress.value = newValue
  },
)

const progressStyle = computed(() => {
  const styleSize = {
    large: {
      width: '8rem',
      height: '.7rem',
      fontSize: '16px',
    },
    default: {
      width: '7rem',
      height: '.6rem',
      fontSize: '14px',
    },
    small: {
      width: '5rem',
      height: '.4rem',
      fontSize: '12px',
    },
  }
  return styleSize[props.size]
})

const handleClick = () => {
  emit('click', progress.value)
}
</script>

<template>
  <div class="progress-bar-wrap">
    <div
      class="progress-bar"
      :style="progressStyle"
      @click="handleClick"
    >
      <el-popover
        :placement="tooltipProps.placement"
        :width="tooltipProps.width"
        :trigger="tooltipProps.trigger"
      >
        <template #reference>
          <div class="progress-bar-inner-wrap">
            <div
              class="progress-bar-inner"
              :style="{ width: `${progress}%`, backgroundColor: color }"
            />
            <div
              class="progress-bar-inner-anchor"
              :style="{ width: `${progress + 4}%` }"
            />
          </div>
        </template>

        <template #default>
          <slot name="tooltip-right" />
        </template>
      </el-popover>
      <el-popover
        v-if="bothway"
        :placement="tooltipProps.placement"
        :width="tooltipProps.width"
        :trigger="tooltipProps.trigger"
      >
        <template #reference>
          <div
            class="progress-bar-inner-right"
            :style="{ width: `${100 - progress}%`, backgroundColor: restColor }"
          />
        </template>
        <template #default>
          <slot name="tooltip-left" />
        </template>
      </el-popover>
    </div>
    <div
      v-show="showPercent"
      :style="{
        fontSize:progressStyle.fontSize
      }"
    >
      {{ value }}%
    </div>
  </div>
</template>

<style lang="scss">
@use "../../../theme-chalk/src/progress/progress.scss";

</style>
