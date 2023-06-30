<script>
import { ElButton } from 'element-plus'
  export default {
    name: 'YHButton',
    components: { ElButton },
  }
</script>

<template>
  <el-button 
  v-bind="$attrs" 
  @click="handleClick">
    <slot />
  </el-button>
</template>

<style lang="scss">
@use "../../../theme-chalk/src/button/button.scss";
</style>