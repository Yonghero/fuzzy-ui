import { defineComponent, computed } from 'vue'

export const FormItemDetail = defineComponent({
  props: {
    tmplItem: {
      type: Object,
      default: () => ({}),
    },
    // 表示采用系统配置的表单样式
    config: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    // 表单项组件
    const FormItemCom = computed(() => (
      <div class="form-item-detail">
        {props.tmplItem.model[props.tmplItem.value]}
      </div>
    ))
    // 采用不同的表单样式
    const getFromStyle = (item) => {
      if (item.full) {
        return { flex: '0 0 100%' }
      }
      if (item.half) {
        return { flex: '0 0 45%' }
      }
      if (item.oneOfFour) {
        return { flex: '0 0 24.5%' }
      }
      return { flex: '0 0 100%' }
    }
    // 采用详情样式或者系统配置样式
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
        class={getClass.value}
      >
        <FormItemCom.value />
        {
          props.config ? (
            <div
              class="fy-form-config-info"
              style={{ marginLeft: '20px', width: '16px', height: '16px' }}
            />
          ) : null
        }
        {props.config ? <slot></slot> : null}
        {props.config ? (
          <div
            class="fy-form-config-desc"
            style={{ marginLeft: '4px', fontSize: '12px' }}
          >
            {props.tmplItem.desc}
          </div>
        ) : null}
      </ElFormItem>
    )
  },
})
