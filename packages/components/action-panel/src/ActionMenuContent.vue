<script setup>
import ActionMenuDivider from './ActionMenuDivider.vue'

defineProps({
  divider: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <div class="fy-action-menu-content">
    <slot />
    <ActionMenuDivider v-show="divider" />
  </div>
</template>

<style scoped lang='scss'>

.fy-action-menu-content {
  padding: 0.7173rem 0;
  box-sizing: border-box;
}

</style>
