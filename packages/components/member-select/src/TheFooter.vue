<script setup>

defineProps({
  checkedValues: {
    type: Array,
    default: () => ([]),
  },
})

</script>

<template>
  <div class="fy-member-footer">
    已选<span style="color: var(--el-color-primary)">
      {{ checkedValues.length }}
    </span>项
  </div>
</template>

<style scoped lang='scss'>

</style>
