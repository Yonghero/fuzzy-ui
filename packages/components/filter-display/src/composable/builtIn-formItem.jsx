import { FYSelect } from '../../../select'
import { FYInput } from '../../../input'

// 触发拥有默认值的事件
// function triggerDefaultValueChange(props) {
//   if (props.model[props.value] && props.onChange) {
//     props.onWithChange({ field: props.value, value: props.model[props.value] })
//   }
// }

export const Select = {
  type: 'select',
  renderer(props) {
    // triggerDefaultValueChange(props)

    return (
      <FYSelect
        teleported={false}
        placeholder={`请选择${props.label}`}
        multiple={true}
        {...props}
        v-model={props.model[props.value]}
        onChange={
          () => {
            props.onWithChange({ field: props.value, value: props.model[props.value] })
          }
          }
      />
    )
  },
}

export const Input = {
  type: 'input',
  renderer(props) {
    // triggerDefaultValueChange(props)

    return (
      <FYInput
        v-model={props.model[props.value]}
        {...props}
        onChange={
          () => (
            props.onWithChange({ field: props.value, value: props.model[props.value] })
          )
         }

      />
    )
  },
}
