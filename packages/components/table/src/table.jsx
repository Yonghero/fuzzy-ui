import {
  computed, defineComponent, ref,
} from 'vue'
import { tmplProps } from '@hitotek/fuzzy-ui-utils'
import {
  useFirstColumn, getColumns, getHeadSettingColumn, useTableAttrs,
} from './composable'
import TableSetting from './TableSetting'
import '@hitotek/fuzzy-ui-theme-chalk/src/table/table.scss'
import { FYEmpty } from '../../empty'

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
  },
  emits: ['selection', 'headerSelection'],
  setup(props, { attrs, expose, emit }) {
    // 表格组件实例
    const Ele = ref()

    // 控制表头设置弹窗是否展示
    const tableSettingVisible = ref(false)

    // 初始化字段排序
    const sortedTmpl = computed(() => {
      const tmpl = props.template
      return tmpl
        .map((item) => ({ order: item.order ? item.order : 0, ...item })) // order 初始化
        .sort((a, b) => a.order - b.order)
    })

    // 是否展示序号列
    const showSelectionIndex = computed(() => props.columnIndex || props.columnSelection)

    // 封装表格继承属性
    const tableAttrs = useTableAttrs(attrs, computed(() => sortedTmpl.value.filter((item) => item.visible)), showSelectionIndex)

    // 第一列
    const { FirstColumn, selectionValues } = useFirstColumn({
      selection: computed(() => props.columnSelection), // 是否开启多选
      index: computed(() => props.columnIndex), // 是否开启序号
      data: computed(() => props.data), // 表格数据
      renderer: props.renderer, // 表头覆盖层
      template: sortedTmpl,
      emit,
    })

    // 剩余列
    const Columns = getColumns(computed(() => props.template))

    // 表头设置列
    const SettingColumn = getHeadSettingColumn({ onClick: () => tableSettingVisible.value = true })

    expose({ selectionValues, sort: computed(() => Ele.value.sort) })

    return () => (
      <div class="fy-table-wrap">
        <el-table
          v-slots={{
            empty: () => <FYEmpty/>,
          }}
          border
          table-layout="auto"
          {...tableAttrs}
          data={props.data}
          ref={Ele}
        >
          { Object.keys(FirstColumn).length
            ? <FirstColumn
                index={props.columnIndex}
                selection={props.columnSelection}
              />
            : null
          }
          { Columns.value }
          <SettingColumn />
        </el-table>
        <TableSetting
          visible={tableSettingVisible.value}
          onUpdateVisible={(e) => tableSettingVisible.value = e}
          template={sortedTmpl.value}
          onSubmit={(tmpl) => emit('headerSelection', tmpl)}
        />
      </div>
    )
  },
})
