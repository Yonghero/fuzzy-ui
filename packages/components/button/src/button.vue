<template>
  <el-button type="primary" class="my-button">我是 yh-button</el-button>
</template>
<script>
  import { ElButton } from 'element-plus'
  export default {
    name: 'YHButton',
    components: { ElButton },
  }
</script>

<style lang="scss">
@use "../../../theme-chalk/src/button/button.scss";
</style>