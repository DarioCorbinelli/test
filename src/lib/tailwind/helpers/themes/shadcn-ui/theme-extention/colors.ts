import { merge } from 'lodash'
import { themesConfig } from '../../../../../../config/themes'
import { ColorTokens_Core } from '../../../../../../types/themes'
import {
  ThemeExtention_Colors,
  CoreColors as ThemeExtention_CoreColors,
  SemanticColors as ThemeExtention_SemanticColors,
  SemanticColors_Advanced as ThemeExtention_SemanticColors_Advanced,
  SemanticColors_Basic as ThemeExtention_SemanticColors_Basic,
} from '../../../../../../types/themes/theme-extention/colors'

function generateColors_Core(): ThemeExtention_CoreColors {
  const colors = themesConfig.colors.tokens.core.values
  const shades = themesConfig.colors.tokens.core.shades

  const colors_obj: ThemeExtention_CoreColors = {} as ThemeExtention_CoreColors

  colors.forEach((color) => {
    const color_obj = (colors_obj[color] = {} as ThemeExtention_CoreColors[ColorTokens_Core])

    shades.forEach((shade) => {
      color_obj[shade] = `hsla(var(--${color}-${shade}), <alpha-value>)` as const
    })
  })

  return colors_obj
}
function generateColors_Semantic(): ThemeExtention_SemanticColors {
  function generateBasicColors(): ThemeExtention_SemanticColors_Basic {
    const basicColors = themesConfig.colors.tokens.semantic.basic
    const colors_obj = {} as ThemeExtention_SemanticColors_Basic

    basicColors.forEach((color) => (colors_obj[color] = `hsla(var(--${color}), <alpha-value>)`))

    return colors_obj
  }
  function generateAdvancedColors(): ThemeExtention_SemanticColors_Advanced {
    const advancedColors = themesConfig.colors.tokens.semantic.advanced.values
    const shades = themesConfig.colors.tokens.semantic.advanced.shades

    const colors_obj = {} as ThemeExtention_SemanticColors_Advanced

    advancedColors.forEach((color) => {
      const color_obj = (colors_obj[color] = {} as ThemeExtention_SemanticColors[typeof color])
      shades.forEach((shade) => {
        color_obj[shade] = shade === 'DEFAULT' ? `hsla(var(--${color}), <alpha-value>)` : `hsla(var(--${color}-${shade}), <alpha-value>)`
      })
    })

    return colors_obj
  }

  const basicColors_obj = generateBasicColors()
  const advancedColors_obj = generateAdvancedColors()

  return merge({}, basicColors_obj, advancedColors_obj)
}

export function generateColors(): ThemeExtention_Colors {
  const coreColors = generateColors_Core()
  const semanticColors = generateColors_Semantic()

  const mergedColors = merge({}, coreColors, semanticColors)
  return { colors: mergedColors }
}
