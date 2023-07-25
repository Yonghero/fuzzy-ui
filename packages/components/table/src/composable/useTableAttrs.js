import { unref } from 'vue'

/**
 * 封装表格组件的attrs
 * @param {*} attrs
 * @param {*} template
 * @returns
 */
export function useTableAttrs(attrs, template) {
  const spanMethod = ({
    row,
    column,
    rowIndex,
    columnIndex,
  }) => {
    const visibleTmpl = unref(template).filter((item) => item.visible)
    // 最后一列为自定义的设置 需要占0行0列
    if (columnIndex === visibleTmpl.length + 1) {
      console.log(column)
      return {
        rowspan: 0,
        colspan: 0,
      }
    }
    // 倒数第二列则要将最后一列合并成一列 所以需要占一行两列
    if (columnIndex === visibleTmpl.length) {
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

  return {
    ...attrs,
    spanMethod,
    'header-row-class-name': attrs.headerRowClassName ? `${attrs.headerRowClassName} fy-table-header-row` : 'fy-table-header-row',
  }
}
