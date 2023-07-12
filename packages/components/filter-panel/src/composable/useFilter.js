import {
  computed, ref, watch,
} from 'vue'

// 查询字段配置
export function useFilter(props) {
  const filterValue = ref()
  const filterItem = ref()
  const filterOptions = computed(() => props.template.map((tmpl) => ({ label: tmpl.label, value: tmpl })))

  // 根据 templates 更新默认值
  watch(
    () => props.template,
    () => {
      if (!props.template?.length) return
      const [defaultItem] = props.template
      filterItem.value = defaultItem
      filterValue.value = filterOptions.value[0].value
    },
    { immediate: true },
  )

  // 查询字段变更后, 该字段对应的tmpl更新
  watch(filterValue, (value, oldValue) => {
    if (value === oldValue) return
    filterItem.value = value
  })

  return {
    filterValue,
    filterOptions,
    filterItem,
  }
}
