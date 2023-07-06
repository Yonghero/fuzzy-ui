export function useDisabledDate(props) {
  const disabledDate = (time) => {
    if (props.disableLessThan) return disableLessThanCurDate(time)
    if (props.disableMoreThan) return disableGreaterThanCurDate(time)
    return false
  }

  // 禁用大于当前时间的选择
  const disableLessThanCurDate = (time) => new Date(time).getTime() > new Date().getTime()

  // 禁用小于当前时间的选择
  const disableGreaterThanCurDate = (time) => !disableLessThanCurDate(time)

  return disabledDate
}
