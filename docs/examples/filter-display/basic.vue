<script setup>
import { FYFilterDisplay } from '@hitotek/fuzzy-ui-components'

const tmpl = [
  {
    label: '负责人',
    type: 'input',
    value: 'fzr',
    defaultValue: '王大陆',
    onChange({ value }) {
      // console.log('🚀 ~ file: basic.vue:11 ~ onChange ~ e:', value)
    },
  },
  {
    label: '创建人',
    type: 'select',
    value: 'createperson',
    defaultValue: [2],
    options: [{ label: '李校长', value: 1 }, { label: '王美丽', value: 2 }],
    onChange({ value }) {
      // console.log('🚀 ~ file: basic.vue:21 ~ onChange ~ e:', value)
    },
  },
]

function onChange(parmas) {
  console.log('🚀 ~ file: basic.vue:27 ~ onChange ~ parmas:', parmas)
}

</script>

<template>
  <div style="margin: 1rem">
    <div class="demo">
      <FYFilterDisplay
        :template="tmpl"
        @change="onChange"
      />
    </div>
  </div>
</template>

<style scope lang="sass">
html:not(.dark)
  --border-color:  #eee

html.dark
  --border-color:  rgb(45 42 42)
.demo
  width: 100%
  padding: 7px 5px
  border-top: 1px solid var(--border-color)
  border-bottom: 1px solid var(--border-color)
</style>
