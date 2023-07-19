<script setup>

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
    <el-divider v-show="divider" />
  </div>
</template>
