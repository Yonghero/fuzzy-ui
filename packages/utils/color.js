export function getRandomColor() {
  // 生成 RGB 色值的随机数
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)

  // 将 RGB 色值转换为十六进制形式
  const hexR = r.toString(16).padStart(2, '0')
  const hexG = g.toString(16).padStart(2, '0')
  const hexB = b.toString(16).padStart(2, '0')

  // 拼接成完整的颜色值
  return `#${hexR}${hexG}${hexB}`
}

// 示例使用
// const randomColor = getRandomColor()
