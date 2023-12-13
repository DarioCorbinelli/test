import { themesConfig } from "@/config/themes"

export function getSystemColorMode() {
  const colorMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : themesConfig.colors.modes.default
  return colorMode
}