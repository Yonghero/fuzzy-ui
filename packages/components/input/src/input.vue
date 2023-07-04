<script setup lang="jsx">
import {
  ElInput, ElIcon, ElCard, ElSwitch,
} from 'element-plus'
import {
  ref, computed, useSlots,
} from 'vue'
import { ArrowDown } from '@element-plus/icons-vue'

defineOptions({
  name: 'FYInput',
})

const emit = defineEmits(['focus', 'blur'])
const props = defineProps({
  // 圆角
  round: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: '搜索（Ctrl+G）',
  },
  limit: {
    type: Number,
    default: 0,
  },
  type: {
    type: String,
    default: 'text',
  },
  textarea: {
    type: Array || undefined || String,
    default: undefined,
  },
  flex: {
    type: Boolean,
    default: false,
  },
  filter: {
    type: Boolean || String,
    default: false,
  },
  filterList: {
    type: Array,
    default: () => [],
  },
})
const slot = useSlots()
const getClass = computed(() => [
  'fy-input',
  props.round ? 'round' : '',

].filter(Boolean))
const getType = computed(() => {
  if (!props.textarea && props.textarea !== '') {
    return 'text'
  }
  return 'textarea'
})
const getAutosize = computed(() => {
  if (props.textarea && props.textarea.length) {
    return { minRows: props.textarea[0], maxRows: props.textarea[1] }
  }
  if (props.textarea === '') {
    return { minRows: 2, maxRows: 4 }
  }
  return false
})
const handleFocus = (e) => {
  if (props.flex) {
    e.srcElement.style.width = `${e.srcElement.getBoundingClientRect().width + 100}px`
  }
}

const handleBlur = (e) => {
  if (props.flex) {
    e.srcElement.style.width = `${e.srcElement.getBoundingClientRect().width - 100}px`
  }
  emit('blur', e)
}
const isFilter = ref(false)
const handleIconClick = (e) => {
  isFilter.value = !isFilter.value
}
const filterClose = () => {
  isFilter.value = false
}

</script>

<template>
  <div class="fy-input-wrap">
    <el-input
      v-bind="$attrs"
      :class="getClass"
      :placeholder="props.placeholder"
      :show-word-limit="!!props.limit"
      :maxlength="props.limit ? props.limit : ''"
      :type="getType"
      :autosize="getAutosize"
      @focus="handleFocus"
      @blur="handleBlur"
    >
      <template
        v-if="slot && slot.prefix"
        #prefix
      >
        <slot name="prefix" />
      </template>
      <template
        v-if="(slot && slot.suffix) || (props.filter || props.filter === '')"
        #suffix
      >
        <el-icon v-if="props.filter || props.filter === ''">
          <ArrowDown
            :class="{'arrow-select': isFilter}"
            @click.stop="handleIconClick"
          />
        </el-icon>
        <slot
          v-else
          name="suffix"
        />
      </template>
    </el-input>
    <el-card
      v-show="isFilter"
      v-click-outside="filterClose"
      class="fy-input-card"
    >
      <div class="card-title">
        搜索范围
      </div>
      <div
        v-for="(item, index) in props.filterList"
        :key="index"
        class="card-item"
      >
        <span class="card-item-name">{{ item.name }}</span>
        <el-switch
          v-model="item.value"
          class="card-item-value"
        />
      </div>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
@use '../../../theme-chalk/src/input/input.scss';
.arrow-select {
  color: #6698ff
}

</style>
