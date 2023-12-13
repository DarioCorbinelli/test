import { ThemesConfig } from "@/types/themes"

export type ResolvedTheme = {
  colors: {
    set: ThemesConfig['colors']['sets']['values'][number]
    mode: ThemesConfig['colors']['modes']['values'][number]
  }
  borderRadius: ThemesConfig['borderRadius']['values'][number]
}
export type PersistedTheme = {
  colors: {
    set: ThemesConfig['colors']['sets']['values'][number]
    mode: ThemesConfig['colors']['modes']['values'][number] | 'system'
  }
  borderRadius: ThemesConfig['borderRadius']['values'][number]
}

type FlattenKeys<T, Prefix extends string = ''> = {
  [K in keyof T]: K extends string | number ? (T[K] extends object ? `${Prefix}${K}.${FlattenKeys<T[K]>}` : `${Prefix}${K}`) : never
}[keyof T]
export type ThemePath = FlattenKeys<PersistedTheme>

export type At<T, K extends string> = K extends keyof T ? T[K] : K extends `${infer P}.${infer Q}` ? (P extends keyof T ? At<T[P], Q> : never) : never