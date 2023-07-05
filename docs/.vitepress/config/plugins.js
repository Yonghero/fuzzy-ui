import path from 'path'
import fs from 'fs'
import MarkdownIt from 'markdown-it'
import mdContainer from 'markdown-it-container'
import { highlight } from '../utils/highlight'
import { docRoot } from './global'
const localMd = MarkdownIt()

export const mdPlugin = (md) => {
  md.use(mdContainer, 'demo', {
    validate(params) {
      return !!params.trim().match(/^demo\s*(.*)$/)
    },
    render(tokens, idx) {
      const m = tokens[idx].info.trim().match(/^demo\s+(.*)$/)
      if (tokens[idx].nesting === 1) {
        /* means the tag is opening */
        const description = m && m.length > 1 ? m[1] : ''
        const sourceFileToken = tokens[idx + 2]
        let source = ''
        // demo文件名称
        const sourceFile = sourceFileToken.children?.[0].content ?? ''
        if (sourceFileToken.type === 'inline') {
          // 读取示列代码文件
          source = fs.readFileSync(
            path.resolve(docRoot, 'examples', `${sourceFile}.vue`),
            'utf-8'
          )
        }
        if (!source) throw new Error(`Incorrect source file: ${sourceFile}`)
        // opening tag
        return `<Demo
                        source="${encodeURIComponent(highlight(source, 'vue'))}"
                        path="${sourceFile}"
                        raw-source="${encodeURIComponent(source)}"
                        description="${encodeURIComponent(
                          localMd.render(description)
                        )}">`
      } else {
        // closing tag
        return '</Demo>\n'
      }
    },
  })
}
