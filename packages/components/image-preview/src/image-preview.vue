<script setup>

defineOptions({
  name: 'FYImagePreview',
})

defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
})

const emits = defineEmits(['update:visible', 'close'])

function onClose() {
  emits('update:visible', false)
  emits('close')
}

</script>

<template>
  <div
    v-if="visible"
    class="fy-image-preview-wrap"
  >
    <el-image-viewer
      v-bind="$attrs"
      teleported
      @close="onClose"
    />
  </div>
  <div @click="emits('update:visible', true)">
    <slot />
  </div>
</template>

<style lang="scss">
@use "../../../theme-chalk/src/image-preview/image-preview.scss";
</style>
