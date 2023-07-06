<script setup lang="jsx">
import { FYProgress } from '@hitotek/fuzzy-ui-components'

function handleClick(progress) {
  alert(`进度值 ->>>> ${progress}`)
}

</script>

<template>
  <div style="width: 100%; height: 300px;display: flex; align-items: center; justify-content: space-around;">
    <FYProgress
      :value="50"
      size="small"
      color="var(--el-color-warning)"
      @click="handleClick"
    >
      <template #tooltip>
        <div class="tooltip-container">
          <div class="block" />
          <div class="tooltip-content">
            <div class="row">
              50% 未评审
            </div>
            <div class="row">
              1/2 用例
            </div>
          </div>
        </div>
      </template>
    </FYProgress>
    <FYProgress
      :value="50"
      color="var(--el-color-primary)"
      size="default"
      @click="handleClick"
    >
      <template #tooltip>
        default size
      </template>
    </FYProgress>
    <FYProgress
      :value="50"
      color="var(--el-color-danger)"
      :tooltipProps="{
        placement: 'bottom'
      }"
      size="large"
      @click="handleClick"
    >
      <template #tooltip>
        large size
      </template>
    </FYProgress>
  </div>
</template>

<style scoped lang='scss'>

.tooltip-container {
  display: flex;
  column-gap: .5rem;

  .block {
    width: .8rem;
    background: #ccc;
    height: .8rem;
    border-radius: 5px;
    transform: translateY(3px);
  }

  .tooltip-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .row {
      display: flex;
      align-items: center;
      column-gap: 0.3rem;

      &:nth-child(2) {
        font-size: 13px;
      }
    }
  }
}

</style>
