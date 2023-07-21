import { defineComponent, computed } from 'vue'
import { InfoFilled } from '@element-plus/icons-vue'
import { formItemMap } from './composable/install'

export const FormItem = defineComponent({
  props: {
    tmplItem: {
      type: Object,
      default: () => ({}),
    },
    config: {
      type: Boolean,
      default: false,
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
    const getClass = computed(() => {
      const target = []
      if (props.config) {
        target.push('form-item-config-wrap')
      }
      console.log('props.config', props.config)
      return target.join(' ')
    })
    return () => (
      <ElFormItem
        label={props.tmplItem.label}
        key={props.tmplItem.value}
        prop={props.tmplItem.value}
        style={getFromStyle(props.tmplItem)}
        class={getClass.value}
      >
        <FormItemCom.value model={props.tmplItem.model} {...props.tmplItem} />
        {props.config ? (
          <el-icon style={{ marginLeft: '20px' }} size={20}>
            <InfoFilled size={40} />
          </el-icon>
        ) : null}
        {props.config ? <slot></slot> : null}
        {props.config ? (
          <div style={{ marginLeft: '20px' }}>{props.tmplItem.desc}</div>
        ) : null}
      </ElFormItem>
    )
  },
})
