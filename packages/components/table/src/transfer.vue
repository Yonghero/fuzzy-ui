<script setup>
import {
  Search, Check, Pointer, Close,
} from '@element-plus/icons-vue'
import Sortable from 'sortablejs'
import { onMounted, ref, computed } from 'vue'
import { tmplProps } from '@hitotek/fuzzy-ui-utils'
import { FYInput } from '../../input'

const props = defineProps({
  ...tmplProps,
})

const allTmpl = computed(() => props.template)

const visibleTmpl = computed(() => props.template.filter((tmpl) => tmpl.visible))

const dragEle = ref()

const arr = ref([{ label: 1 }, { label: 2 }])

onMounted(() => {
  Sortable.create(dragEle.value, {
    animation: 100,
    onEnd({ newIndex, oldIndex }) {
      const currRow = arr.value.splice(oldIndex, 1)[0]
      arr.value.splice(newIndex, 0, currRow)
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
              v-for="(tmpl) in allTmpl"
              :key="tmpl.value"
              class="list-item"
            >
              <div class="item-awesome-text">
                <el-icon
                  :size="20"
                  color="#999"
                >
                  <Pointer />
                </el-icon>
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
        已选择属性 · {{ visibleTmpl.le }}
      </div>
      <div class="selection-section">
        <FYInput
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
              v-for="(tmpl) in visibleTmpl"
              :key="tmpl.value"
              class="list-item"
            >
              <div class="item-awesome-text">
                <el-icon
                  :size="20"
                  color="#999"
                >
                  <Pointer />
                </el-icon>
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
            }
          }
        }
      }
    }
  }
}
</style>
