<script setup lang="jsx">
import { ElTree } from 'element-plus'
import {
  Plus, Edit, Delete, ArrowRight, ArrowDown,
} from '@element-plus/icons-vue'
import {
  ref,
} from 'vue'
import { mergeTemplate, countNodesRecursive } from '@hitotek/fuzzy-ui-utils'

defineOptions({
  name: 'FYTree',
})
const emit = defineEmits(['node-click'])
const myRef = ref(null)
const formModel = ref({})
const dialogVisible = ref(false)
const createSubTree = ({ node, data: target }) => {
  dialogConfig.value.type = 'create'
  dialogConfig.value.title = '新增'
  if (props.config.ifDialog === true) {
    // 构建表单所需要的数据
    dialogConfig.value.title = '新增'
    props.config.dialogTmpl?.forEach((item) => {
      formModel.value[item.value] = ''
    })
    dialogVisible.value = true
    currentTarget.value = { node, data: target }
    setTimeout(() => {
      target.panelVisible = false
    }, 0)
  } else {
    // 构建子项，id为当前所有项数+1
    const newChild = {
      id: (countNodesRecursive(props.config.dataSource) + 1), label: '新模块', children: [], type: 'input',
    }
    myRef.value.append(newChild, target.id)
    setTimeout(() => {
      node.expand()
      target.panelVisible = false
    }, 0)
  }
}
const handleSubmit = () => {
  if (dialogConfig.value.type === 'create') {
    const newChild = {
      id: (countNodesRecursive(props.config.dataSource) + 1), children: [], type: 'text', ...formModel.value,
    }
    myRef.value.append(newChild, currentTarget.value.data.id)
    dialogVisible.value = false
    setTimeout(() => {
      currentTarget.value.node.expand()
    }, 0)
  } else {
    const { parent } = currentTarget.value.node
    const target = {
      ...currentTarget.value.data, ...formModel.value, type: 'text',
    }
    let targetSon
    // 采用删去旧项加入新项的方式进行树节点更新
    if (parent.parent === null) {
      targetSon = parent.data.findIndex((item) => item.id === currentTarget.value.data.id)
      parent.data.splice(targetSon, 1, target)
    } else {
      targetSon = parent.data.children.findIndex((item) => item.id === currentTarget.value.data.id)
      parent.data.children.splice(targetSon, 1, target)
    }
    dialogVisible.value = false
  }
}
const handleCancel = () => {
  dialogVisible.value = false
}

const editTree = ({ node, data: target }) => {
  dialogConfig.value.type = 'update'
  dialogConfig.value.title = '编辑'
  if (props.config.ifDialog === true) {
    dialogConfig.value.title = '编辑'
    props.config.dialogTmpl?.forEach((item) => {
      formModel.value[item.value] = target[item.value]
    })
    dialogVisible.value = true
    currentTarget.value = { node, data: target }
    setTimeout(() => {
      target.panelVisible = false
    }, 0)
  } else {
    target.type = 'input'
    setTimeout(() => {
      target.panelVisible = false
    }, 0)
  }
}
const currentTarget = ref(null)
const deleteTree = ({ node, data: target }) => {
  dialogDeleteConfig.value.businessType = '模块'
  dialogDeleteConfig.value.tagText = target.label
  deleteDialogVisible.value = true
  currentTarget.value = { node, data: target }
  setTimeout(() => {
    target.panelVisible = false
  }, 0)
}
const handleDeleteConfirm = () => {
  myRef.value?.remove(currentTarget.value.node)
  deleteDialogVisible.value = false
}
const handleDeleteCancel = () => {
  deleteDialogVisible.value = false
}
const itemNodeClick = (obj, node, treeNode, event) => {
  emit('node-click', obj, node, treeNode, event)
}

