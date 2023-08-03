<script setup>
import { ref, computed } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { tmplProps } from '@hitotek/fuzzy-ui-utils'
import { FYInput } from '../../input'

const props = defineProps({
  ...tmplProps,
  activeIdx: {
    type: Number,
    default: 0,
  },
  searchVal: {
    type: String,
    default: '',
  },
})

const emits = defineEmits(['update:activeIdx', 'update:searchVal'])

const currentIdx = computed({
  get() {
    return props.activeIdx
  },
  set(val) {
    emits('update:activeIdx', val)
  },
})

const inputVal = computed({
  get() {
    return props.searchVal
  },
  set(val) {
    emits('update:searchVal', val)
  },
})

const translateX = ref()

const changeActiveTab = (item, idx) => {
  currentIdx.value = idx
  translateX.value = `${idx * 100}%`
}
</script>

<template>
  <div class="member-select-header">
    <div class="input-search">
      <FYInput
        v-model="inputVal"
        placeholder="搜索"
      >
        <template #suffix>
          <el-divider direction="vertical" />
          <el-icon size="18">
            <Search />
          </el-icon>
        </template>
      </FYInput>
    </div>
    <div class="header-content">
      <div class="segment">
        <div
          v-for="(item,idx) in template"
          :key="idx"
          class="segment-item"
          :class="{active: idx === activeIdx}"
          @click="changeActiveTab(item,idx)"
        >
          <span> {{ item.label }}</span>
        </div>
        <div
          class="animate-motion"
          :style="{
            '--x': translateX,
            '--item-width': `calc(100% / ${template.length})`,
          }"
        />
      </div>
    </div>
  </div>
</template>
