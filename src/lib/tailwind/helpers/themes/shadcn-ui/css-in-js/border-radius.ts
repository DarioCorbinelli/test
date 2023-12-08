import { CssInJs_RadiusSets } from "../../../../../../types/themes/css-in-js/border-radius";
import { themes, themesConfig } from '../../../../../../config/themes'

const values = themes.borderRadius
const dataAttr = themesConfig.borderRadius.dataAttribute
const unit = themesConfig.borderRadius.unit

export function generateCssInJs_RadiusSets(): CssInJs_RadiusSets {
  const sets = {} as CssInJs_RadiusSets

  values.forEach(value => {
    const setObj = (sets[`[data-${dataAttr}='${value}']`] = {} as CssInJs_RadiusSets[`[data-${typeof dataAttr}='${typeof value}']`])
    setObj['--radius'] = `${value}${unit}`
  })

  return sets
}