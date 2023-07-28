<script setup>
import {
  Search, Check, Close,
} from '@element-plus/icons-vue'
import Sortable from 'sortablejs'
import {
  onMounted, ref, computed, watch,
} from 'vue'
import { tmplProps } from '@hitotek/fuzzy-ui-utils'
import { FYInput } from '../../input'

const props = defineProps({
  ...tmplProps,
  visibleTemplate: {
    type: Array,
    default: () => ([]),
  },
})

const emits = defineEmits(['updateTmpl', 'updateVisibleTmpl'])

const allTmpl = computed({
  get() {
    return props.template
  },
  set(v) {
    emits('updateTmpl', v)
  },
})

const visibleTmpl = computed({
  get() {
    return props.visibleTemplate
  },
  set(v) {
    emits('updateVisibleTmpl', v)
  },
})

/**
 * 左侧筛选面板
 */
const leftInputVal = ref('')
const filterLeftTmpl = ref([])

watch(
  leftInputVal,
  (val) => {
    filterLeftTmpl.value = allTmpl.value.filter((tmpl) => tmpl.label.includes(val))
  },
  { immediate: true },
)

/**
 * 右侧筛选面板
 */
const rightInputVal = ref('')
const filterRightTmpl = ref([])

watch(
  [rightInputVal, visibleTmpl],
  () => {
    filterRightTmpl.value = visibleTmpl.value.filter((tmpl) => tmpl.label.includes(rightInputVal.value))
  },
  { immediate: true },
)

// 切换一项是否展示
function toggleVisibleItem(item) {
  allTmpl.value.find((e) => e.value === item.value).visible = !item.visible
  allTmpl.value = [...allTmpl.value]
}

// 移除一项展示
function removeVisibleItem(item) {
  // 移除
  const idx = visibleTmpl.value.findIndex((e) => e.value === item.value)
  visibleTmpl.value.splice(idx, 1)
  visibleTmpl.value = [...visibleTmpl.value]

  // 更改状态
  allTmpl.value.find((e) => e.value === item.value).visible = false
  allTmpl.value = [...allTmpl.value]
}

/**
 * 右侧面板拖拽实现
 */
const dragEle = ref()

onMounted(() => {
  Sortable.create(dragEle.value, {
    animation: 100,
    onEnd({ newIndex, oldIndex }) {
      const currRow = filterRightTmpl.value.splice(oldIndex, 1)[0]
      filterRightTmpl.value.splice(newIndex, 0, { ...currRow, order: newIndex + 1 })

      const currRow1 = visibleTmpl.value.splice(oldIndex, 1)[0]
      visibleTmpl.value.splice(newIndex, 0, currRow1)
    },
  })
})

</script>

<template>
  <div class="fy-transfer-wrap">
    <div class="transfer-container">
      <div class="selection-title">
        可选择属性 · {{ allTmpl.length }}
      </div>
      <div class="selection-section">
        <FYInput
          v-model="leftInputVal"
          class="transparent-input"
          placeholder="搜索"
        >
          <template #prefix>
            <el-icon size="18">
              <Search />
            </el-icon>
          </template>
        </FYInput>
        <div class="selection-section-body">
          <div
            class="list"
          >
            <div
              v-for="(tmpl) in filterLeftTmpl"
              :key="tmpl.value"
              class="list-item"
              @click="toggleVisibleItem(tmpl)"
            >
              <div class="item-awesome-text">
                <span class="item-title">{{ tmpl.label }}</span>
              </div>

              <div
                v-show="tmpl.visible"
                class="item-icon"
              >
                <el-icon
                  :size="20"
                  color="#6698ff"
                >
                  <Check />
                </el-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="transfer-container">
      <div class="selection-title">
        已选择属性 · {{ visibleTmpl.length }}
      </div>
      <div class="selection-section">
        <FYInput
          v-model="rightInputVal"
          class="transparent-input"
          placeholder="搜索"
        >
          <template #prefix>
            <el-icon size="18">
              <Search />
            </el-icon>
          </template>
        </FYInput>
        <div class="selection-section-body">
          <div
            ref="dragEle"
            class="list"
          >
            <div
              v-for="(tmpl) in filterRightTmpl"
              :key="tmpl.value"
              class="list-item"
              @click="removeVisibleItem(tmpl)"
            >
              <div class="item-awesome-text">
                <svg
                  color="#999"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fit=""
                  height="1em"
                  width="1em"
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                ><g
                  id="ailaction/drag--"
                  stroke-width="1"
                  fill-rule="evenodd"
                ><g
                  id="ail拖动"
                  transform="translate(5 1)"
                  fill-rule="nonzero"
                ><path
                  id="ail形状结合"
                  d="M1 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM1 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-4 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-4 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                /></g></g></svg>
                <span class="item-title">{{ tmpl.label }}</span>
              </div>

              <div
                v-show="tmpl.visible"
                class="item-icon"
              >
                <el-icon
                  :size="20"
                  color="#6698ff"
                >
                  <Close />
                </el-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
@use "../../../theme-chalk/src/table/transfer.scss"
</style>
