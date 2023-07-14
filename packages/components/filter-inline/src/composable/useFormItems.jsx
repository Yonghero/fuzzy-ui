import { unref, computed } from 'vue'
import { filterInlineItemMap } from './install'

export function useFormItems(props, model) {
  const FormItems = computed(() => props.template
    .filter((item) => !unref(item?.visible))
    .map((item) => {
      const FormItemComp = filterInlineItemMap.get(item.type)

      return (
        unref(item.show) === false
          ? null
          : (
            <ElFormItem
              label={item.label}
              key={item.value}
              prop={item.value}
            >
              {
                item.render
                  ? <item.render model={unref(model)} value={item.value}/>
                  : <FormItemComp {...item} model={unref(model)}/>
              }
            </ElFormItem>
          )
      )
    }))

  return FormItems
}
