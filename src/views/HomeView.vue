<script setup lang="ts">
import { 
  Canvas, 
  Text, 
  Rect,
  loadSVGFromString, 
  util 
} from 'fabric'
import { useAppStore } from '@/stores/app.ts'
import HomeSvgContent from '~icons/mdi/home?raw'


const appStore = useAppStore()
const myCanvas = ref(null)

onMounted(async () => {
  const unescapedData = HomeSvgContent.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"')

  const canvasWrap: any = document.getElementById('canvas-wrap')
  const fabricCanvas = new Canvas(myCanvas.value, {width: canvasWrap.clientWidth, height: canvasWrap.clientHeight})
  const text = new Text('fabric.js', { fill: 'blue', fontSize: 24 });
  const rect = new Rect({
    top: 100,
    left: 100,
    width: 20,
    height: 20,
    fill: 'red',
  });
  
  const loader: any = await loadSVGFromString(unescapedData)
  console.log({loader})
  const svg = util.groupSVGElements(loader.objects, loader.options);
  fabricCanvas.add(svg);
  fabricCanvas.centerObject(svg);
  fabricCanvas.renderAll();

  fabricCanvas.add(rect)
  fabricCanvas.add(text)
})
</script>

<template>
  <main :data-theme="appStore.theme" class="theme-dark bg-line" h-100vh>
    <Header />
    <div flex>
      <div p-4>
        <div w-300px flex>
          <i-mdi-home />
          <i-mdi-home-account />
        </div>
      </div>
      <div id="canvas-wrap" class="artboard artboard-bg">
        <canvas ref="myCanvas"></canvas>
      </div>
    </div>
  </main>
</template>
