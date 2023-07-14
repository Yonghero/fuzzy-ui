import { computed, ref, watch } from 'vue'
import { useFormItem } from './useFormItem'

export function useForm(filterItem) {
  const model = ref({})
  const rules = computed(() => {
    if (filterItem.value.validate) {
      return {
        [filterItem.value.value]: filterItem.value.validate,
      }
    }
    return {
      [filterItem.value.value]: [{ required: true, trigger: 'change', message: '' }],
    }
  })

  // 表单Ref组件
  const formEl = ref()

  // 动态组件
  const FormItem = useFormItem(filterItem)
  const formItemProps = computed(() => filterItem.value)

  // 监听当前查询字段 动态修改表单绑定数据
  watch(
    filterItem,
    (value, oldValue) => {
      if (value === oldValue) return
      // model.value = { [filterItem.value.value]: '' }
      model.value = { [filterItem.value.value]: filterItem.value.defaultValue || '' }
    },

    { immediate: true },
  )

  const validateFailedValue = Promise.resolve({})

  async function validate() {
    if (formEl.value) {
      // 通过校验
      await formEl.value.validate()
      // 返回表单绑定数据
      return model.value
    }
    return validateFailedValue
  }

  return {
    model,
    rules,
    FormItem,
    formItemProps,
    formEl,
    validate,
  }
}
