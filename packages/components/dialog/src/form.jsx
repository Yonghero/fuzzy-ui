import { defineComponent, ref, watch } from 'vue'
import { FormItem } from './formItem.jsx'

export default defineComponent({
  props: {
    template: {
      type: Array,
      default: () => [],
    },
    labelPosition: {
      type: String,
      default: 'top',
    },
    labelWidth: {
      type: String,
      default: 'auto',
    },
    modelValue: {
      type: Object,
      default: () => ({}),
    },
    shouldValidate: {
      type: Boolean,
      default: true,
    },
    businessType: {
      type: String,
      default: 'create',
    },
  },
  emits: ['submit', 'fail', 'update:modelValue'],
  setup(props, { attrs, emit, expose }) {
    const rules = ref(null)
    const realFormRef = ref(null)
    watch(rules, () => {
      setTimeout(() => {
        realFormRef.value?.clearValidate()
      }, 100)
    })
    const resetFields = () => {
      realFormRef.value?.resetFields()
    }
    const validate = () => {
      realFormRef.value?.validate((valid, object) => {
        if (valid) {
          emit('submit')
        } else {
          emit('fail', object)
          return false
        }
        return null
      })
    }
    // eslint-disable-next-line
    const validateField = (props, cb) => {
      realFormRef.value?.validateField(props, cb)
    }
    // eslint-disable-next-line
    const clearValidate = (props) => {
      if (props) {
        realFormRef.value?.clearValidate(props)
      } else {
        realFormRef.value?.clearValidate()
      }
    }
    const getRules = (list) => {
      // eslint-disable-next-line
      const targetRules = list.reduce((rules, item) => {
        rules[item.value] = []
        // 必填
        if (item.require) {
          rules[item.value].push({
            required: true,
            trigger: ['blur', 'change'],
            message: `${item.label}为必填项`,
          })
        }
        // 其他规则
        if (item.rules) {
          rules[item.value].push(...item.rules)
        }
        return rules
      }, {})
      return targetRules
    }
    rules.value = props.shouldValidate ? getRules(props.template) : []
    const initFormItems = props.template
      .filter((item) => !item.filterUnShow && item.show !== false)
      .map((sec) => ({ ...sec, model: props.modelValue }))
    expose({
      resetFields,
      validate,
      validateField,
      clearValidate,
    })
    return () => (
      <el-form
        label-position={props.labelPosition}
        model={props.modelValue}
        labelWidth={props.labelWidth}
        rules={rules}
        ref={realFormRef}
        {...attrs}
      >
        {initFormItems.map((item) => (
          <FormItem tmplItem={item} key={item.value}></FormItem>
        ))}
      </el-form>
    )
  },
})
