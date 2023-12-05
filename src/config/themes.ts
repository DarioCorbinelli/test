import { Themes } from '../types/themes'
import colors from 'tailwindcss/colors'

export const themesConfig = {
  colors: {
    sets: {
      values: ['blue', 'orange', 'rose'] as const,
      dataAttribute: 'color-set' as const,
    },
    modes: {
      values: ['light', 'dark'] as const,
      dataAttribute: 'color-mode' as const,
    },
    tokens: {
      core: {
        values: ['base', 'primary', 'destructive'] as const,
        shades: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'] as const,
      },
      semantic: {
        basic: ['foreground', 'background', 'border', 'input', 'ring'] as const,
        advanced: {
          values: ['primary', 'destructive', 'secondary', 'accent', 'muted', 'card'] as const,
          shades: ['DEFAULT', 'foreground'] as const,
        },
      },
    },
  },
  borderRadius: {
    values: ['0', '0.25', '0.5', '0.75', '1'] as const,
    tokens: ['sm', 'md', 'lg'] as const,
    unit: 'rem' as const,
    dataAttribute: 'rounded' as const,
  },
}

export const themes: Themes = {
  colors: {
    sets: {
      blue: {
        base: colors.slate,
        primary: colors.blue,
        destructive: colors.red,
      },
      orange: {
        base: colors.stone,
        primary: colors.orange,
        destructive: colors.red,
      },
      rose: {
        base: colors.stone,
        primary: colors.rose,
        destructive: colors.red,
      },
    },
    modes: {
      blue: {
        light: {
          background: ['white'],
          foreground: ['base', '950'],
          primary: {
            DEFAULT: ['primary', '600'],
            foreground: ['white'],
          },
          secondary: {
            DEFAULT: ['base', '100'],
            foreground: ['base', '900'],
          },
          destructive: {
            DEFAULT: ['destructive', '100'],
            foreground: ['destructive', '700'],
          },
          accent: {
            DEFAULT: ['base', '100'],
            foreground: ['base', '900'],
          },
          muted: {
            DEFAULT: ['base', '100'],
            foreground: ['base', '500'],
          },
          card: {
            DEFAULT: ['white'],
            foreground: ['base', '950'],
          },
          border: ['base', '200'],
          input: ['base', '200'],
          ring: ['base', '950'],
        },
        dark: {
          background: ['base', '950'],
          foreground: ['base', '50'],
          primary: {
            DEFAULT: ['primary', '500'],
            foreground: ['base', '50'],
          },
          destructive: {
            DEFAULT: ['destructive', '600'],
            foreground: ['base', '50'],
          },
          secondary: {
            DEFAULT: ['base', '800'],
            foreground: ['base', '50'],
          },
          accent: {
            DEFAULT: ['base', '800'],
            foreground: ['base', '50'],
          },
          muted: {
            DEFAULT: ['base', '800'],
            foreground: ['base', '400'],
          },
          card: {
            DEFAULT: ['base', '950'],
            foreground: ['base', '50'],
          },
          border: ['base', '800'],
          input: ['base', '800'],
          ring: ['base', '700'],
        },
      },
      orange: {
        light: {
          background: ['white'],
          foreground: ['base', '950'],
          primary: {
            DEFAULT: ['primary', '600'],
            foreground: ['white'],
          },
          secondary: {
            DEFAULT: ['base', '100'],
            foreground: ['base', '900'],
          },
          destructive: {
            DEFAULT: ['destructive', '100'],
            foreground: ['destructive', '700'],
          },
          accent: {
            DEFAULT: ['base', '100'],
            foreground: ['base', '900'],
          },
          muted: {
            DEFAULT: ['base', '100'],
            foreground: ['base', '500'],
          },
          card: {
            DEFAULT: ['white'],
            foreground: ['base', '950'],
          },
          border: ['base', '200'],
          input: ['base', '200'],
          ring: ['base', '950'],
        },
        dark: {
          background: ['base', '950'],
          foreground: ['base', '50'],
          primary: {
            DEFAULT: ['primary', '500'],
            foreground: ['base', '50'],
          },
          destructive: {
            DEFAULT: ['destructive', '600'],
            foreground: ['base', '50'],
          },
          secondary: {
            DEFAULT: ['base', '800'],
            foreground: ['base', '50'],
          },
          accent: {
            DEFAULT: ['base', '800'],
            foreground: ['base', '50'],
          },
          muted: {
            DEFAULT: ['base', '800'],
            foreground: ['base', '400'],
          },
          card: {
            DEFAULT: ['base', '950'],
            foreground: ['base', '50'],
          },
          border: ['base', '800'],
          input: ['base', '800'],
          ring: ['base', '700'],
        },
      },
      rose: {
        light: {
          background: ['white'],
          foreground: ['base', '950'],
          primary: {
            DEFAULT: ['primary', '600'],
            foreground: ['white'],
          },
          secondary: {
            DEFAULT: ['base', '100'],
            foreground: ['base', '900'],
          },
          destructive: {
            DEFAULT: ['destructive', '100'],
            foreground: ['destructive', '700'],
          },
          accent: {
            DEFAULT: ['base', '100'],
            foreground: ['base', '900'],
          },
          muted: {
            DEFAULT: ['base', '100'],
            foreground: ['base', '500'],
          },
          card: {
            DEFAULT: ['white'],
            foreground: ['base', '950'],
          },
          border: ['base', '200'],
          input: ['base', '200'],
          ring: ['base', '950'],
        },
        dark: {
          background: ['base', '950'],
          foreground: ['base', '50'],
          primary: {
            DEFAULT: ['primary', '500'],
            foreground: ['base', '50'],
          },
          destructive: {
            DEFAULT: ['destructive', '600'],
            foreground: ['base', '50'],
          },
          secondary: {
            DEFAULT: ['base', '800'],
            foreground: ['base', '50'],
          },
          accent: {
            DEFAULT: ['base', '800'],
            foreground: ['base', '50'],
          },
          muted: {
            DEFAULT: ['base', '800'],
            foreground: ['base', '400'],
          },
          card: {
            DEFAULT: ['base', '950'],
            foreground: ['base', '50'],
          },
          border: ['base', '800'],
          input: ['base', '800'],
          ring: ['base', '700'],
        },
      },
    },
  },
  borderRadius: ['0', '0.25', '0.5', '0.75', '1'],
}
