import { computed } from 'vue'
import { formItemMap } from './install'

export function useFormItem(filterItem) {
  return computed(() => formItemMap.get(filterItem.value.type))
}
