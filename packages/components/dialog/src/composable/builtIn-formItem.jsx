import { defineEmits } from 'vue'
import { FYSelect } from '../../../select'
import { FYInput } from '../../../input'
import { FYSwitch } from '../../../switch'
import { FYDatePicker } from '../../../date-picker'
import { FYCascader } from '../../../cascader'

const emit = defineEmits(['update:modelValue'])
const handleValueChange = (value, key) => {
  emit('update:modelValue', { ...this.modelValue, [key]: value })
}
export const Select = {
  type: 'select',
  renderer(props) {
    return (
      <FYSelect
        placeholder={`请选择${props.label ?? ''}`}
        {...props}
        v-model={props.model[props.value]}
        onChange={() => console.log(props.model, 'props.model')}
      />
    )
  },
}
export const Input = {
  type: 'input',
  renderer(props) {
    return (
      <FYInput
        placeholder={`请输入${props.label ?? ''}`}
        {...props}
        v-model={props.model[props.value]}
      />
    )
  },
}
export const Switch = {
  type: 'switch',
  renderer(props) {
    return <FYSwitch {...props} v-model={props.model[props.value]} />
  },
}
export const DatePicker = {
  type: 'datePicker',
  renderer(props) {
    return <FYDatePicker {...props} v-model={props.model[props.value]} />
  },
}
export const Cascader = {
  type: 'cascader',
  renderer(props) {
    return <FYCascader {...props} v-model={props.model[props.value]} />
  },
}
