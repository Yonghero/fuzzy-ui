import glob from 'glob'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
// import commonjs from '@rollup/plugin-commonjs'
// import alias from '@rollup/plugin-alias'
import vue from 'rollup-plugin-vue'
import babel from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { defineConfig } from 'rollup'
import postcss from 'rollup-plugin-postcss'
import svg from 'rollup-plugin-svg'
import image from '@rollup/plugin-image'

export default defineConfig({
  input: {
    ...Object.fromEntries(
      glob.sync('packages/*/index.js').map((file) => [
        // 这里将删除 `packages/` 以及每个文件的扩展名。
        // 因此，例如 packages/nested/foo.js 会变成 nested/foo
        path.relative(
          'packages',
          file.slice(0, file.length - path.extname(file).length),
        ),
        // 这里可以将相对路径扩展为绝对路径，例如
        // packages/nested/foo 会变成 /project/packages/nested/foo.js
        fileURLToPath(new URL(file, import.meta.url)),
      ]),
    ),
    'fuzzy-ui-style': 'packages/theme-chalk/src/index.scss',
  },
  context: 'window',
  output: [
    {
      dir: 'lib',
      format: 'es',
      entryFileNames: () => '[name].mjs',
    },
    {
      dir: 'lib',
      format: 'cjs',
      exports: 'named',
      entryFileNames: () => '[name].cjs',
    },
  ],
  external: ['vue', 'element-plus', 'elementPlus', '@vue-office/docx', '@vue-office/excel', '@vue-office/pdf'],
  plugins: [
    // alias({
    //   entries: [
    //     { find: 'utils', replacement: new URL('./packages/utils', import.meta.url).pathname },
    //   ],
    // }),
    // commonjs(),
    image(),
    svg(),
    // commonjs({
    //   include: /node_modules/,
    // }),
    nodeResolve({
      browser: true,
      preferBuiltins: false,
      extensions: ['.js', '.json', '.jsx', '.vue'],
    }),
    vue(),
    postcss({
      extensions: ['.css', '.scss', '.sass'],
      extract: 'fuzzy-ui-style/index.css',
    }),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env'],
      extensions: ['.js', '.vue', '.jsx', '.svg'],
    }),
  ],
})
