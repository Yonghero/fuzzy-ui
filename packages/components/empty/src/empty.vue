<script setup>
import NoResult from './no-results.svg'

defineOptions({
  name: 'FYEmpty',
})

</script>

<template>
  <el-empty
    :image="NoResult"
    v-bind="$attrs"
  />
</template>
