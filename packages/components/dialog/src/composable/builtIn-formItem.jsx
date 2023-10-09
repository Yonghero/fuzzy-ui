import { FYSelect } from '../../../select'
import { FYInput } from '../../../input'
import { FYSwitch } from '../../../switch'
import { FYDatePicker } from '../../../date-picker'
import { FYCascader } from '../../../cascader'

export const Select = {
  type: 'select',
  renderer(props) {
    return <FYSelect {...props} v-model={props.model[props.value]} />
  },
}
export const Input = {
  type: 'input',
  renderer(props) {
    return <FYInput {...props} v-model={props.model[props.value]} />
  },
}

export const PasswordInput = {
  type: 'password',
  renderer(props) {
    return <FYInput {...props} type="password" v-model={props.model[props.value]} />
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
    return <FYDatePicker type="date" v-model={props.model[props.value]} />
  },
}
export const Cascader = {
  type: 'cascader',
  renderer(props) {
    return <FYCascader {...props} v-model={props.model[props.value]} />
  },
}
