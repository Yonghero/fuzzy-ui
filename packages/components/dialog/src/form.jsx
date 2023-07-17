import { defineComponent, ref, watch, computed } from 'vue'
import { ElForm, ElFormItem } from 'element-plus'
import { formItemMap } from './composable/install'

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
  },
  emits: ['submit', 'fail', 'update:modelValue'],
  setup(props, { attrs, emit, expose }) {
    console.log(props, 'props')
    const rules = ref(null)
    const realFormRef = ref(null)

    watch(rules, () => {
      setTimeout(() => {
        realFormRef.value?.clearValidate()
      }, 100)
    })
    // eslint-disable-next-line
    const resetFields = () => {
      realFormRef.value?.resetFields()
    }
    // eslint-disable-next-line
    const validate = () => {
      console.log(2, realFormRef.value)
      realFormRef.value?.validate((valid, object) => {
        if (valid) {
          realFormRef.value?.resetFields()
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
    const handleValueChange = (value, key) => {
      emit('update:modelValue', { ...this.modelValue, [key]: value })
    }
    const getFormComponent = (type) => formItemMap.get(type)
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
    const initFormItems = (list) =>
      list
        .filter((item) => !item.filterUnShow)
        .map((item, index) =>
          item.show === false ? null : (
            <ElFormItem
              label={item.label}
              key={item.value}
              prop={item.value}
              style={getFromStyle(item, index)}
            >
              {getFormComponent(item.type)({
                ...item,
                model: props.modelValue,
              })}
            </ElFormItem>
            // eslint-disable-next-line
          )
        )
    const FormItem = computed(() => {
      const renderer = props.template
        .filter((item) => !item.filterUnShow)
        .map((item, index) =>
          item.show === false ? null : (
            <ElFormItem
              label={item.label}
              key={item.value}
              prop={item.value}
              style={getFromStyle(item, index)}
            >
              {getFormComponent(item.type)({
                ...item,
                model: props.modelValue,
              })}
            </ElFormItem>
            // eslint-disable-next-line
          )
        )
      console.log(renderer, 'renderer')
      return renderer || <div />
    })
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
        <FormItem.value />
      </el-form>
    )
  },
})