const tmpl = mergeTemplate([
  {
    label: '新建子模块',
    icon: (<el-icon><Plus /></el-icon>),
    onClick: (e) => {
      createSubTree(e)
    },
  }], [{
  label: '编辑',
  icon: (<el-icon><Edit /></el-icon>),
  onClick: (e) => {
    editTree(e)
  },
},
{
  label: '删除',
  icon: (<el-icon><Delete /></el-icon>),
  onClick: (e) => {
    deleteTree(e)
  },
},
])
const props = defineProps({
  config: {
    type: Object,
    default: () => ({
      expandOnClickNode: false,
      tooltipText: '更多',
      editable: false,
      // 是否使用表单进行树的编辑
      ifDialog: false,
      draggable: false,
      deleteDesc: '模块删除后不可恢复，删除模块会一起删除子模块。',
      dialogTmpl: [
        {
          type: 'input',
          label: '模板名称',
          value: 'label',
          limit: 10,
          require: true,
          rules: [{
            min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur',
          }],
        },
        {
          type: 'select',
          label: '负责人',
          value: 'person',
          options: [
            {
              value: 'value1',
              label: '李恩伟',
            },
            {
              value: 'value2',
              label: '藏炼鑫',
            },
          ],
        },
        {
          type: 'cascader',
          label: '组织',
          value: 'organization',
          options: [
            {
              value: 'guide',
              label: '研发部',
              children: [
                {
                  value: 'disciplines',
                  label: '前端',
                  children: [
                    {
                      value: 'consistency',
                      label: '架构组',
                    },
                    {
                      value: 'feedback',
                      label: '业务组',
                    },
                  ],
                },
                {
                  value: 'navigation',
                  label: '后端组',
                  children: [
                    {
                      value: 'side nav',
                      label: 'AI组',
                    },
                    {
                      value: 'top nav',
                      label: 'Java组',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      dataSource: [
        {
          id: 1,
          label: 'Level one 1',

          allowDrag: false,
          children: [
            {
              label: 'Level two 1-1',
              id: 2,
              children: [
                {
                  id: 3,
                  label: 'Level three 1-1-1',
                  notLevelOne: true,
                },
              ],
            },
          ],
        },
        {
          label: 'Level one 2',
          id: 4,
          levelOne: true,
          children: [
            {
              id: 5,
              label: 'Level two 2-1',
              children: [
                {
                  id: 6,
                  label: 'Level three 2-1-1',
                  children: [
                    {
                      id: 14,
                      label: 'Level three 2-1-1-1',
                    },
                    {
                      id: 15,
                      label: 'Level three 2-1-1-2',
                    },
                  ],
                },
              ],
            },
            {
              id: 7,
              label: 'Level two 2-2',
              children: [
                {
                  id: 8,
                  label: 'Level three 2-2-1',
                },
              ],
            },
          ],
        },
        {
          label: 'Level one 3',
          id: 9,
          children: [
            {
              forbid: [1, 4],
              label: 'Level two 3-1',
              id: 10,
              children: [
                {
                  id: 11,
                  label: 'Level three 3-1-1',
                },
              ],
            },
            {
              id: 12,
              label: 'Level two 3-2',
              children: [
                {
                  id: 13,
                  label: 'Level three 3-2-1',
                },
              ],
            },
          ],
        },
      ],
    }),
  },
})
const defaultProps = {
  children: 'children',
  label: 'label',
}

const togglePanel = (e) => {
  if (e.panelVisible) {
    e.panelVisible = false
  }
}

const nodeExpand = (obj, node) => {
  node.isExpand = true
}
const nodeCollapse = (obj, node) => {
  node.isExpand = false
}
const nodeClick = (node) => {
  if (node.expanded) {
    node.collapse()
  } else {
    node.expand()
  }
}
const allowDrag = (draggingNode) => draggingNode.data.allowDrag !== false
const allowDrop = (draggingNode, dropNode, type) => {
  // 某项只能被拖至最外层
  if (draggingNode.data.levelOne === true) {
    return dropNode.level === 1 && type !== 'inner'
  }
  // 某项不能被拖至最外层
  if (draggingNode.data.notLevelOne === true) {
    return (dropNode.level === 1 && (type !== 'prev' && type !== 'next')) || dropNode.level !== 1
  }
  // 某些项不能被拖至某些项内
  if (draggingNode.data.forbid && draggingNode.data.forbid.length) {
    return !draggingNode.data.forbid.includes(dropNode.data.id)
  }
  return true
}
const handleEnter = (e, target) => {
  target.type = 'text'
}
const deleteDialogVisible = ref(false)
const dialogDeleteConfig = ref({
  title: '确认删除',
  type: 'delete',
  businessType: '',
  tagText: '',
  customDesc: props.config.deleteDesc || '请注意，删除后无法恢复',
})
const dialogConfig = ref({
  title: '新增',
  template: props.config.dialogTmpl,
})
</script>

<template>
  <div class="fy-tree-wrap">
    <el-tree
      ref="myRef"
      :data="props.config.dataSource"
      :props="defaultProps"
      :expand-on-click-node="!!props.config.expandOnClickNode"
      :draggable="!!props.config.draggable"
      node-key="id"
      :allow-drag="allowDrag"
      :allow-drop="allowDrop"
      @node-expand="nodeExpand"
      @node-collapse="nodeCollapse"
      @node-click="itemNodeClick"
    >
      <template #default="{ node, data }">
        <span
          class="custom-tree-node"
        >
          <span
            :class="['node-left-icon', props.config.draggable ? 'visibility' : 'visibility-hidden']"
          >
            <svg
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
          </span>
          <el-icon
            v-if="node.data.children && node.data.children.length && !node.expanded"
            class="expand-icon"
            @click="nodeClick(node)"
          ><ArrowRight /></el-icon>
          <el-icon
            v-else-if="node.data.children && node.data.children.length && node.expanded"
            class="expand-icon"
            @click="nodeClick(node)"
          ><ArrowDown /></el-icon>
          <el-icon
            v-else-if="!node.data.children || !node.data.children.length"
            class="expand-icon"
            style="visibility:hidden"
          ><ArrowDown /></el-icon>
          <slot
            v-if="!data.render"
            name="icon"
          >
            <span class="icon-svg">
              <slot name="custom-icon">
                <svg
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fit=""
                  height="1em"
                  width="1em"
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                ><g
                  id="axlrd/test-case-type-bold"
                  stroke-width="1"
                  fill-rule="evenodd"
                ><path
                  id="axl形状结合"
                  d="M7.283 9.453a1.453 1.453 0 0 1-.013-.008L4.41 7.794l-.002-.002a.047.047 0 0 0-.041.003l-2.86 1.652a.047.047 0 0 0-.024.04v3.303c0 .017.009.033.024.041l2.86 1.652a.047.047 0 0 0 .047 0l2.86-1.652a.047.047 0 0 0 .01-.007l-.001-.034V9.488v-.035zm.707 4.581l-.016.01-2.86 1.651c-.448.259-1 .259-1.447 0l-2.86-1.651a1.447 1.447 0 0 1-.724-1.254V9.488c0-.518.276-.995.724-1.254l2.86-1.651.02-.012V3.238c0-.518.276-.995.723-1.254L7.27.333c.448-.259 1-.259 1.448 0l2.86 1.651c.448.259.724.736.724 1.254v3.338l.012.007 2.86 1.651c.448.259.724.736.724 1.254v3.302c0 .517-.276.995-.724 1.254l-2.86 1.651c-.448.259-1 .259-1.447 0l-2.86-1.651a1.454 1.454 0 0 1-.017-.01zM5.105 6.578l.01.005 2.86 1.651.001.001A.047.047 0 0 0 8 8.24l.008-.005 2.86-1.651.026-.015a.047.047 0 0 0 .009-.028V3.238a.047.047 0 0 0-.024-.041l-2.86-1.652a.047.047 0 0 0-.047 0L5.11 3.197a.047.047 0 0 0-.024.04V6.54c0 .015.007.029.018.038zm3.593 6.246a.047.047 0 0 0 .009.007l2.86 1.652a.047.047 0 0 0 .047 0l2.86-1.652a.047.047 0 0 0 .024-.04V9.487a.047.047 0 0 0-.024-.041l-2.86-1.652a.047.047 0 0 0-.028-.006 1.454 1.454 0 0 1-.008.005l-2.86 1.65a1.453 1.453 0 0 1-.02.012v3.368z"
                /></g></svg>
              </slot>
            </span>
          </slot>
          <span v-if="data.render">
            <component
              :is="data.render"
            />
          </span>
          <span v-else>
            <span
              v-if="data.type !== 'input'"
              class="fy-tree-node-content"
            >
              <el-tooltip
                class="box-item"
                effect="dark"
                :content="data.label"
                placement="top"
                show-after="1000"
              >
                {{ data.label }}
              </el-tooltip>
            </span>
            <span
              v-else
              class="fy-tree-node-content fy-tree-content-input"
            >
              <FYInput
                v-model="data.label"
                autoFocus
                @enter="(e) => handleEnter(e, data)"
                @blur="(e) => handleEnter(e, data)"
              />
            </span>
            <FYActionPanel
              v-model:visible="data.panelVisible"
              :template="tmpl"
              :panelModel="{node,data}"
            >
              <span
                v-if="props.config.editable"
                class="node-right-icon"
                @click="togglePanel(data)"
              >
                <svg
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fit=""
                  height="1em"
                  width="1em"
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                ><g
                  id="apb1.Base基础/1.icon图标/2.normal/more-vertical"
                  stroke-width="1"
                  fill-rule="evenodd"
                ><path
                  id="apb形状结合"
                  d="M8 4.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5zm0 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5zm0 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5z"
                /></g></svg>
              <!-- <el-tooltip
                class="box-item"
                effect="dark"
                :content="props.config.tooltipText || '更多'"
                placement="top"
              /> -->

              </span>
            </FYActionPanel>
          </span>
        </span>
      </template>
    </el-tree>
    <!-- 删除对话框 -->
    <FYDialog
      v-model="deleteDialogVisible"
      :dialogConfig="dialogDeleteConfig"
      @confirm="handleDeleteConfirm"
      @cancel="handleDeleteCancel"
    />
    <!-- 新增和编辑对话框 -->
    <FYDialog
      v-model="dialogVisible"
      :dialogConfig="dialogConfig"
      :formModel="formModel"
      @submit="handleSubmit"
      @cancel="handleCancel"
    />
  </div>
</template>
<style lang="scss" scoped>
@use '../../../theme-chalk/src/tree/tree.scss';
</style>
