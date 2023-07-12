<script setup lang="jsx">
import { ref } from 'vue'
import {
  ElLoading,
} from 'element-plus'

const isShow = ref(false)
const handleClick = () => {
  isShow.value = true
  setTimeout(() => {
    isShow.value = false
  }, 5000)
}

</script>

<template>
  <div>
    <p>整个页面loading</p>
    <FYLoading
      v-model="isShow"
    />
    <el-button @click="handleClick">
      切换
    </el-button>
  </div>
</template>
<style scoped lang="scss">
</style>
