import { FYSelect } from '../../../select'
import { FYInput } from '../../../input'
import { FYDatePicker } from '../../../date-picker'

export const Select = {
  type: 'select',
  renderer(props) {
    return (
      <FYSelect
        placeholder={`请选择${props.label}`}
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
        {...props}
        v-model={props.model[props.value]}
      />
    )
  },
}

export const DatePicker = {
  type: 'datePicker',
  renderer(props) {
    return (
      <FYDatePicker
        {...props}
        placeholder={`请选择${props.label}`}
        v-model={props.model[props.value]}
        type="date"
      >
      </FYDatePicker>
    )
  },
}
