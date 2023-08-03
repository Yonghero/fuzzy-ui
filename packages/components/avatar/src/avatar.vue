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
})

const defaultIconStyle = computed(() => ({
  borderRadius: '50%',
  background: getRandomColor(),
  width: '22px',
  height: '22px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
}))

</script>

<template>
  <div class="fy-avatar-wrap">
    <div
      :style="defaultIconStyle"
    >
      {{ name.slice(0,1) }}
    </div>
  </div>
</template>

<style lang="scss">
@use "../../../theme-chalk/src/avatar/avatar.scss";
</style>
