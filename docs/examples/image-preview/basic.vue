<script setup>
import { FYImagePreview } from '@hitotek/fuzzy-ui-components'
import { ref } from 'vue'

const list = [
  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
  'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
  'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
  'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
  'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
]

const visible = ref(false)
const visible1 = ref(false)

</script>

<template>
  <div style="margin: 1rem;display: flex; column-gap: 5rem;">
    <FYImagePreview
      v-model:visible="visible"
      :url-list="list"
    >
      <FYButton>点击我预览</FYButton>
    </FYImagePreview>

    <FYImagePreview
      v-model:visible="visible1"
      :url-list="list"
    >
      <FYButton
        link
        style="position: absolute;color: red"
      >
        点我也行
      </FYButton>
      <img
        :src="list[0]"
        alt=""
        style="width: 100px; height: 50px;"
      >
    </FYImagePreview>
  </div>
</template>
