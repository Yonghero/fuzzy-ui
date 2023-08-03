<script setup>
import { FYMemberSelect, FYButton } from '@hitotek/fuzzy-ui-components'
import { ref } from 'vue'

const visible = ref(false)

const tmpl = [
  {
    label: '成员',
    value: 'member',
    type: 'select',
    defaultValue: ['lew'],
    options: [
      { label: '李恩伟', value: 'lew' },
      { label: '王大美', value: 'wdm1' },
      { label: '王大美', value: 'wdm2' },
      { label: '王大美', value: 'wdm3' },
      { label: '王大美', value: 'wdm4' },
      { label: '王大美', value: 'wdm5' },
      { label: '王大美', value: 'wdm6' },
      { label: '王大美', value: 'wdm7' },
    ],
  },
  {
    label: '部门',
    value: 'member1',
    type: 'tree',
    defaultValue: ['lew', 'xxb'],
    options: [
      {
        label: '前端',
        value: 'qd',
        id: 'qd',
        children: [{ label: '李恩伟', value: 'lew', member: true }],
      },
      {
        label: '后端',
        value: 'hd',
        id: 'hd',
        children: [{ label: '徐小包', value: 'xxb', member: true }],
      },
    ],
  },
]

function onChecked(values) {
  console.log('🚀 ~ file: basic.vue:47 ~ onChecked ~ values:', values)
}
</script>

<template>
  <div style="margin: 1rem">
    <FYMemberSelect
      ref="memberEle"
      v-model:visible="visible"
      :template="tmpl"
      @checked="onChecked"
    >
      <FYButton>
        open me
      </FYButton>
    </FYMemberSelect>
  </div>
</template>
