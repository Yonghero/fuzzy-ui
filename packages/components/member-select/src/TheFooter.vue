<script setup>
defineProps({
  length: {
    type: Number,
    default: 0,
  },
})
</script>

<template>
  <div class="fy-member-footer">
    已选<span style="color: var(--el-color-primary)">
      {{ length }}
    </span>项
  </div>
</template>

<style scoped lang='scss'>

</style>
