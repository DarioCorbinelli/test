import { ThemesConfig } from '../index'

type Unit = ThemesConfig['borderRadius']['unit']
type Values = ThemesConfig['borderRadius']['values']
type DataAttr = ThemesConfig['borderRadius']['dataAttribute']

export type CssInJs_RadiusSets = {
  [radius in Values[number] as `[data-${DataAttr}='${radius}']`]: {
    '--radius': string
  }
}
