<script setup>
import { ref } from 'vue'
import { FYUpload } from '@hitotek/fuzzy-ui-components'

const config = ref({
  export: true,
  url: 'https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-assets/extension/0.3.9/package.crx~tplv-t2oaga2asx-image.image',
  name: 'test',
})
</script>

<template>
  <div style="margin: 1rem">
    <FYUpload
      :config="config"
    />
  </div>
</template>
