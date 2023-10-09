<template>
  <div style="margin: 20px">
    <div class="mb-4">
      <FYInput
        v-model="value"
        :filter-list="filterList"
        @switch-change="switchChange"
      />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const value = ref('')
const filterList = ref([{
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
}])
const switchChange = (value) => {
  console.log('value: ', value)
}

</script>
<style>
.mb-4 {
  margin-bottom: 20px;
}
</style>
