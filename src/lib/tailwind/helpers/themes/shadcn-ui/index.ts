import { extendTheme } from './theme-extention'
import { generateCssInJs } from './css-in-js'
import plugin from 'tailwindcss/plugin'
import { Config } from 'tailwindcss/types/config'

export function initializeShadcnPlugin(config: Pick<Config, 'theme' | 'plugins'>) {
  return plugin(({ addBase }) => {
    addBase(generateCssInJs())
  }, extendTheme(config))
}
