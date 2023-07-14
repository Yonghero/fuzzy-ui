import { computed } from 'vue'
import { formItemMap } from './install'

export function useFormItem(filterItem) {
  return computed(() => (
    filterItem.value.render && typeof filterItem.value.render === 'function'
      ? filterItem.value.render
      : formItemMap.get(filterItem.value.type)
  ))
}
