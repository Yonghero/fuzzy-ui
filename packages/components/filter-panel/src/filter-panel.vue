<script setup>
import { Plus, Close } from '@element-plus/icons-vue'
// import FormGroup from './form-group.vue'
import { FYButton } from '../../button'
import { useFormGroups } from './composable'
import tmpl from './template'

defineOptions({
  name: 'FYFilterPanel',
})

defineProps({
  template: {
    type: Array,
    default: () => (tmpl),
  },
})

// const props = defineProps({})

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
  logical,
} = useFormGroups()

// init here
</script>

<template>
  <div class="fy-filter-panel-container">
    <header>
      <h3>筛选</h3>
      <div class="close-icon">
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
          v-model:logical="logical"
          :index="i"
          :template="template"
          @remove="remove(i)"
        />
      </div>
      <div
        class="add-group"
        @click="create"
      >
        <el-icon color="var(--el-color-primary)">
          <Plus />
        </el-icon>
        <span>新增筛选条件</span>
      </div>
    </div>

    <div class="panel-footer">
      <FYButton
        type="primary"
        text
        link
        size="large"
        style="font-size: 1rem"
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
        >
          取消
        </FYButton>
        <FYButton
          type="primary"
          size="large"
          style="font-size: 1rem;"
        >
          确定
        </FYButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

.fy-filter-panel-container{
  width: 57.1429rem;
  max-height: 30.3571rem;
  min-height: 12.1429rem;

  background: #fff;
  border-radius: 0.25rem;
  box-shadow: 0 0 1.1429rem #00000014;
  border: .0714rem solid #eee;
  box-sizing: border-box;
  padding: .5rem 2rem;
  color: #333;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 3.5714rem;
    height: 3.5714rem;
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;

    h3 {
      font-size: 1.2rem;
      font-weight: 400;
    }

    .close-icon {
      cursor: pointer;
      display: flex;
      padding: .5rem;
      transition: background .2s ease-in-out,color .2s ease-in-out;

      &:hover {
        border-radius: 0.25rem;
        background: rgba(102,152,255,.1);
        .el-icon {
          color: var(--el-color-primary);
        }

      }
    }
  }

  .panel-body {
    max-height: 21.4286rem;
    // width: 57.1429rem;
    overflow-y: auto;
    position: relative;
    padding: 0.5rem 2rem 1rem;

    .add-group {
      display: flex;
      align-items: center;
      color: var(--el-color-primary);
      font-size: 1rem;
      font-weight: 400;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
     }
  }

  .panel-footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
}
</style>
