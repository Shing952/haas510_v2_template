import type { PluginOption } from 'vite'
import createCopy from './copy'
export default function createVitePlugins() {
  const vitePlugins: (PluginOption | PluginOption[])[] = []
  vitePlugins.push(createCopy())
  return vitePlugins
}
