import { generateCssInJs_Colors } from "./colors";
import { CssInJs } from "../../../../../../types/themes/css-in-js";

export function generateCssInJs(): CssInJs {
  const colors = generateCssInJs_Colors()
  
  return {...colors}
}