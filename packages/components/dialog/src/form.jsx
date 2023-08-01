import { defineComponent, ref, watch } from 'vue'
import { FormItem } from './FormItem'

export default defineComponent({
  props: {
    // 表单项列表
    template: {
      type: Array,
      default: () => [],
    },
    // 表单域位置
    labelPosition: {
      type: String,
      default: 'top',
    },
    // 表单域宽度
    labelWidth: {
      type: String,
      default: 'auto',
    },
    // 组件绑定对象
    modelValue: {
      type: Object,
      default: () => ({}),
    },
    // 是否校验
    shouldValidate: {
      type: Boolean,
      default: true,
    },
    // 业务类型
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
    // 对外部暴露出el-form的重置表单方法
    const resetFields = () => {
      realFormRef.value?.resetFields()
    }
    // 对外暴露出el-form的校验方法
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
    // 对外暴露出校验某一个字段的方法
    // eslint-disable-next-line
    const validateField = (props, cb) => {
      realFormRef.value?.validateField(props, cb)
    }
    // 对外暴露出清除校验的方法
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
    // 文件类型校验的回到
    const typeCheck = (e) => {
      emit('type-check', e)
    }
    // 上传文件改变的回调
    const fileChange = (file, files) => {
      emit('file-change', file, files)
    }
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
          <FormItem
            tmplItem={item}
            key={item.value}
            onTypeCheck={typeCheck}
            onFileChange={fileChange}
          ></FormItem>
        ))}
      </el-form>
    )
  },
})
