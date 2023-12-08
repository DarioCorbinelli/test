import { ThemesConfig } from "../index";

export type ThemeExtention_RadiusSets = {
  borderRadius: {
    [tier in ThemesConfig['borderRadius']['tokens'][number]]: string
  }
}