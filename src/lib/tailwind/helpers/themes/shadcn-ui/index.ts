import { generateCssInJs } from "./css-in-js";
import plugin from "tailwindcss/plugin";
import { Config } from "tailwindcss/types/config";

export function initializeShadcnPlugin(config: Partial<Config>) {
  return plugin(({ addBase }) => {
    addBase(generateCssInJs())
  }, config)
}