<script setup>
import { watchEffect } from 'vue'

const props = defineProps({
  checkedValues: {
    type: Array,
    default: () => ([]),
  },
})

watchEffect(() => {
  console.log(props.checkedValues, '=========')
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
