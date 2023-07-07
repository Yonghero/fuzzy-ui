<script setup>
import {
  computed, useSlots, ref, defineEmits, watch,
} from 'vue'

const value = ref(true)
const change = (e) => {
  console.log('父组件接收到e了', e)
}
// const promiseCb =  new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('resolve')
//     console.log('一秒后')
//   }, 3000)
// })
const asyncFn = () => {
}

</script>

<template>
  <p>切换状态消息提示</p>
  <FYSwitch
    v-model="value"
    :cb="asyncFn"
    @change="change"
  />
</template>
