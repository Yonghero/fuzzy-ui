<script setup>
import { ref } from 'vue'

const value = ref(true)
const change = () => {
}
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
