<script setup lang="ts">
import { useAppStore } from '@/stores/app.ts'
import x from '~icons/mdi/home?raw'

const appStore = useAppStore()
const myCanvas = ref()

onMounted(async () => {
  console.log(typeof x)
  const canvas = myCanvas.value
  const ctx = canvas.getContext('2d')

  // 获取图标的 SVG 内容
  const svgContent = x ;//`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z"/></svg>`
  console.log({svgContent})
  // 将 SVG 内容转换为 Blob
  const blob = new Blob([svgContent], { type: 'image/svg+xml' })
  // 创建 Blob URL
  const url = URL.createObjectURL(blob)
  // 创建 Image 对象
  const img = new Image()
  img.src = url
  img.onload = () => {
    ctx.drawImage(img, 100, 50)
  }
})
</script>

<template>
  <main :data-theme="appStore.theme" class="theme-dark">
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <a class="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div class="flex-none">
        <ToggleDark/>
        <button class="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block h-5 w-5 stroke-current">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
          </svg>
        </button>
      </div>
    </div>
    <i-mdi-account />
    <canvas ref="myCanvas" class="artboard artboard-demo">
    </canvas>

  </main>
</template>
