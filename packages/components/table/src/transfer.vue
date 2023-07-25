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
  allTmpl.value.find((e) => e.label === item.label).visible = !item.visible
  allTmpl.value = [...allTmpl.value]
}

// 移除一项展示
function removeVisibleItem(item) {
  visibleTmpl.value.find((e) => e.label === item.label).visible = false
  visibleTmpl.value = [...visibleTmpl.value]
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
      filterRightTmpl.value.splice(newIndex, 0, currRow)
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
              @click="removeVisibleItem"
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
.fy-transfer-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  column-gap: 1rem;

  .transfer-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    .selection-title {
      color: #666;
      font-size: 1rem;
      font-weight: 500;
    }
    .selection-section {
      border: 1px solid #eee;
      border-radius: 5px;
      vertical-align: middle;
      height: 450px;

      .transparent-input {
        margin: 8px 0;
        padding: 0 20px;
      }

      :deep(.el-input) {
        height: 2.8125rem;
      }
      :deep(.el-input__wrapper) {
        box-shadow: none!important;
        border-bottom: 1px solid rgb(238,238,238);
        border-radius: 0;

        &.is-focus {
          border-color: #6698ff;
        }
      }

      .selection-section-body {
        height: 24rem;
        overflow-y: auto;
        padding-bottom: .5rem;
        .list {
          width: 100%;
          padding: 2px 0;

          .list-item {
            display: flex;
            align-items: center;
            width: 100%;
            position: relative;
            min-height: 45px;
            color: #333;
            cursor: pointer;
            outline-style: none;
            padding: 4px 25px;
            font-size: 1rem;
            margin: 3px 0;

            &:hover {
              background: #f5f5f5;
            }
            .item-awesome-text {
              width: calc(100% - 16px);
              display: flex;
              align-items: center;
              column-gap: .3125rem;
              svg {
                visibility: hidden;
              }
              &:hover {
                svg {
                  visibility: visible;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
