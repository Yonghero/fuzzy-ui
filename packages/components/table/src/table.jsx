import {
  computed, defineComponent, ref,
} from 'vue'
import { tmplProps } from '@hitotek/fuzzy-ui-utils'
import { useFirstColumn, getColumns, useHeadSetting } from './composable'
import '@hitotek/fuzzy-ui-theme-chalk/src/table/table.scss'

/**
 * @author younghero
 * @Date 2023-7-20 11:16
 * @description 表格
 */

export default defineComponent({
  name: 'FYTable',
  props: {
    ...tmplProps,
    columnIndex: {
      type: Boolean,
      default: true,
    },
    columnSelection: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Array,
      default: () => ([]),
    },
    renderer: {
      type: Object,
      default: () => ({}),
    },
    // eslint-disable-next-line vue/no-reserved-props
    EleRef: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: ['selection'],
  setup(props, { attrs, expose, emit }) {
    const Ele = ref()

    // 第一列
    const { FirstColumn, selectionValues } = useFirstColumn({
      selection: computed(() => props.columnSelection), // 是否开启多选
      index: computed(() => props.columnIndex), // 是否开启序号
      data: computed(() => props.data), // 表格数据
      renderer: props.renderer, // 表头覆盖层
      emit,
    })

    // 剩余列
    const Columns = getColumns(computed(() => props.template))

    // 表头设置列
    const { SettingColumn } = useHeadSetting()

    const spanMethod = ({
      row,
      column,
      rowIndex,
      columnIndex,
    }) => {
      // 最后一列为自定义的设置 需要占0行0列
      if (columnIndex === props.template.length + 1) {
        return {
          rowspan: 0,
          colspan: 0,
        }
      }
      // 倒数第二列则要将最后一列合并成一列 所以需要占一行两列
      if (columnIndex === props.template.length) {
        return {
          rowspan: 1,
          colspan: 2,
        }
      }
      if (attrs.spanMethod) {
        return attrs.spanMethod({
          row, column, rowIndex, columnIndex,
        })
      }
      return {
        rowspan: 1,
        colspan: 1,
      }
    }

    expose({ selectionValues, sort: computed(() => Ele.value.sort) })

    return () => (
      <div class="fy-table-wrap">
        <el-table
          data={props.data}
          border
          {...attrs}
          header-row-class-name="fy-table-header-row"
          spanMethod={spanMethod}
          ref={Ele}
        >
          <FirstColumn />
          { Columns }
          <SettingColumn/>
        </el-table>
      </div>
    )
  },
})
