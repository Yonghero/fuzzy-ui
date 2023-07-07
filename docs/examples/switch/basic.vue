<template>
  <div style="margin: 20px">
    <div class="mb-4">
      <p>切换状态消息提示</p>
      <FYSwitch
        v-model="value"
        :cb="asyncFn"
        @change="change"
      />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

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
<style>
.mb-4 {
  margin-bottom: 20px;
}

</style>
