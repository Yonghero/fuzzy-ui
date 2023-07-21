import { defineComponent, ref, watch } from 'vue'
import { FormItem } from './FormItem.jsx'
import { FormItemDetail } from './FormItemDetail.jsx'
import '@hitotek/fuzzy-ui-theme-chalk/src/form/form.scss'

export default defineComponent({
  name: 'FYForm',
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
    // 分为write类型（即新增和编辑），以及read（详情）
    businessType: {
      type: String,
      default: 'write',
    },
    config: {
      type: Boolean,
      default: false,
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
      console.log('validate')
      realFormRef.value?.validate((valid, object) => {
        console.log(valid, object, 'object')
        if (valid) {
          console.log('submit')
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

    let initFormItems = props.template
      .filter((item) => !item.filterUnShow && item.show !== false)
      .map((sec) => ({ ...sec, model: props.modelValue }))
    const styleObj = {
      full: !(initFormItems.length > 4) || props.config,
      half: initFormItems.length > 4 && !props.config,
      oneOfFour: false,
    }
    initFormItems = initFormItems.map((item) => ({ ...item, ...styleObj }))
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
        {props.businessType !== 'read'
          ? initFormItems.map((item) => (
              <FormItem
                tmplItem={item}
                key={item.value}
                config={props.config}
              ></FormItem>
              // eslint-disable-next-line
            ))
          : initFormItems.map((item) => (
              <FormItemDetail
                tmplItem={item}
                key={item.value}
                config={props.config}
              ></FormItemDetail>
              // eslint-disable-next-line
            ))}
      </el-form>
    )
  },
})
