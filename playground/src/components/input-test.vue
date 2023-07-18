<script setup>
import { Calendar, Search } from '@element-plus/icons-vue'
import { ref } from 'vue'

const v1 = ref('222')
const v2 = ref('333')
const myFocus = () => {
}
const myBlur = () => {
}
const switchChange = () => {
}

const filterList = ref([
  {
    name: '编号',
    id: 'no',
    value: true,
  },
  {
    name: '标题',
    id: 'title',
    value: true,
  },
  {
    name: '标题2',
    id: 'title2',
    value: true,
  },

])
</script>

<template>
  <div class="wrap">
    <span>你好</span>
    <FYInput
      v-model="v1"
      size="default"
      :textarea="[3,6]"
      limit="22"
      flex
    />
  </div>
  <FYInput
    size="large"
    limit="10"
    flex
    @focus="myFocus"
    @blur="myBlur"
  />
  <FYInput
    size="small"
    flex
    :filter-list="filterList"
    @switch-change="switchChange"
  />

  <FYInput
    v-model="v2"
    size="default"
    round
    textarea
    flex
  />
  <FYInput
    size="default"
    round
    :suffix-icon="Calendar"
    :prefix-icon="Search"
    flex
  >
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
</template>
<style scoped lang="scss">
.prefix-img {
  width: 20px;
  height: 20px;
}
.wrap {
  width: 800px;
}
</style>
