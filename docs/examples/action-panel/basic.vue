<script setup>
import { FYActionPanel } from '@hitotek/fuzzy-ui-components'
import { ref } from 'vue'

const visible = ref(false)
</script>

<template>
  <div style="margin: 1rem">
    <FYActionPanel v-model:visible="visible">
      <el-avatar
        src="https://avatars.githubusercontent.com/u/72015883?v=4"
      />
    </FYActionPanel>
  </div>
</template>
