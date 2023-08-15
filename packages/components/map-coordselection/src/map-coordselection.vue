<script setup>

/**
 * @author younghero
 * @Date 2023-8-4
 * @description 地图经纬度选择器
 */

import { computed } from 'vue'
import { BigMapRenderer } from './bigmap-renderer'
import { FYButton } from '../../button'

defineOptions({
  name: 'FYMapCoordselection',
})

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({ lat: null, lng: null }),
  },
  visible: {
    type: Boolean,
    default: false,
  },
  renderer: {
    type: Object,
    default: null,
  },
})

const emits = defineEmits(['update:modelValue', 'update:visible'])

const dialogVisible = computed({
  get() {
    return props.visible
  },
  set(value) {
    emits('update:visible', value)
  },
})

const randomId = `fy_map_coord_${new Date().getTime()}`

const Renderer = props.renderer ? props.renderer : BigMapRenderer

async function open() {
  await Renderer(
    randomId,
    props.modelValue,
    (latlng) => {
      emits('update:modelValue', latlng)
    })
}

</script>

<template>
  <div class="fy-map-coordselection-wrap">
    <el-dialog
      v-model="dialogVisible"
      destroy-on-close
      @open="open"
    >
      <template #header>
        点位选取
      </template>
      <div
        :id="randomId"
        class="map-container"
      />
      <template #footer>
        <span class="dialog-footer">
          <FYButton @click="dialogVisible = false">取消</FYButton>
          <FYButton
            type="primary"
            @click="dialogVisible = false"
          >
            确定
          </FYButton>
        </span>
      </template>
    </el-dialog>
    <div
      class="slot-wrap"
      @click="dialogVisible = true"
    >
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
@use "../../../theme-chalk/src/map-coordselection/map-coordselection.scss";
</style>
