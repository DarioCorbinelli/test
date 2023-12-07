import {
  ColorTokens_Core,
  ColorTokens_Core_Shades,
  ColorTokens_Semantic_Advanced,
  ColorTokens_Semantic_Advanced_DefaultShade,
  ColorTokens_Semantic_Advanced_NonDefaultShades,
  ColorTokens_Semantic_Basic
} from '../index'

export type CoreColors = {
  [color in ColorTokens_Core]: {
    [shade in ColorTokens_Core_Shades]: string
  }
}

export type SemanticColors_Basic = {
  [color in ColorTokens_Semantic_Basic]: string
}
export type SemanticColors_Advanced = {
  [color in ColorTokens_Semantic_Advanced]: {
    [shade in ColorTokens_Semantic_Advanced_NonDefaultShades]: string
  } & {
    [shade in ColorTokens_Semantic_Advanced_DefaultShade]: string
  }
}
export type SemanticColors = SemanticColors_Basic & SemanticColors_Advanced

export type ThemeExtention_Colors = CoreColors & SemanticColors
