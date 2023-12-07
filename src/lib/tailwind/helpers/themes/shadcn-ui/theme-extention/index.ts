import { generateColors } from './colors'
import { merge } from 'lodash'
import { Config } from 'tailwindcss/types/config'

export function extendTheme(config: Partial<Config>): Partial<Config> {
  const colors = generateColors()

  const extendedTheme: Partial<Config> = {
    theme: {
      extend: {
        colors
      }
    }
  }

  return merge({}, config, extendedTheme)
}
