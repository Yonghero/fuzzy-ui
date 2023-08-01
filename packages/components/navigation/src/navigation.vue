<script setup lang="jsx">
import { computed, ref } from 'vue'
import { tmplProps } from '@hitotek/fuzzy-ui-utils'
import MenuItem from './MenuItem.vue'

defineOptions({
  name: 'FYNavigation',
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
const isCollapse = ref(false)
const toggleCollapse = () => {
  isCollapse.value = !isCollapse.value
}

</script>

<template>
  <div :class="[ isCollapse ? 'collapse-wrap' : 'no-collapse-wrap', 'fy-navigation-wrap']">
    <el-menu
      background-color="#48525c"
      :default-active="activeIndex"
      class="fy-menu-el"
      v-bind="$attrs"
      text-color="#ddd"
      active-text-color="#ddd"
      :collapse="isCollapse"
      @select="handleSelect"
    >
      <el-menu-item class="fy-navigation-item-logo">
        <div class="logo">
          <img
            src="https://cdn-aliyun.pingcode.com/static/portal/assets/images/logos/transparent.svg?v=4.158.0"
            class="img"
            alt=""
          >
          <span
            v-if="!isCollapse"
            class="title"
          >联图科技</span>
        </div>
      </el-menu-item>
      <MenuItem
        v-for="tmpl in template"
        :key="tmpl.value"
        :collapse="isCollapse"
        :tmplItem="tmpl"
        @select="onTmplItemSelect"
      />
      <el-menu-item class="fy-navigation-item-footer">
        <div class="footer">
          <img
            src="./assets/menu-icon.png"
            alt=""
            :class="['footer-collapse', {'footer-collapse-reversal': isCollapse}]"
            @click="toggleCollapse"
          >
          <!-- <el-icon
            v-if="!isCollapse"
            class="footer-no-collapse"
            @click="toggleCollapse"
          >
            <Fold />
          </el-icon>
          <el-icon
            v-else
            class="footer-collapse"
            @click="toggleCollapse"
          >
            <Expand />
          </el-icon> -->
        </div>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<style lang="scss">
@use "../../../theme-chalk/src/navigation/navigation.scss"
</style>
