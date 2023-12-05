import { themesConfig } from "../config/themes";

type ThemesConfig = typeof themesConfig

type ColorSets = ThemesConfig['colors']['sets']['values'][number]
type ColorModes = ThemesConfig['colors']['modes']['values'][number]

type ColorTokens_Core = ThemesConfig['colors']['tokens']['core']['values'][number]
type ColorTokens_Core_Shades = ThemesConfig['colors']['tokens']['core']['shades'][number]
type ColorTokens_Semantic_Basic = ThemesConfig['colors']['tokens']['semantic']['basic'][number]
type ColorTokens_Semantic_Advanced = ThemesConfig['colors']['tokens']['semantic']['advanced']['values'][number]
type ColorTokens_Semantic_Advanced_Shades = ThemesConfig['colors']['tokens']['semantic']['advanced']['shades'][number]

type BorderRadius_Arr = ThemesConfig['borderRadius']['values']

type CoreColor_Obj = {
  [shade in ColorTokens_Core_Shades]: string
}
type SemanticColor_Tuple = [ColorTokens_Core, ColorTokens_Core_Shades] | ['white']
type BasicSemanticColors_Obj = {
  [color in ColorTokens_Semantic_Basic]: SemanticColor_Tuple
}
type AdvancedSemanticColors_Obj = {
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