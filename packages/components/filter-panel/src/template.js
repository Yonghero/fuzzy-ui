export default [
  {
    label: '负责人',
    type: 'select',
    value: 'person',
    options: [{ label: 'a', value: 1 }, { label: 'b', value: 2 }],
  },
  {
    label: '创建人',
    type: 'select',
    value: 'createperson',
    options: [{ label: 'c', value: 1 }, { label: 'd', value: 2 }],
  },
  {
    label: '开始时间',
    type: 'select',
    value: 'startTime',
    digit: true, // 代表需要数字关系运算符
  },
]
