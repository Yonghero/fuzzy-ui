<script setup>
import {
  ref,
} from 'vue'

const value = ref(true)
</script>

<template>
  <div class="parent">
    <p>模板一</p>
    <FYSkeleton />
    <p>模板二</p>
    <FYSkeleton type="2" />
    <p>模板三</p>
    <FYSkeleton type="3" />
  </div>
</template>
<style lang="scss" scoped>
.parent {
  position: fixed;
  width: 70%;
  height: 70%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: auto;
}
</style>
