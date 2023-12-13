'use client'

import { useTheme } from "@/context/ThemeProvider"

export default function Home() {
  const {setTheme, theme, resolvedTheme} = useTheme()

  return (
    <main className="bg-primary text-primary-foreground">
      <span>{theme?.colors.set} - {resolvedTheme?.colors.set} - <button onClick={() => setTheme('colors.set', theme?.colors.set === 'blue' ? 'orange' : 'blue')}>click</button></span>
      <br />
      <span>{theme?.colors.mode} - {resolvedTheme?.colors.mode} - <button onClick={() => setTheme('colors.mode', theme?.colors.mode === 'system' ? 'light' : 'system')}>click</button></span>
      <br />
      <span>{theme?.borderRadius} - {resolvedTheme?.borderRadius} - <button onClick={() => setTheme('borderRadius', theme?.borderRadius === '0.75' ? '0' : '0.75')}>click</button></span>
      <div className="w-12 h-12 bg-destructive text-destructive-foreground rounded-md">ciao</div>
    </main>
  )
}
