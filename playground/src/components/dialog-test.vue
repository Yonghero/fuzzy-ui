<script setup>
import {
  ref,
} from 'vue'

const value = ref(true)
const dialogConfig = ({
  formModelItems: [
    {
      type: 'input',
      label: 'input',
      value: 'input',
    },
    {
      type: 'select',
      label: 'select',
      value: 'select',
    },
    {
      type: 'createRangeDatePicker',
      label: 'createRangeDatePicker',
      value: 'createRangeDatePicker',
    },
  ],
})
</script>

<template>
  <p>dialog外壳</p>
  <FYDialog
    v-model="value"
    :dialogConfig="dialogConfig"
  />
</template>
