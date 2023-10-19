import dayjs from 'dayjs'

export function useDisabledDate(props) {
  const disabledDate = (time) => {
    if (props.disableLessThan) return disableLessThanCurDate(time)
    if (props.disableMoreThan) return disableGreaterThanCurDate(time)
    if (props.disableLessThanDay) return disableLessThanDay(time)
    if (props.disableMoreThanDay) return disableMoreThanDay(time)
    return false
  }

  // 禁用大于当前时间的选择
  const disableLessThanCurDate = (time) => new Date(time).getTime() > Date.now()

  // 禁用小于当前时间的选择
  const disableGreaterThanCurDate = (time) => !disableLessThanCurDate(time)

  const disableLessThanDay = (time) => dayjs(time).startOf('day').unix() > dayjs().startOf('day').unix()
  const disableMoreThanDay = (time) => !disableLessThanDay(time)

  return disabledDate
}
