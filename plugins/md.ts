import path from 'path'
import fs from 'fs'
import marked from 'marked'

const mdToJs = md => {
  return `export default ${JSON.stringify(marked(md))}`
}

export function md() {
  return {
    configureServer: [
      async ({ app }) => {
        app.use(async (ctx, next) => {
          if (ctx.path.endsWith('.md')) {
            ctx.type = 'js'
            const filePath = path.join(process.cwd(), ctx.path)
            ctx.body = mdToJs(fs.readFileSync(filePath).toString())
          } else {
            await next()
          }
        })
      },
    ],
    transforms: [{
      test: context => context.path.endsWith('.md'),
      transform: ({ code }) => mdToJs(code) 
    }]
  }
}