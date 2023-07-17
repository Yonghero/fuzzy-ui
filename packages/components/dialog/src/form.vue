<script lang="jsx">
import { formItemMap } from './composable/install'

export default {
  props: {
    formModelItems: {
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
    formRef: {

    },
  },
  data() {
    return {
      formModel2: {
        name: '',
        region: {
          value: '',
          options1: [
            {
              value: 'Option1',
              label: 'Option1',
            },
            {
              value: 'Option2',
              label: 'Option2',
            },
            {
              value: 'Option3',
              label: 'Option3',
            },
            {
              value: 'Option4',
              label: 'Option4',
            },
          ],
        },
        switch2: '',
      },
      rules: null,
    }
  },
  watch: {
    rules: {
      handler(newV) {
        setTimeout(() => {
          this.$refs[this.formRef]?.clearValidate()
        }, 100)
      },
    },
  },
  created() {
    this.rules = this.shouldValidate ? this.getRules(this.formModelItems) : []
  },
  methods: {
    resetFields() {
      this.$refs.realFormRef.resetFields()
    },
    validate() {
      this.$refs.realFormRef.validate((valid) => {
        if (valid) {
          console.log('form emit submit')
          this.$refs.realFormRef.resetFields()
          this.$emit('submit')
        } else {
          console.log('form emit fail')
          this.$emit('fail')
          return false
        }
        return null
      })
    },
    getRules(list) {
      const rules = list.reduce((rules, item) => {
        rules[item.value] = []
        // 必填
        if (item.require) { rules[item.value].push({ required: true, trigger: ['blur', 'change'], message: `${item.label}为必填项` }) }
        // 其他规则
        if (item.rules) { rules[item.value].push(...item.rules) }
        return rules
      }, {})
      return rules
    },
    handleValueChange(value, key) {
      this.$emit('update:modelValue', { ...this.modelValue, [key]: value })
    },
    getFormComponent(type) {
      return formItemMap.get(type)
    },
    getFromStyle(item) {
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
    },
    initFormItems(list) {
      return list
        .filter((item) => !item.filterUnShow)
        .map((item, index) => (item.show === false ? null
          : (
            <ElFormItem
              label={item.label}
              key={item.value}
              prop={item.value}
              style={this.getFromStyle(item, index)}
            >
              {this.getFormComponent(item.type)({ ...item, model: this.modelValue })}
            </ElFormItem>
          )))
    },
  },
  render() {
    return (
      <el-form label-position={this.labelPosition} model={this.modelValue}
        labelWidth={this.labelWidth} rules={this.rules} ref="realFormRef"
      >
        {this.initFormItems(this.formModelItems)}
      </el-form>
    )
  },
}
</script>
