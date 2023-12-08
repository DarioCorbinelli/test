import { themesConfig } from "../../config/themes";

export type ThemesConfig = typeof themesConfig

export type ColorSets = ThemesConfig['colors']['sets']['values'][number]
export type ColorModes = ThemesConfig['colors']['modes']['values'][number]

export type ColorTokens_Core = ThemesConfig['colors']['tokens']['core']['values'][number]
export type ColorTokens_Core_Shades = ThemesConfig['colors']['tokens']['core']['shades'][number]
export type ColorTokens_Semantic_Basic = ThemesConfig['colors']['tokens']['semantic']['basic'][number]
export type ColorTokens_Semantic_Advanced = ThemesConfig['colors']['tokens']['semantic']['advanced']['values'][number]
export type ColorTokens_Semantic_Advanced_Shades = ThemesConfig['colors']['tokens']['semantic']['advanced']['shades'][number]

export type ColorTokens_Semantic_Advanced_DefaultShade = ThemesConfig['colors']['tokens']['semantic']['advanced']['shades'][0]
export type ColorTokens_Semantic_Advanced_NonDefaultShades = Exclude<ColorTokens_Semantic_Advanced_Shades, ColorTokens_Semantic_Advanced_DefaultShade>

export type ColorTokens_Semantic = ColorTokens_Semantic_Basic | ColorTokens_Semantic_Advanced

type BorderRadius_Arr = ThemesConfig['borderRadius']['values']

export type ColorSets_DataAttr = ThemesConfig['colors']['sets']['dataAttribute']
export type ColorModes_DataAttr = ThemesConfig['colors']['modes']['dataAttribute']

type CoreColor_Obj = {
  [shade in ColorTokens_Core_Shades]: string
}
export type SemanticColor_Tuple = [ColorTokens_Core, ColorTokens_Core_Shades] | ['white']
type BasicSemanticColors_Obj = {
  [color in ColorTokens_Semantic_Basic]: SemanticColor_Tuple
}
export type AdvancedSemanticColors_Obj = {
  [color in ColorTokens_Semantic_Advanced]: {
    [shade in ColorTokens_Semantic_Advanced_Shades]: SemanticColor_Tuple
  }
}

export type Themes = {
  colors: {
    sets: {
      [set in ColorSets]: {
        [color in ColorTokens_Core]: CoreColor_Obj
      }
    }
    modes: {
      [set in ColorSets]: {
        [mode in ColorModes]: BasicSemanticColors_Obj & AdvancedSemanticColors_Obj
      }
    }
  }
  borderRadius: BorderRadius_Arr
}