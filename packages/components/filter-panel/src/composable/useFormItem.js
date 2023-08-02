import { computed } from 'vue'
import { filterPanelItemMap } from './install'

export function useFormItem(filterItem) {
  return computed(() => (
    filterItem.value.render && typeof filterItem.value.render === 'function'
      ? filterItem.value.render
      : filterPanelItemMap.get(filterItem.value.type)
  ))
}
