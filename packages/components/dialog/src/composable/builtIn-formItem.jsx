import { ref } from 'vue'
import { FYSelect } from '../../../select'
import { FYInput } from '../../../input'

export const Select = {
  type: 'select',
  renderer(props) {
    console.log(props.model[props.value], 'props selet')
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
    console.log(props, 'props input')
    return (
      <FYInput
        placeholder={`请输入${props.label ?? ''}`}
        {...props}
        v-model={props.model[props.value]}
      />
    )
  },
}
