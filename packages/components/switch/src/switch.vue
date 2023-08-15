<script setup>
import { ElSwitch, ElMessage } from 'element-plus'
import { computed, nextTick } from 'vue'
import { isAsyncFunction } from '@hitotek/fuzzy-ui-utils'

defineOptions({
  name: 'FYSwitch',
})
const props = defineProps({
  value: {

  },
  modelValue: {
    type: [Boolean, String, Number],
    default: false,
  },
  // 打开时的值
  activeValue: {
    type: [Boolean, String, Number],
    default: true,
  },
  // 关闭时的值
  inActiveValue: {
    type: [Boolean, String, Number],
    default: false,
  },
  // 打开状态下的消息提示
  activeMessage: {
    type: String,
    default: '开启成功',
  },
  // 关闭状态下的消息提示
  inActiveMessage: {
    type: String,
    default: '关闭成功',
  },
  // 状态改变失败时的消息提示
  changeFailMessage: {
    type: String,
    default: '切换状态失败',
  },
  // 打开关闭的回调事件
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
const emit = defineEmits(['change', 'update:modelValue'])
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
  // 回调事件是使用async修饰的异步事件时
  if (isAsyncFunction(props.cb)) {
    try {
      await props.cb()
      emit('update:modelValue', e === props.activeValue ? props.activeValue : props.inActiveValue)
      nextTick(() => {
        ElMessage(getDefaultMsg.value)
      })
    } catch (error) {
      emit('update:modelValue', e === props.activeValue ? props.activeValue : props.inActiveValue)
      // nextTick(() => {
      //   emit('update:modelValue', e === props.activeValue ? props.inActiveValue : props.activeValue)
      // })
      ElMessage({
        message: props.changeFailMessage,
        type: 'error',
      })
    } finally {
      emit('change', e)
    }
  // 普通事件
  } else if (typeof props.cb === 'function') {
    try {
      props.cb()
      emit('update:modelValue', e === props.activeValue ? props.activeValue : props.inActiveValue)
      nextTick(() => {
        ElMessage(getDefaultMsg.value)
      })
    } catch (error) {
      emit('update:modelValue', e === props.activeValue ? props.activeValue : props.inActiveValue)
      // nextTick(() => {
      //   emit('update:modelValue', e === props.activeValue ? props.inActiveValue : props.activeValue)
      // })
      ElMessage({
        message: props.changeFailMessage,
        type: 'error',
      })
    } finally {
      emit('change', e)
    }
  } else {
    emit('update:modelValue', e === props.activeValue ? props.activeValue : props.inActiveValue)
    nextTick(() => {
      ElMessage(getDefaultMsg.value)
      emit('change', e, e === props.activeValue ? props.inActiveValue : props.activeValue)
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
