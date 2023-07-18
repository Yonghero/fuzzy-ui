<script setup lang="jsx">
import {
  ElSelect,
  ElOption,
  ElSelectV2,
  ElIcon,
} from 'element-plus'
import { Lock, User } from '@element-plus/icons-vue'
import {
  computed, useSlots, ref, watch,
} from 'vue'
import { getRandomColor } from '@hitotek/fuzzy-ui-utils'

defineOptions({
  name: 'FYSelect',
})

const emit = defineEmits(['change', 'visible-change', 'remove-tag', 'clear', 'blur', 'focus'])
const props = defineProps({
  options: {
    type: Array,
    default: () => [],
  },
  defaultIcon: {
    type: [Boolean, String],
    default: false,
  },
  virtual: {
    type: [Boolean, String],
    default: false,
  },
  modelValue: {
    type: null,
    default: null,
  },
  tag: {
    type: [Boolean, String],
    default: false,
  },
  access: {
    type: [Boolean, String],
    default: false,
  },
  collapseTags: {
    type: [Boolean, String],
    default: true,
  },
  clearable: {
    type: [Boolean, String],
    default: false,
  },
  multiple: {
    type: [Boolean, String],
    default: false,
  },
})

const hasDefaultSlot = computed(() => {
  const slots = useSlots()
  return slots.default
})
const defaultIconStyle = computed(() => ({
  borderRadius: '50%',
  background: getRandomColor(),
  width: '18px',
  height: '18px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
}))
const getClass = ref(['fy-select'])
if (props.access) {
  getClass.value = ['fy-select', 'fy-select-access-w']
}
watch(() => props.modelValue, (newV) => {
  if (props.tag) {
    const options = props.options.map((item, index) => ({ ...item, index }))
    let targetIndex = options.find((item) => item.value === newV[0])?.index ?? ''
    targetIndex %= 4
    getClass.value = [
      'fy-select',
      `fy-select-tag-${targetIndex}`,
    ]
  }
  if (props.access && (props.modelValue !== undefined && props.modelValue !== null && props.modelValue !== '')) {
    getClass.value = [
      'fy-select',
      'fy-select-access-w',
      'fy-select-access-wrap',
    ]
  }
})
const ifCollapse = computed(() => {
  if (props.collapseTags === false) {
    return false
  }
  return true
})
const getOptionClass = computed(() => [{ 'fy-select-option-tag': props.tag || props.tag === '' }, { 'fy-select-option-access': props.access }])
const ifAccessModelValue = computed(() => {
  if (props.access && (props.modelValue !== undefined && props.modelValue !== null && props.modelValue !== '')) {
    return true
  }
  return false
})
const getAccessIcon = computed(() => {
  if (props.modelValue === props.options[0].value) {
    return true
  }
  return false
})
const getAccessDesc = computed(() => {
  if (props.modelValue === props.options[0].value) {
    return props.options[0].desc
  }
  return props.options[1].desc
})
const getAccessLabel = computed(() => {
  if (props.modelValue === props.options[0].value) {
    return props.options[0].label
  }
  return props.options[1].label
})
const ifClearable = computed(() => {
  if (props.tag || props.tag === '' || props.clearable === true) {
    return true
  }
  return false
})
const ifMultiple = computed(() => {
  if (props.multiple || props.multiple === '' || props.tag) {
    return true
  }
  return false
})
const getMultipleLimit = computed(() => {
  if (props.tag) {
    return 1
  }
  if (props.multipleLimit) {
    return props.multipleLimit
  }
  return 0
})
const emitChange = (val) => {
  emit('change', val)
}
const emitVisibleChange = (val) => {
  emit('visible-change', val)
}
const emitRemoveTag = (val) => {
  emit('remove-tag', val)
}
const emitClear = () => {
  emit('clear')
}
const emitBlur = (val) => {
  emit('blur', val)
}
const emitFocus = (val) => {
  emit('focus', val)
}
</script>

