<script setup>
import { ElSwitch, ElMessage } from 'element-plus'
import { computed, nextTick, ref } from 'vue'
import { isAsyncFunction } from '@hitotek/fuzzy-ui-utils/tool'

defineOptions({
  name: 'FYSwitch',
})
const props = defineProps({
  modelValue: {
    type: null,
    default: null,
  },
  activeValue: {
    type: [Boolean, String, Number],
    default: true,
  },
  inActiveValue: {
    type: [Boolean, String, Number],
    default: false,
  },
  activeMessage: {
    type: String,
    default: '开启成功',
  },
  inActiveMessage: {
    type: String,
    default: '关闭成功',
  },
  changeFailMessage: {
    type: String,
    default: '切换状态失败',
  },
  cb: {
    validator(value) {
      if (isAsyncFunction(value) || typeof value === 'function') {
        return true
      }
      return false
    },
    default: () => {},
  },
})
const emit = defineEmits(['change'])
const getDefaultMsg = computed(() => {
  if (props.modelValue === getActiveValue.value) {
    return {
      message: props.activeMessage || '开启成功',
      type: 'success',
    }
  }
  return {
    message: props.inActiveMessage || '关闭成功',
    type: 'error',
  }
})
const getActiveValue = computed(() => {
  if (['boolean', 'string', 'number'].includes(typeof props.activeValue)) {
    return props.activeValue
  }
  return true
})
const getInActiveValue = computed(() => {
  if (['boolean', 'string', 'number'].includes(typeof props.inActiveValue)) {
    return props.inActiveValue
  }
  return false
})
const emitChange = async (e) => {
  // if (props.cb instanceof Promise) {
  //   console.log('进入promise')
  //   props.cb.then((v) => {
  //     ElMessage(getDefaultMsg.value)
  //   }).catch((e) => {
  //     console.log('promise error', e)
  //     ElMessage({
  //       message: props.changeFailMessage,
  //       type: 'error',
  //     })
  //   }).finally(() => {
  //     emit('change', e)
  //   })
  // } else
  if (isAsyncFunction(props.cb)) {
    try {
      await props.cb()
      nextTick(() => {
        ElMessage(getDefaultMsg.value)
      })
    } catch (error) {
      nextTick(() => {
        emit('update:modelValue', e === props.activeValue ? props.inActiveValue : props.activeValue)
      })
      ElMessage({
        message: props.changeFailMessage,
        type: 'error',
      })
    } finally {
      emit('change', e)
    }
  } else if (typeof props.cb === 'function') {
    try {
      props.cb()
      nextTick(() => {
        ElMessage(getDefaultMsg.value)
      })
    } catch (error) {
      nextTick(() => {
        emit('update:modelValue', e === props.activeValue ? props.inActiveValue : props.activeValue)
      })
      ElMessage({
        message: props.changeFailMessage,
        type: 'error',
      })
    } finally {
      emit('change', e)
    }
  } else {
    nextTick(() => {
      ElMessage(getDefaultMsg.value)
      emit('change', e)
    })
  }
}

// init here
</script>

<template>
  <div class="fy-switch-wrap">
    <el-switch
      v-bind="$attrs"
      :model-value="props.modelValue"
      :active-value="getActiveValue"
      :inactive-value="getInActiveValue"
      @change="emitChange"
    />
  </div>
</template>
