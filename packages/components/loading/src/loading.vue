<script setup>
import { onMounted, ref } from 'vue'

defineOptions({
  name: 'FYLoading',
})
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: 'page',
  },
  background: {
    type: String,
    default: '#fff',
  },
})
onMounted(() => {})
// init here
</script>

<template>
  <div
    v-show="props.modelValue"
    v-if="props.type === 'page'"
    class="fy-loading-wrap"
    :style="{background: props.background}"
  >
    <div
      class="loading-wrapper"
    >
      <div class="loading">
        <div>
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  </div>
  <div
    v-show="props.modelValue"
    v-else-if="props.type === 'module'"
    class="fy-loading-wrap-module"
    :style="{background: props.background}"
  >
    <div
      class="loading-module-wrapper"
    >
      <h4>
        <span style="display: none" />
        <div class="loading-ellipsis">
          <span class="spot" />
        </div>
      </h4>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use '../../../theme-chalk/src/loading/loading.scss';
</style>
