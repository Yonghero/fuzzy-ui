import { ref } from 'vue'
import { FYSelect } from '../../../select'
import { FYInput } from '../../../input'

export const Select = {
  type: 'select',
  renderer(props) {
    return (
      <FYSelect
        placeholder={`请选择${props.label ?? ''}`}
        {...props}
        v-model={props.model[props.value]}
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
