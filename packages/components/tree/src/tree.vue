<script setup>
import { ElTree } from 'element-plus'
import {ArrowRight, ArrowDown} from '@element-plus/icons-vue'
defineOptions({
  name: 'FYTree',
})

const props = defineProps({})
const defaultProps = {
  children: 'children',
  label: 'label',
}
const data = [
  {
    label: 'Level one 1',
    children: [
      {
        label: 'Level two 1-1',
        children: [
          {
            label: 'Level three 1-1-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 2',
    children: [
      {
        label: 'Level two 2-1',
        children: [
          {
            label: 'Level three 2-1-1',
          },
        ],
      },
      {
        label: 'Level two 2-2',
        children: [
          {
            label: 'Level three 2-2-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 3',
    children: [
      {
        label: 'Level two 3-1',
        children: [
          {
            label: 'Level three 3-1-1',
          },
        ],
      },
      {
        label: 'Level two 3-2',
        children: [
          {
            label: 'Level three 3-2-1',
          },
        ],
      },
    ],
  },
]
const nodeExpand = (obj,node,self) => {
  console.log(obj,node,self)
  node.isExpand = true
}
const nodeCollapse = (obj,node,self) => {
  console.log(obj,node,self)
  node.isExpand = false
}
</script>

<template>
  <div class="fy-tree-wrap">
    <el-tree :data="data" :props="defaultProps" @node-expand="nodeExpand"
      @node-collapse="nodeCollapse"
    >
      <template #default="{ node, data }">
          <span class="custom-tree-node">
            <el-icon v-if="node.data.children && node.isExpand"><ArrowRight /></el-icon>
            <el-icon v-else-if="node.data.children && !node.isExpand"><ArrowDown /></el-icon>
            <span>
              {{ 11 }}
            </span>
          </span>
      </template>
    </el-tree>
  </div>
</template>
<style lang="scss" scoped>
.fy-tree-wrap {
  :deep(.el-tree) {
    .el-icon.el-tree-node__expand-icon {
      display: none;
    }
  }
}
</style>
