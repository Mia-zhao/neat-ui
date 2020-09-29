// @ts-nocheck
import fs from 'fs'
import { baseParse } from '@vue/compiler-core'
import { md } from "./plugins/md"

export default {
  plugins: [md()],
  vueCustomBlockTransforms: {
    demo: (options) => {
      const { path } = options
      const file = fs.readFileSync(path).toString()
      const parsed = baseParse(file).children.find(c => c.tag === 'demo')
      const main = file.split(parsed.loc.source).join('').trim()
      return `export default function (Component) {
        Component.__sourceCode = ${
          JSON.stringify(main)
        }
        Component.__i18nTitle = ${JSON.stringify(parsed.children[0].content)}
      }`.trim()
    }
  }
}