<script setup>
import { FYEmpty } from '@hitotek/fuzzy-ui-components'
</script>

<template>
  <div style="padding: 10px">
    <div>size 50</div>
    <FYEmpty :image-size="50" />
    <div style="margin: 20px 0;border-bottom: 1px solid gainsboro;" />
    <div>size 500</div>
    <FYEmpty :image-size="500" />
  </div>
</template>
