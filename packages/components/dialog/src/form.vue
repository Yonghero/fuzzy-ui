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
    }
  },
  mounted() {
  },
  methods: {
    handleValueChange(value, key) {
      this.$emit('update:modelValue', { ...this.modelValue, [key]: value })
    },
    getFormComponent(type) {
      return formItemMap.get(type)
    },
    getFromStyle(item) {
      if (item.full) {
        return { flex: '0 0 98%' }
      }
      if (item.half) {
        return { flex: '0 0 49%' }
      }
      if (item.oneOfFour) {
        return { flex: '0 0 24.5%' }
      }
      return { flex: '0 0 98%' }
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
        labelWidth={this.labelWidth}
      >
        {this.initFormItems(this.formModelItems)}
      </el-form>
    )
  },
}
</script>
