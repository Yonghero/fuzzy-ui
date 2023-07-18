import { ref } from 'vue'
import { FYDatePicker } from '../../../date-picker'
import { FYSelect } from '../../../select'

export const Select = {
  type: 'select',
  renderer(props) {
    return (
        <FYSelect
          // style="width: 300px"
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

    const weekStart = () => {
      const now = new Date()
      const firstDayOfWeek = new Date(now - (now.getDay() - 1) * 86400000) // 一天的毫秒数为 24*60*60*1000 = 86400000

      firstDayOfWeek.setHours(0, 0, 0, 0) // 设置时间为当天的 00:00:00:000

      return firstDayOfWeek
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
                ? weekStart() : ''
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
