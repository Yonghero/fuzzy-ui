<script setup>
import { FYTopNavigation } from '@hitotek/fuzzy-ui-components'

const tmpl = [
  {
    label: '页面一',
    value: 0,
  },
  {
    label: '页面二',
    value: 1,
  },
  {
    label: '页面三',
    value: 2,
  },
]

const config = {
  title: 'test',
  menu: tmpl,
}

function onSelect({ key, keyPath, item }) {
  console.log(key, keyPath, item)
}

function onTmplItemClick(item) {
  console.log('🚀 ~ file: basic.vue:48 ~ onTmplItemSelect ~ item:', item)
}

</script>

<template>
  <div style="margin: 1rem">
    <FYTopNavigation
      :config="config"
      @select="onSelect"
      @itemClick="onTmplItemClick"
    >
      <template #operation>
        <FYInput style="width:200px;margin-right: 10px;" />
        <span class="avatar-default">李俊</span>
      </template>
    </FYTopNavigation>
  </div>
</template>
