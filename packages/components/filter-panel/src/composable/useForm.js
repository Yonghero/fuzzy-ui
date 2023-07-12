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

  const formEl = ref()

  const FormItem = useFormItem(filterItem)
  const formItemProps = computed(() => filterItem.value)

  watch(filterItem, (value, oldValue) => {
    if (value === oldValue) return
    model.value = { [filterItem.value.value]: '' }
    // model.value = { [filterItem.value.value]: filterItem.value.defaultValue || '' }
  }, { immediate: true })

  async function validate() {
    if (formEl.value) {
      await formEl.value.validate((valid, fields) => {
        if (valid) {
          console.log('submit!')
          console.log(model.value)
        } else {
          console.log('error submit!', fields)
        }
      })
    }
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
