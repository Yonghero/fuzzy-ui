<script setup>
</script>

<template>
  <div class="fy-divider">
    <div class="action-panel-divider-title">
      <slot />
    </div>
  </div>
</template>

<style scoped lang='scss'>
  @use "../../../theme-chalk/src/theme-light.scss";

  .fy-divider {
    display: block;
    border-top: solid 1px var(--fy-border-color);
  }
</style>
