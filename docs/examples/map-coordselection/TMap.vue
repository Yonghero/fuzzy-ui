<script setup>
import { FYMapCoordselection, FYInput } from '@hitotek/fuzzy-ui-components'
import { ref, computed } from 'vue'
import { Position } from '@element-plus/icons-vue'
import { TMapRenderer } from './tmap-renderer'

const coord = ref({ lat: 39.99668, lng: 116.49662 })
const visible = ref(false)

const value = computed(() => `${coord.value.lat},${coord.value.lng}`)

</script>

<template>
  <div style="margin: 1rem">
    <FYMapCoordselection
      v-model="coord"
      v-model:visible="visible"
      :renderer="TMapRenderer"
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
