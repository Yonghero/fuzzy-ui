<script setup>
import {
  ref,
} from 'vue'

const value = ref(true)
</script>

<template>
  <p>dialog外壳</p>
  <FYDialog
    v-model="value"
    title="基线"
  />
</template>
