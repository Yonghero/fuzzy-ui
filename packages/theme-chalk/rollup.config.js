import postcss from 'rollup-plugin-postcss'

export default {
  input: 'src/index.scss', // 入口 SCSS 文件路径
  output: {
    file: 'lib/yh-ui-theme-chalk.css', // 输出 CSS 文件路径
    format: 'es', // 输出模块格式
  },
  plugins: [
    postcss({
      extract: true, // 提取 CSS 到单独的文件
      minimize: true, // 压缩 CSS
      sourceMap: true, // 生成 source map
      extensions: ['.scss','.sass'], // 处理的文件类型
    }),
  ],
};