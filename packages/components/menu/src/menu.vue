<script setup lang="jsx">
import { computed } from 'vue'
import { tmplProps } from '@hitotek/fuzzy-ui-utils'
import MenuItem from './MenuItem.vue'

defineOptions({
  name: 'FYMenu',
})

const props = defineProps({
  ...tmplProps,
})

const emits = defineEmits(['select', 'itemClick'])

const activeIndex = computed(() => props.template[0].value)
const handleSelect = (key, keyPath, item) => {
  emits('select', { key, keyPath, item })
}
const onTmplItemSelect = (item) => {
  emits('itemClick', item)
}

// init here
</script>

<template>
  <div class="fy-menu-wrap">
    <el-menu
      :default-active="activeIndex"
      class="fy-menu-el"
      mode="horizontal"
      v-bind="$attrs"
      @select="handleSelect"
    >
      <MenuItem
        v-for="tmpl in template"
        :key="tmpl.value"
        :tmplItem="tmpl"
        @select="onTmplItemSelect"
      />
    </el-menu>
  </div>
</template>

<style lang="scss">
@use "../../../theme-chalk/src/menu/menu.scss"
</style>
