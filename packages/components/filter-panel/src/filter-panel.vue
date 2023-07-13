<script setup>
import { Plus, Close } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { FYButton } from '../../button'
import { useFormGroups } from './composable/useFormGroups'

defineOptions({
  name: 'FYFilterPanel',
})

defineProps({
  template: {
    type: Array,
    default: () => ([]),
  },
})

const emits = defineEmits(['submit', 'reset', 'cancel'])

/**
 * 第一项筛选必为 当
 * 第二项筛选只能为 且 ｜ 或
 * 第三、第四..第N项都与第二项的筛选保持一致
 *
 *
 * 新增一项筛选
 * 删除一项筛选
 * 重置
 */

const {
  create,
  remove,
  renderer,
  reset,
  logical,
} = useFormGroups()

const formEl = ref()

const popoverVisible = ref(false)

function cancel() {
  reset()
  emits('cancel')
  popoverVisible.value = false
}

async function submit() {
  const result = []

  for await (const El of formEl.value) {
    const data = await El.validate()
    result.push(data)
  }
  console.log('🚀 ~ file: filter-panel.vue:43 ~ submit ~ result:', result)

  emits('submit', result)
  cancel()
}

</script>

<template>
  <el-popover
    v-model:visible="popoverVisible"
    :width="800"
    :show-arrow="false"
    trigger="click"
    placement="bottom-end"
    popper-class="filter-panel-popover"
    popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
  >
    <template #reference>
      <slot />
    </template>
    <template #default>
      <div class="fy-filter-panel-container">
        <header>
          <h3>筛选</h3>
          <div
            class="close-icon"
            @click="cancel"
          >
            <el-icon
              size="20"
              color="#999"
            >
              <Close />
            </el-icon>
          </div>
        </header>

        <div class="panel-body">
          <div
            v-for="(FormGroup, i) in renderer()"
            :key="FormGroup"
          >
            <component
              :is="FormGroup"
              ref="formEl"
              v-model:logical="logical"
              :index="i"
              :template="template"
              @remove="remove(i)"
            />
          </div>
          <div
            class="add-group"
          >
            <el-icon
              color="var(--el-color-primary)"
              @click="create"
            >
              <Plus />
            </el-icon>
            <span @click="create">新增筛选条件</span>
          </div>
        </div>

        <div class="panel-footer">
          <FYButton
            type="primary"
            text
            link
            size="large"
            style="font-size: 1rem"
            @click="reset"
          >
            重置
          </FYButton>

          <div class="button-group">
            <FYButton
              type="info"
              text
              size="large"
              link
              style="font-size: 1rem;"
              @click="cancel"
            >
              取消
            </FYButton>
            <FYButton
              type="primary"
              size="large"
              style="font-size: 1rem;"
              @click="submit"
            >
              确定
            </FYButton>
          </div>
        </div>
      </div>
    </template>
  </el-popover>
</template>

<style lang="scss">

@use "../../../theme-chalk/src/filter-panel/filter-panel.scss";

</style>
