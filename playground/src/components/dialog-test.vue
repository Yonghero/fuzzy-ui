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
      value: 'input2',
    },
    {
      type: 'select',
      label: 'select',
      value: 'select2',

    },

  ],
})
const formModel = ref({
  input: '',
  select: '',
})
</script>

<template>
  <p>dialog外壳</p>
  <FYDialog
    v-model="value"
    :dialogConfig="dialogConfig"
    :formModel="formModel"
  />
</template>
