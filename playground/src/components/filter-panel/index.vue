<script setup>
import { ref } from 'vue'
import tmpl from './template'

const visible = ref(false)
</script>

<template>
  <div style="margin: 5rem">
    <FYFilterPanel
      v-model:visible="visible"
      :template="tmpl"
    >
      <el-avatar
        src="https://avatars.githubusercontent.com/u/72015883?v=4"
        @click="visible = true"
      />
    </FYFilterPanel>
  </div>
</template>
