import { themes, themesConfig } from '../../../../../../config/themes'
import { AdvancedSemanticColors_Obj, ColorModes, ColorSets, ColorTokens_Semantic, ColorTokens_Semantic_Advanced, ColorTokens_Semantic_Basic, SemanticColor_Tuple, Themes } from '../../../../../../types/themes'
import { CssInJs_Colors, CoreColors as CssInJs_CoreColors, SemanticColors as CssInJs_SemanticColors } from '../../../../../../types/themes/css-in-js/colors'

// utils -----------------------------------------------------
function hexToHslString(hex: string) {
  // Rimuovi il carattere '#' se presente
  hex = hex.replace(/^#/, '')

  // Verifica se il formato hex è valido
  if (!/^[0-9A-Fa-f]{6}$/.test(hex)) {
    console.error('Formato hex non valido.')
    return hex
  }

  // Converti il colore hex in RGB
  const bigint: number = parseInt(hex, 16)
  const r: number = (bigint >> 16) & 255
  const g: number = (bigint >> 8) & 255
  const b: number = bigint & 255

  // Normalizza i valori RGB da 0 a 1
  const normalizedR: number = r / 255
  const normalizedG: number = g / 255
  const normalizedB: number = b / 255

  // Trova il valore massimo e minimo tra i componenti RGB
  const max: number = Math.max(normalizedR, normalizedG, normalizedB)
  const min: number = Math.min(normalizedR, normalizedG, normalizedB)

  // Calcola la luminosità
  const lightness: number = (max + min) / 2

  // Calcola la saturazione
  let saturation: number = 0
  if (max !== min) {
    saturation = lightness > 0.5 ? (max - min) / (2 - max - min) : (max - min) / (max + min)
  }

  // Calcola l'angolo dell'hue in gradi
  let hue: number = 0
  if (max === normalizedR) {
    hue = (normalizedG - normalizedB) / (max - min)
  } else if (max === normalizedG) {
    hue = 2 + (normalizedB - normalizedR) / (max - min)
  } else {
    hue = 4 + (normalizedR - normalizedG) / (max - min)
  }
  hue *= 60
  if (hue < 0) {
    hue += 360
  }

  if (isNaN(hue)) hue = 0

  // Formatta la stringa HSL
  const hslString: string = `${Math.round(hue)}, ${Math.round(saturation * 100)}%, ${Math.round(lightness * 100)}%`

  return hslString
}
export function isTupleOrObj(semanticColor: Themes['colors']['modes'][ColorSets][ColorModes][ColorTokens_Semantic]) {
  if (Array.isArray(semanticColor)) return 'tuple' as const
  else return 'obj' as const
}

const colorSets_dataAttr = themesConfig.colors.sets.dataAttribute
const colorModes_dataAttr = themesConfig.colors.modes.dataAttribute

function generateCssInJs_CoreColors(): CssInJs_CoreColors {
  const colorSets = themes.colors.sets

  const coreColors = {} as CssInJs_CoreColors

  for (const _colorSetName in colorSets) {
    const colorSetName = _colorSetName as keyof typeof colorSets

    const colorSet_dataAttr = `[data-${colorSets_dataAttr}='${colorSetName}']` as const
    const colorSet_obj = (coreColors[colorSet_dataAttr] = {
      '--white': hexToHslString('#ffffff'),
    } as CssInJs_CoreColors[typeof colorSet_dataAttr])

    const colorSet = colorSets[colorSetName]

    for (const _coreColorName in colorSet) {
      const coreColorName = _coreColorName as keyof typeof colorSet
      const coreColor = colorSet[coreColorName]

      for (const _shadeName in coreColor) {
        const shadeName = _shadeName as keyof typeof coreColor
        const hex = coreColor[shadeName]

        const hslString = hexToHslString(hex)
        const cssVar = `--${coreColorName}-${shadeName}` as const

        colorSet_obj[cssVar] = hslString
      }
    }
  }

  return coreColors
}

function generateCssInJs_SemanticColors(): CssInJs_SemanticColors {
  const colorModes = themes.colors.modes

  const semanticColors_obj = {} as CssInJs_SemanticColors

  for (const _colorSetName in colorModes) {
    const colorSetName = _colorSetName as keyof typeof colorModes
    const colorSet = colorModes[colorSetName]

    for (const _colorModeName in colorSet) {
      const colorModeName = _colorModeName as keyof typeof colorSet

      const cssSelector = `[data-${colorSets_dataAttr}='${colorSetName}'][data-${colorModes_dataAttr}='${colorModeName}']` as const
      const semanticColor_obj = (semanticColors_obj[cssSelector] = {} as CssInJs_SemanticColors[typeof cssSelector])

      const semanticColors = colorSet[colorModeName]

      for (const _semanticColorName in semanticColors) {
        const semanticColorName = _semanticColorName as keyof typeof semanticColors
        const semanticColor = semanticColors[semanticColorName]

        if (isTupleOrObj(semanticColor) === 'tuple') {
          const basicSemanticColorName = semanticColorName as ColorTokens_Semantic_Basic
          const [coreColorName, shadeName] = semanticColor as SemanticColor_Tuple

          semanticColor_obj[`--${basicSemanticColorName}`] = coreColorName === 'white' ? `var(--${coreColorName})` : `var(--${coreColorName}-${shadeName})`
        } else {
          const advancedSemanticColorName = semanticColorName as ColorTokens_Semantic_Advanced
          const advancedSemanticColor = semanticColor as AdvancedSemanticColors_Obj[ColorTokens_Semantic_Advanced]

          for (const _shadeName in advancedSemanticColor) {
            const shadeName = _shadeName as keyof typeof advancedSemanticColor
            const [coreColorName, shade] = advancedSemanticColor[shadeName]

            if (shadeName === 'DEFAULT') semanticColor_obj[`--${advancedSemanticColorName}`] = coreColorName === 'white' ? `var(--${coreColorName})` : `var(--${coreColorName}-${shade})`
            else semanticColor_obj[`--${advancedSemanticColorName}-${shadeName}`] = coreColorName === 'white' ? `var(--${coreColorName})` : `var(--${coreColorName}-${shade})`
          }
        }
      }
    }
  }

  return semanticColors_obj
}

export function generateCssInJs_Colors(): CssInJs_Colors {
  const coreColors = generateCssInJs_CoreColors()
  const semanticColors = generateCssInJs_SemanticColors()

  return { ...coreColors, ...semanticColors }
}
