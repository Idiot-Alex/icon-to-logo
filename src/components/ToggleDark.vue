<script setup lang="ts">
import { useAppStore } from '@/stores/app.ts'
import IconSun from '@/components/icons/IconSun.vue'
import IconMoon from '@/components/icons/IconMoon.vue'

const appStore = useAppStore()

const toggleTheme = (e: any) => {
  if (e.target.checked) {
    appStore.theme = 'light'
  } else {
    appStore.theme = 'dark'
  }
}
</script>

<template>
  <label class="flex cursor-pointer gap-2">
    <IconMoon />
    <input type="checkbox" value="light" @click="toggleTheme" class="toggle theme-controller" />
    <IconSun />
  </label>
</template>