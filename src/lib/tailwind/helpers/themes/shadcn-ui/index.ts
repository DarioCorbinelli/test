import { extendTheme } from './theme-extention'
import { generateCssInJs } from './css-in-js'
import plugin from 'tailwindcss/plugin'
import { Config, CSSRuleObject } from 'tailwindcss/types/config'

export function initializeShadcnPlugin(obj: { config: Pick<Config, 'theme' | 'plugins'>; baseCss?: CSSRuleObject | CSSRuleObject[] }) {
  return plugin(({ addBase }) => {
    addBase(generateCssInJs())
    if (obj.baseCss) addBase(obj.baseCss)
  }, extendTheme(obj.config))
}
