import { ref } from 'vue'
import { FYDatePicker } from '../../../date-picker'
import { FYSelect } from '../../../select'

export const Select = {
  type: 'select',
  renderer(props) {
    return (
        <FYSelect
          style="width: 300px"
          placeholder={`请选择${props.label}`}
          {...props}
          v-model={props.model[props.value]}
          placement="bottom-start"
        />
    )
  },
}

export const DatePicker = {
  type: 'datePicker',
  renderer(props) {
    const checkValue = ref(1)

    const weekAgo = () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
      return date
    }

    return (
      <div style="width: 100%; display: flex; column-gap: 0.5rem;">
        <FYSelect
          v-model={checkValue.value}
          style="width: 120px"
          onChange={(v) => {
            // eslint-disable-next-line no-nested-ternary
            props.model[props.value] = v === 2
              ? new Date() : v === 3
                ? weekAgo() : ''
          }}
          options={[
            { label: '自定义时间', value: 1 },
            { label: '今天', value: 2 },
            { label: '本周', value: 3 },
          ]}/>

        <FYDatePicker
          style="width: 180px"
          placeholder="请选择"
          {...props}
          type="date"
          v-model={props.model[props.value]}
        />
      </div>
    )
  },
}
