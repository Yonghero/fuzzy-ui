<script setup>
import { ref } from 'vue'

const visible = ref(false)
const visible1 = ref(false)

const visible2 = ref(false)

</script>

<template>
  <div style="margin: 1rem;display: flex; column-gap: 2rem;">
    <FYFilePreview
      v-model:visible="visible"
      src="https://501351981.github.io/vue-office/examples/dist/static/test-files/test.docx"
    >
      <FYButton>点我预览word</FYButton>
    </FYFilePreview>

    <FYFilePreview
      v-model:visible="visible1"
      src="https://501351981.github.io/vue-office/examples/dist/static/test-files/test.xlsx"
    >
      <FYButton>点我预览excel</FYButton>
    </FYFilePreview>

    <FYFilePreview
      v-model:visible="visible2"
      src="https://501351981.github.io/vue-office/examples/dist/static/test-files/test.pdf"
    >
      <FYButton>点我预览pdf</FYButton>
    </FYFilePreview>
  </div>
</template>
