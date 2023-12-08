import { ThemeExtention_RadiusSets } from '../../../../../../types/themes/theme-extention/border-radius'
import { themesConfig } from '../../../../../../config/themes'

export function generateBorderRadiuses(): ThemeExtention_RadiusSets {
  const sets = {
    borderRadius: {},
  } as ThemeExtention_RadiusSets

  const tokens = themesConfig.borderRadius.tokens
  tokens.forEach((token, i) => sets.borderRadius[token] = `calc(var(--radius) - ${i * 2}px)`)

  return sets
}
