import { CssInJs } from "../../../../../../types/themes/css-in-js";
import { generateCssInJs_Colors } from "./colors";
import { generateCssInJs_RadiusSets } from "./border-radius";

export function generateCssInJs(): CssInJs {
  const colors = generateCssInJs_Colors()
  const radiusSets = generateCssInJs_RadiusSets()
  
  return {...colors, ...radiusSets}
}