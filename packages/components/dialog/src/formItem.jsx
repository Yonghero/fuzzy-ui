import { defineComponent, computed } from 'vue'
import { formItemMap } from './composable/install'

export const FormItem = defineComponent({
  props: {
    tmplItem: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    // 表单项组件
    const FormItemCom = computed(() => {
      if (props.tmplItem.render) return props.tmplItem.render
      const renderer = formItemMap.get(props.tmplItem.type)
      return renderer || <div />
    })
    const getFromStyle = (item) => {
      if (item.full) {
        return { flex: '0 0 100%' }
      }
      if (item.half) {
        return { flex: '0 0 49%' }
      }
      if (item.oneOfFour) {
        return { flex: '0 0 24.5%' }
      }
      return { flex: '0 0 100%' }
    }
    return () => (
      <ElFormItem
        label={props.tmplItem.label}
        key={props.tmplItem.value}
        prop={props.tmplItem.value}
        style={getFromStyle(props.tmplItem)}
      >
        <FormItemCom.value model={props.tmplItem.model} {...props.tmplItem} />
      </ElFormItem>
    )
  },
})
