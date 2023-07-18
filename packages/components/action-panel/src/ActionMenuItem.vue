<script setup>
import { MessageBox } from '@element-plus/icons-vue'
</script>

<template>
  <div class="fy-action-menu-item">
    <div class="menuitemicon">
      <el-icon><MessageBox /></el-icon>
    </div>
    <span class="menuitemname">我负责的需求</span>
  </div>
</template>

<style scoped lang='scss'>

.fy-action-menu-item {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 9px 20px;
  position: relative;
  color: var(--el-popover-title-text-color);
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  transition: background .2s;

  &:hover {
    background-color: var(--el-fill-color-light);
  }

  .menuitemicon {
    display: flex;
    margin-right: 8px;
    color: #aaa;
    transition: margin-left .2s;
    font-size: 1rem;
  }

  .menuitemname {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: margin-left .2s;
    color: inherit;
  }
}

</style>
