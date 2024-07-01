import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const theme = ref('dark')
  function isDark() {
    return theme.value === 'dark'
  }

  return { theme, isDark }
})
