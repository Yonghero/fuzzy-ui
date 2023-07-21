<script setup>
import { FYTable } from '@hitotek/fuzzy-ui-components'
import { ref } from 'vue'

const tmpl = [
  {
    label: 'date',
    value: 'date',
  },
  {
    label: 'name',
    value: 'name',
  },
  {
    label: 'address',
    value: 'address',
  },
]

const tableData = ref([
  {
    date: '2016-05-03',
    index: 1,
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    index: 2,
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    index: 3,
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    index: 4,
    address: 'No. 189, Grove St, Los Angeles',
  },
])

</script>

<template>
  <div style="margin: 1rem">
    <FYTable
      :template="tmpl"
      :data="tableData"
    />
  </div>
</template>
