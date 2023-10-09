<script setup>
import { ElButton } from 'element-plus'
import { ref } from 'vue'

defineOptions({
  name: 'FYButton',
})

const emits = defineEmits(['click'])

const props = defineProps({
  throttle: { // 是否开启节流
    type: Boolean,
    default: true,
  },
})

const throttleDuration = 300

const record = ref(0)

const handleClick = () => {
  if (props.throttle) {
    const newTime = new Date()
    if (newTime.getTime() - record.value > throttleDuration) {
      emits('click')
    }
    record.value = new Date().getTime()
  } else {
    emits('click')
  }
}

</script>

<template>
  <el-button
    v-bind="$attrs"
    @click="handleClick"
  >
    <slot />
  </el-button>
</template>
