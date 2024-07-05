// uno.config.ts
import { defineConfig } from 'unocss'
import presetAttributify from '@unocss/preset-attributify'
import presetUno from '@unocss/preset-uno'

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetAttributify(),
    presetUno(),
  ]
})