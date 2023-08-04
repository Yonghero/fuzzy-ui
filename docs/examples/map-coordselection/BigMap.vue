<script setup>
import { FYMapCoordselection, FYInput } from '@hitotek/fuzzy-ui-components'
import { ref, computed } from 'vue'
import { Position } from '@element-plus/icons-vue'
import { BigMapRenderer } from './bigmap-renderer'

// 绑定的坐标点位
const coord = ref({ lat: 39.99668, lng: 116.49662 })

// 控制标选点位的弹窗展示
const visible = ref(false)

const value = computed(() => `${coord.value.lat},${coord.value.lng}`)

</script>

<template>
  <div style="margin: 1rem">
    <FYMapCoordselection
      v-model="coord"
      v-model:visible="visible"
      :renderer="BigMapRenderer"
    >
      <FYInput
        v-model="value"
        disabled
        style="width: 70%;"
      >
        <template #suffix>
          <el-icon
            size="20"
            style="cursor: pointer"
          >
            <Position />
          </el-icon>
        </template>
      </FYInput>
    </FYMapCoordselection>
  </div>
</template>
