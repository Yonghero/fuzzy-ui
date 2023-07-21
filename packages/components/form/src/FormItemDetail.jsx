import { defineComponent, computed } from 'vue'
import { InfoFilled } from '@element-plus/icons-vue'

export const FormItemDetail = defineComponent({
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
    console.log(props.tmplItem.model[props.tmplItem.value], 'model value')
    // 表单项组件
    const FormItemCom = computed(() => (
      <div class="form-item-detail">
        {props.tmplItem.model[props.tmplItem.value]}
      </div>
    ))
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
      target.push('form-item-detail-wrap')
      if (props.config) {
        target.push('form-item-config-wrap')
      }
      return target.join(' ')
    })
    return () => (
      <ElFormItem
        label={props.tmplItem.label}
        key={props.tmplItem.value}
        prop={props.tmplItem.value}
        style={getFromStyle(props.tmplItem)}
        class={getClass}
      >
        <FormItemCom.value />
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
