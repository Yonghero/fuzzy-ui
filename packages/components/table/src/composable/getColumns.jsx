import { computed, unref } from 'vue'

import { tableEditItem } from './install'

export function getColumns(template) {
  const _getColumn = (scope, tmpl) => {
    if (tmpl.render) {
      const renderTmpl = tmpl.render({ scope, key: tmpl.value, value: scope.row[tmpl.value] })
      if (renderTmpl?.setup) return <renderTmpl/>
      return renderTmpl
    }
    if (tmpl.type) {
      // eslint-disable-next-line no-underscore-dangle
      const __innterTypes = ['limit', 'timeDisplay']
      const type = (() => {
        const innerType = __innterTypes.find((type) => tmpl.type.includes(type))
        if (innerType) {
          return innerType
        }

        return tmpl.type
      })()

      const EditRenderer = tableEditItem.get(type)
      if (EditRenderer) {
        return (<EditRenderer {...tmpl} scope={scope}/>)
      }
    }

    return (scope.row[tmpl?.value] || scope.row[tmpl?.value] === 0 ? scope.row[tmpl?.value] : '-')
  }

  return computed(() => unref(template).map((tmpl) => {
    const slots = {
      default: (scope) => _getColumn(scope, tmpl),
    }

    return (
      <el-table-column
        v-slots={slots}
        key={tmpl.value}
        label={tmpl.label}
        prop={tmpl.value}
        header-align={'center'}
        {...tmpl}
      />
    )
  }))
}
