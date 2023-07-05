<template>
  <div style="margin: 20px">
    <div class="mb-4">
      <p>圆角</p>
      <FYInput
        v-model="value1"
        round
      />
      <p>前后图标</p>
      <FYInput v-model="value2">
        <template #prefix>
          <img
            src="./icon.png"
            alt=""
            class="prefix-img"
          >
        </template>
        <template #suffix>
          <img
            src="./icon.png"
            alt=""
            class="prefix-img"
          >
        </template>
      </FYInput>
      <p>支持字数限制</p>
      <FYInput
        v-model="value3"
        limit="10"
      />
      <p>支持长文本</p>
      <FYInput
        v-model="value4"
        :textarea="[3,6]"
      />
      <p>支持伸缩</p>
      <FYInput
        v-model="value5"
        flex
      />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
const value5 = ref('')

</script>
<style>
.mb-4 {
  margin-bottom: 20px;
}
.prefix-img {
  width: 20px;
  height: 20px;
}
</style>
