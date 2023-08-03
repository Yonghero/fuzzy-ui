<script setup>
import { FYMemberSelect, FYButton } from '@hitotek/fuzzy-ui-components'
import { ref } from 'vue'

const visible = ref(false)

const open = () => visible.value = true

const tmpl = [
  {
    label: '成员',
    value: 'member',
    type: 'select',
    options: [
      { label: '李恩伟', value: 'lew' },
      { label: '王大美', value: 'wdm' },
    ],
  },
  {
    label: '部门',
    value: 'member1',
    type: 'tree',
    options: [
      {
        label: '前端', value: 'qd', id: 'qd', children: [{ label: '李恩伟', value: 'lew' }],
      },
      {
        label: '后端', value: 'hd', id: 'hd', children: [{ label: '徐小包', value: 'xxb' }],
      },
    ],
  },
]

</script>

<template>
  <div style="margin: 1rem">
    <FYMemberSelect
      v-model:visible="visible"
      :template="tmpl"
    >
      <FYButton @click="open">
        open me
      </FYButton>
    </FYMemberSelect>
  </div>
</template>
