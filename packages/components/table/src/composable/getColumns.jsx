import { unref } from 'vue'

import { tableEditItem } from './install'

export function getColumns(template) {
  console.log('🚀 ~ file: getColumns.jsx:6 ~ getColumns ~ template:', template.value)
  // eslint-disable-next-line no-underscore-dangle
  const _getColumn = (scope, tmpl) => {
    if (tmpl.render) {
      return (tmpl.render({ scope, key: tmpl.value, value: scope.row[tmpl.value] }))
    }
    if (tmpl.type) {
      const EditRenderer = tableEditItem.get(tmpl?.type)
      if (EditRenderer) {
        return (<EditRenderer {...tmpl} scope={scope}/>)
      }
    }

    return (scope.row[tmpl?.value] || scope.row[tmpl?.value] === 0 ? scope.row[tmpl?.value] : '-')
  }

  return unref(template).map((tmpl) => {
    const slots = {
      default: (scope) => _getColumn(scope, tmpl),
    }

    return (
      <el-table-column
        v-slots={slots}
        align="center"
        key={tmpl.value}
        label={tmpl.label}
        prop={tmpl.value}
        {...tmpl}
      />
    )
  })
}
