<template>
  <div style="margin: 20px">
    <div class="mb-4">
      <p>切换状态消息提示</p>
      <FYSwitch
        v-model="value"
        :cb="asyncFn"
        @change="change"
      />
      <p>自定义消息提示</p>
      <FYSwitch
        v-model="value1"
        :cb="asyncFn"
        activeMessage="XXX任务已开启"
        inActiveMessage="XXX任务已关闭"
        @change="change"
      />
      <p>状态改变前插入事件（包裹async 成功事件）</p>
      <FYSwitch
        v-model="value2"
        :cb="asyncFn4"
        @change="change"
      />
      <p>状态改变前插入事件 （包裹async 失败事件）</p>
      <FYSwitch
        v-model="value5"
        :cb="asyncFn2"
        @change="change"
      />
      <p>自定义状态值</p>
      <FYSwitch
        v-model="value3"
        :activeValue="1"
        :inActiveValue="2"
        @change="change"
      />
      <p>状态改变失败</p>
      <FYSwitch
        v-model="value4"
        :cb="asyncFn3"
        @change="change"
      />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const value = ref(true)
const value1 = ref(true)
const value2 = ref(true)
const value3 = ref(1)
const value4 = ref(true)
const value5 = ref(true)
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
const asyncFn2 = async () => new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('错误'))
  }, 3000)
})
const asyncFn4 = async () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  }, 3000)
})
const asyncFn3 = () => {
  const a = 1
  a.b = 22
}

</script>
<style>
.mb-4 {
  margin-bottom: 20px;
}

</style>
