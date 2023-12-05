import { themesPreset } from "./src/lib/tailwind/presets";

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [themesPreset],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
}
