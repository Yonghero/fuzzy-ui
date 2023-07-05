import { withInstall } from '@hitotek/fuzzy-ui-utils'
import DatePicker from './src/date-picker.vue'

export const FYDatePicker = withInstall(DatePicker)
export default FYDatePicker

export * from './src/composable/DatePickerProvider'
export * from './src/date-picker.vue'
