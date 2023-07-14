// 逻辑运算符
export const LOGICAL_MAPPER = {
  且: '&',
  或: '||',
}

// 数字关系运算符
export const RELATION_DIGIT_MAPPER = {
  等于: '=',
  大于: '>',
  小于: '<',
  介于: '><',
  为空: 'null',
  非空: ' ',
}

// 条件关系运算符
export const RELATION_MAPPER = {
  属于: 'is',
  不属于: 'not',
  为空: 'null',
  非空: ' ',
}

export function mapperToOptions(mapper) {
  return Object.entries(mapper).map(([label, value]) => ({ label, value }))
}
