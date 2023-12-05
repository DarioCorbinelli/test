import { shadcnPlugin } from './plugins'
import type { Config } from 'tailwindcss'

export const themesPreset = {
  darkMode: ['class'],
  content: [],
  plugins: [shadcnPlugin],
} satisfies Config
