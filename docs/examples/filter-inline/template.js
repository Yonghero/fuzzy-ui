export default [
  {
    label: '负责人',
    type: 'input',
    value: '',
    defaultValue: 1,
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
  },
]
