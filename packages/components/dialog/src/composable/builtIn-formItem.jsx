import { unref } from 'vue'
import { FYSelect } from '../../../select'
import { FYInput } from '../../../input'
import { FYSwitch } from '../../../switch'
import { FYDatePicker } from '../../../date-picker'
import { FYCascader } from '../../../cascader'

export const Select = {
  type: 'select',
  renderer(props) {
    return (
      <FYSelect
        {...props}
        options={unref(props.options)}
        disabled={'disabled' in props ? unref(props.disabled) : false}
        v-model={props.model[props.value]}
      />
    )
  },
}
export const Input = {
  type: 'input',
  renderer(props) {
    return <FYInput {...props} disabled={'disabled' in props ? unref(props.disabled) : false} v-model={props.model[props.value]} />
  },
}

export const Textarea = {
  type: 'textarea',
  renderer(props) {
    return <FYInput {...props} textarea={true} disabled={'disabled' in props ? unref(props.disabled) : false} v-model={props.model[props.value]} />
  },
}

export const PasswordInput = {
  type: 'password',
  renderer(props) {
    return <FYInput {...props} type="password" disabled={'disabled' in props ? unref(props.disabled) : false} v-model={props.model[props.value]} />
  },
}

export const Switch = {
  type: 'switch',
  renderer(props) {
    return <FYSwitch {...props} disabled={'disabled' in props ? unref(props.disabled) : false} v-model={props.model[props.value]} />
  },
}
export const DatePicker = {
  type: 'datePicker',
  renderer(props) {
    return (
      <FYDatePicker
        type="date"
        disableLessThan={props.disableLessThan}
        disableMoreThan={props.disableMoreThan}
        disableLessThanDay={props.disableLessThanDay}
        disableMoreThanDay={props.disableMoreThanDay}
        v-model={props.model[props.value]}
      />
    )
  },
}
export const Cascader = {
  type: 'cascader',
  renderer(props) {
    return (
      <FYCascader
        props={'props' in props ? unref(props.props) : {}}
        defaultIcon={'defaultIcon' in props ? unref(props.defaultIcon) : false}
        options={unref(props.options)}
        disabled={'disabled' in props ? unref(props.disabled) : false}
        v-model={props.model[props.value]}
      />
    )
  },
}
