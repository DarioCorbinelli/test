import {
  ColorModes,
  ColorModes_DataAttr,
  ColorSets,
  ColorSets_DataAttr,
  ColorTokens_Core,
  ColorTokens_Core_Shades,
  ColorTokens_Semantic_Advanced,
  ColorTokens_Semantic_Advanced_NonDefaultShades,
  ColorTokens_Semantic_Basic,
} from '../index'

export type CoreColors = {
  [colorSet in ColorSets as `[data-${ColorSets_DataAttr}='${colorSet}']`]: { '--white': string } & {
    [cssVar in `--${ColorTokens_Core}-${ColorTokens_Core_Shades}`]: string
  }
}

type CoreColor_CssVar = `[data-${ColorSets_DataAttr}='${ColorSets}']`
export type SemanticColors = {
  [colorMode in ColorModes as `[data-${ColorSets_DataAttr}='${ColorSets}'][data-${ColorModes_DataAttr}='${colorMode}']`]: {
    [cssVar in `--${ColorTokens_Semantic_Basic}`]: `var(${keyof CoreColors[CoreColor_CssVar]})`
  } & {
    [cssVar in `--${ColorTokens_Semantic_Advanced}`]: `var(${keyof CoreColors[CoreColor_CssVar]})`
  } & {
    [nonDefaultShade in ColorTokens_Semantic_Advanced_NonDefaultShades as `--${ColorTokens_Semantic_Advanced}-${nonDefaultShade}`]: `var(${keyof CoreColors[CoreColor_CssVar]})`
  }
}

export type CssInJs_Colors = CoreColors & SemanticColors