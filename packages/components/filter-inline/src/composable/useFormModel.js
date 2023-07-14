import { watch, ref, unref } from 'vue'

export function useFormModel(props) {
  const model = ref({})

  watch(
    () => props.template,
    (template) => {
      if (!template) return
      template.forEach((item) => {
        if (item.value) {
          model.value[item.value] = unref(item.defaultValue) !== undefined
            ? unref(item.defaultVale)
            : ''
        }
      })
    },
    { immediate: true },
  )

  return model
}
