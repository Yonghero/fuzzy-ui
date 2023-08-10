import {
  defineComponent, unref, ref, computed, watch, toRaw,
} from 'vue'

import { SelectionIndex } from '../SelectionIndex'
import { useHeadVNode } from './useHeadVNode'

/**
 * 表格第一列的配置内容
 * @param {*} columnProps
 * @returns
 */
export function useFirstColumn(columnProps) {
  // checkbox 绑定的数据
  const values = ref(unref(columnProps.data).map(() => false))

  // checkbox 数据值映射为对应的表格row值
  const valuesMap2Data = computed(() => values.value.map((item, idx) => item ? unref(columnProps.data)[idx] : false).filter(Boolean))

  // 全选
  const checkedAll = ref(false)

  const emitSelection = () => {
    columnProps.emit(
      'selection',
      values.value.map((item, idx) => item ? unref(columnProps.data)[idx] : false).filter(Boolean).map((item) => toRaw(item)),
    )
  }

  // 该hook注入表头覆盖层组件
  useHeadVNode(columnProps.renderer.header, valuesMap2Data)

  // 第一列的自定义插槽
  const slots = {
    default: (scope) => (
      <SelectionIndex
        scope={scope}
        columnProps={columnProps}
        checked={values.value[scope.$index]}
        onChecked={(v) => {
          values.value[scope.$index] = v
          // 向上传递被选中的表格数据
          emitSelection()
        }}
      />
    ),
    header: () => (
      unref(columnProps.selection)
        ? (<el-checkbox
            v-model={checkedAll.value}
            onChange={(bool) => {
              values.value = unref(columnProps.data).map(() => bool)
              // 向上传递被选中的表格数据
              emitSelection()
            }}
          />)
        : (<span>序号</span>)
    ),
  }

  // 全选的状态更新
  // 单个全部选中全选也将选中
  // 单个未选中全选也未选中
  watch(
    valuesMap2Data,
    (data) => {
      if (data.length !== unref(columnProps.data).length) {
        checkedAll.value = false
      } else {
        checkedAll.value = true
      }
    },
  )

  return {
    selectionValues: values,
    FirstColumn: defineComponent({
      setup(props, { attrs }) {
        // 序号和多选皆不满足
        if (!unref(columnProps.selection) && !unref(columnProps.index)) {
          return null
        }
        return () => (
          <el-table-column
            v-slots={slots}
            fixed={unref(columnProps.template).some((item) => item.fixed)}
            width="55"
            align="center"
            prop="index"
            {...attrs}
          />
        )
      },
    }),
  }
}
