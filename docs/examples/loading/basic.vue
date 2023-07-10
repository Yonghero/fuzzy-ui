<template>
  <div style="margin: 20px">
    <div class="mb-4">
      <p>整个页面loading</p>
      <FYLoading
        v-model="isShow1"
      />
      <el-button @click="handleClick">
        打开loading效果，5000秒后关闭
      </el-button>
      <p>小模块loading</p>
      <FYLoading
        v-model="isShow2"
        type="module"
      />
      <el-button @click="handleClick2">
        打开loading效果，5000秒后关闭
      </el-button>
      <p>切换背景色</p>
      <FYLoading
        v-model="isShow3"
        type="module"
        background="#cacaca"
      />
      <el-button @click="handleClick3">
        打开loading效果，5000秒后关闭
      </el-button>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const isShow1 = ref(false)
const isShow2 = ref(false)
const isShow3 = ref(false)
const handleClick = () => {
  isShow1.value = true
  setTimeout(() => {
    isShow1.value = false
  }, 5000)
}
const handleClick2 = () => {
  isShow2.value = true
  setTimeout(() => {
    isShow2.value = false
  }, 5000)
}
const handleClick3 = () => {
  isShow3.value = true
  setTimeout(() => {
    isShow3.value = false
  }, 5000)
}

</script>
<style>
.mb-4 {
  margin-bottom: 20px;
}

</style>
