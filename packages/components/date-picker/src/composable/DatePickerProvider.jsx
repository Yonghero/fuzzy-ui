import { defineComponent, ref } from 'vue'
import FYDatePicker from '../date-picker.vue'

export function createRangeDatePicker() {
  const startValue = ref('')
  const endValue = ref('')

  // 开始日期
  const StartDatePicker = defineComponent({

    setup(_, { attrs }) {
      return () => (
        <FYDatePicker
          type="date"
          v-model={startValue.value}
          {...attrs}
        >
        </FYDatePicker>
      )
    },
  })

  // 截止日期
  const EndDatePicker = defineComponent({
    setup() {
      return (_, { attrs }) => (
        <FYDatePicker
          type="date"
          disabledDate={ (time) => new Date(time) < new Date(startValue.value)}
          v-model={endValue.value}
          {...attrs}
        >
        </FYDatePicker>
      )
    },
  })

  return {
    StartDatePicker,
    EndDatePicker,
    startValue,
    endValue,
  }
}
