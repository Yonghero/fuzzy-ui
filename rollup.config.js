import glob from 'glob'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import alias from '@rollup/plugin-alias'
import vue from 'rollup-plugin-vue'
import babel from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { defineConfig } from 'rollup'
import postcss from 'rollup-plugin-postcss'

export default defineConfig({
  input: {
    ...Object.fromEntries(
      glob.sync('packages/*/index.js').map(file => {
        return [
          // 这里将删除 `packages/` 以及每个文件的扩展名。
          // 因此，例如 packages/nested/foo.js 会变成 nested/foo
          path.relative(
          'packages',
          file.slice(0, file.length - path.extname(file).length)
          ),
          // 这里可以将相对路径扩展为绝对路径，例如
          // packages/nested/foo 会变成 /project/packages/nested/foo.js
          fileURLToPath(new URL(file, import.meta.url))
        ]
      })
    ),
    // "yh-ui-style": "packages/theme-chalk/src/index.scss"
  },
  output: [
    {
      dir: 'lib',
      format: 'es',
      entryFileNames: chunk => `[name].mjs`
      },
    {
      dir: 'lib',
      format: 'cjs',
      exports: 'named',
      entryFileNames: chunk => `[name].cjs`,
    }
  ],
  external: ['vue','element-plus', 'elementPlus'],
  plugins: [
    alias({
      entries: [
        { find: 'utils', replacement: new URL('./packages/utils', import.meta.url).pathname}
      ]
    }),
    nodeResolve(),
    vue(),
    postcss({
      extensions:['.css','.scss','.sass'],
      extract: "yh-ui-style/index.css",
    }),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.vue']
    }),
  ],
})