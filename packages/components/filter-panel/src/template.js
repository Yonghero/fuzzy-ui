export default [
  {
    label: '负责人',
    type: 'select',
    value: 'person',
    defaultValue: 1,
    options: [{ label: '王小谟', value: 1 }, { label: '张大哥', value: 2 }],
  },
  {
    label: '创建人',
    type: 'select',
    value: 'createperson',
    defaultValue: 2,
    options: [{ label: '李校长', value: 1 }, { label: '王美丽', value: 2 }],
  },
  {
    label: '开始时间',
    type: 'datePicker',
    value: 'startTime',
    digit: true, // 代表需要数字关系运算符
  },
]
