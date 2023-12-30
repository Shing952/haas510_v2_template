import path from 'node:path'
import type { Plugin } from 'vite'

import copy from 'rollup-plugin-copy'
export default function createCopy(): Plugin {

  const outDir =  'dist'
  const dest = path.resolve(process.cwd(), `${outDir}`)
  return copy({
    targets: [
      { src: 'src/app.json', dest },
    ],
    hook: 'writeBundle',
  })
}
