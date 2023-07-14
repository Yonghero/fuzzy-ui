import { ref, watchEffect } from 'vue'
import { mapperToOptions, RELATION_DIGIT_MAPPER, RELATION_MAPPER } from './constant'

// 关系运算选择框数据
export function useRelation(filterValue, filterItem) {
  const relationValue = ref(RELATION_MAPPER['属于'])

  const relationOptions = ref(mapperToOptions(RELATION_MAPPER))

  // 监听被查询字段的tmpl，更新该字段的关系运算符
  watchEffect(() => {
    if (!filterItem?.value) return

    // 关系运行符是否和数字相关
    relationOptions.value = filterItem.value.digit
      ? mapperToOptions(RELATION_DIGIT_MAPPER) // 数字关系运算
      : mapperToOptions(RELATION_MAPPER) // 条件关系运算

    relationValue.value = filterItem.value.digit
      ? RELATION_DIGIT_MAPPER['等于']
      : RELATION_MAPPER['属于']
  })

  return {
    relationOptions,
    relationValue,
  }
}