<template>
  <div class="fy-select-wrap">
    <el-select
      v-if="!props.virtual && props.virtual !== ''"
      v-bind="$attrs"
      :model-value="props.modelValue"
      :class="getClass"
      :collapse-tags="ifCollapse"
      :clearable="ifClearable"
      :multiple="ifMultiple"
      :multiple-limit="getMultipleLimit"
      @change="emitChange"
      @visible-change="emitVisibleChange"
      @remove-tag="emitRemoveTag"
      @clear="emitClear"
      @blur="emitBlur"
      @focus="emitFocus"
    >
      <template #empty>
        <FYEmpty />
      </template>
      <template
        v-if="ifAccessModelValue"
        #prefix
      >
        <div class="fy-select-access-prefix">
          <div class="fy-select-access-title">
            <el-icon v-if="!getAccessIcon">
              <Lock />
            </el-icon>
            <el-icon v-else>
              <User />
            </el-icon>
            <span>{{ getAccessLabel }}</span>
          </div>
          <div class="fy-select-access-desc">
            <span>{{ getAccessDesc }}</span>
          </div>
        </div>
      </template>
      <el-option
        v-for="(item, index) in props.options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :class="getOptionClass"
      >
        <template #default>
          <div
            v-if="props.access || props.access === ''"
            class="fy-select-access"
          >
            <div class="fy-select-access-title">
              <el-icon v-if="index % 2 !== 0">
                <Lock />
              </el-icon>
              <el-icon v-else>
                <User />
              </el-icon>
              <span>{{ item.label }}</span>
            </div>
            <div class="fy-select-access-desc">
              <span>{{ item.desc }}</span>
            </div>
          </div>
          <div
            v-if="props.defaultIcon || props.defaultIcon === '' || item.icon"
            style="width: 100%;display: flex;justify-items: center; align-items: center;column-gap: 0.5rem"
          >
            <!--   data item 是否传入icon    -->
            <component
              :is="item.icon"
              v-if="item.icon"
            />
            <!--  data item 没有传入icon默认展示第一个字作为图标   -->
            <div
              v-else-if="props.defaultIcon"
              :style="defaultIconStyle"
            >
              {{ item.label.slice(0,1) }}
            </div>
            <span>{{ item.label }}</span>
          </div>
          <slot
            v-if="hasDefaultSlot"
            name="default"
            :data="item"
          />
        </template>
      </el-option>
    </el-select>
    <el-select-v2
      v-else
      v-bind="$attrs"
      :options="props.options"
      :model-value="props.modelValue"
      class="fy-select"
      :multiple="ifMultiple"
      :collapse-tags="ifCollapse"
      popper-class="fy-select-popper"
      @change="emitChange"
      @visible-change="emitVisibleChange"
      @remove-tag="emitRemoveTag"
      @clear="emitClear"
      @blur="emitBlur"
      @focus="emitFocus"
    >
      <template #empty>
        <div class="fy-select-empty">
          <FYEmpty />
        </div>
      </template>
      <template #default="{ item }">
        <div
          v-if="props.defaultIcon || props.defaultIcon === '' || item.icon"
          style="width: 100%;display: flex;justify-items: center; align-items: center;column-gap: 0.5rem"
        >
          <!--   data item 是否传入icon    -->
          <component
            :is="item.icon"
            v-if="item.icon"
          />
          <!--  data item 没有传入icon默认展示第一个字作为图标   -->
          <div
            v-else-if="props.defaultIcon"
            :style="defaultIconStyle"
          >
            {{ item.label.slice(0,1) }}
          </div>
          <span>{{ item.label }}</span>
        </div>
        <slot
          v-if="hasDefaultSlot"
          name="default"
          :data="item"
        />
      </template>
    </el-select-v2>
  </div>
</template>
<style lang="scss" scoped>
@use '../../../theme-chalk/src/select/select.scss';
</style>
