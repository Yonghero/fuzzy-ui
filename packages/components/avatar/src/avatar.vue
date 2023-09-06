<script setup>
import { getRandomColor } from '@hitotek/fuzzy-ui-utils'
import { computed } from 'vue'

defineOptions({
  name: 'FYAvatar',
})

defineProps({
  name: {
    type: String,
    default: 'hh',
  },
  full: {
    type: Boolean,
    default: false,
  },
})

const defaultIconStyle = computed(() => ({
  borderRadius: '50%',
  background: getRandomColor(),
  padding: '5px 8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  height: '100%',
}))

</script>

<template>
  <div class="fy-avatar-wrap">
    <div
      :style="defaultIconStyle"
    >
      {{ !full ? name.slice(0,1): name }}
    </div>
  </div>
</template>

<style lang="scss">
@use "../../../theme-chalk/src/avatar/avatar.scss";
</style>
