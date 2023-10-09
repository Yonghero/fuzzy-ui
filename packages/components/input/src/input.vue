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

const emit = defineEmits(['focus', 'blur', 'switchChange'])
const props = defineProps({
  // 圆角
  round: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: '请输入',
  },
  limit: {
    type: [Number, String],
    default: 0,
  },
  type: {
    type: String,
    default: 'text',
  },
  textarea: {
    type: [Array, String, Boolean],
    default: undefined,
  },
  // 是否伸缩
  flex: {
    type: Boolean,
    default: false,
  },
  // 是否有筛选看
  filterList: {
    type: Array,
    default: () => [],
  },
  // 是否可筛选多个
  filterMultiple: {
    type: Boolean,
    default: false,
  },
  // 定义value,防止绑定value到原生标签上影响后续v-model的使用
  // eslint-disable-next-line
  value: {
  },
  // 辅助树状结构组件的自动focus功能
  autoFocus: {
    type: [Boolean, String],
    default: false,
  },
})

const slot = useSlots()
const getClass = computed(() => [
  'fy-input',
  props.round ? 'round' : '',

].filter(Boolean))
const getType = computed(() => {
  if (props.type !== 'text' && props.type) {
    return props.type
  }
  if (!props.textarea && props.textarea !== '') {
    return 'text'
  }
  return 'textarea'
})
const getAutosize = computed(() => {
  if (props.textarea && props.textarea.length) {
    return { minRows: props.textarea[0], maxRows: props.textarea[1] }
  }
  if (props.textarea === '' || props.textarea) {
    return { minRows: 2, maxRows: 4 }
  }
  return false
})

const handleFocus = (e) => {
  if (props.flex) {
    // 伸缩
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
const handleIconClick = () => {
  isFilter.value = !isFilter.value
  return null
}
const filterClose = () => {
  isFilter.value = false
}
const switchGroupValue = ref([])
switchGroupValue.value = props.filterMultiple
  ? props.filterList.map((item) => ({ id: item.id, value: item.value }))
  : props.filterList.map((item, idx) => ({ id: item.id, value: idx === 0 }))

// 主动触发对外暴露
emit('switchChange', switchGroupValue.value)

const switchChange = (val, index) => {
  if (!props.filterMultiple) {
    switchGroupValue.value.forEach((s, switchIdx) => {
      if (!(switchIdx === index && val === true)) {
        s.value = false
      }
    })
  }
  emit('switchChange', switchGroupValue.value)
}
const myRef = ref(null)
// 树状结构中的input自动focus
setTimeout(() => {
  if (props.autoFocus !== false) {
    myRef.value.focus()
  }
}, 0)
// 树状结构回车后的blur效果
const handleEnter = () => {
  emit('enter', props.modelValue)
  myRef.value.blur()
}

</script>

<template>
  <div class="fy-input-wrap">
    <el-input
      v-bind="($attrs)"
      ref="myRef"
      :class="getClass"
      :placeholder="props.placeholder"
      :show-word-limit="!!props.limit"
      :maxlength="props.limit ? props.limit : ''"
      :type="getType"
      :autosize="getAutosize"
      @focus="handleFocus"
      @blur="handleBlur"
      @keyup.enter="handleEnter"
    >
      <template
        v-if="slot && slot.prefix"
        #prefix
      >
        <slot name="prefix" />
      </template>
      <template
        v-if="(slot && slot.suffix) || (props.filterList && props.filterList.length)"
        #suffix
      >
        <el-icon v-if="props.filterList && props.filterList.length">
          <ArrowDown
            :class="[{'arrow-select': isFilter}, 'my-arrow-down']"
            @click.stop="handleIconClick"
          />
        </el-icon>
        <slot
          v-else
          name="suffix"
        />
      </template>
    </el-input>
    <template v-if="props.filterList && props.filterList.length">
      <el-card
        v-if="isFilter"
        v-click-outside:my-arrow-down="filterClose"
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
            v-model="switchGroupValue[index].value"
            :name="item.name"
            class="card-item-value"
            @change="(val) => {
              switchChange(val, index)
            } "
          />
        </div>
      </el-card>
    </template>
  </div>
</template>

<style lang="scss" scoped>
@use '../../../theme-chalk/src/input/input.scss';

</style>
