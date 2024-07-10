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
        <div role="tablist" class="tabs tabs-boxed">
          <a role="tab" class="tab">Tab 1</a>
          <a role="tab" class="tab tab-active">Tab 2</a>
          <a role="tab" class="tab">Tab 3</a>
        </div>
        <div w-300px flex>
          <i-mdi-home />
          <i-mdi-home-account />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24" fill="none" id="icon-logoShape">
            <path d="M24.706 11.2939L8.4707 11.2846V7.05859H27.5295L24.706 11.2939Z" fill="currentColor"></path>
            <path d="M28.2353 4.23529L12 4.22603L14.8235 0H31.0588L28.2353 4.23529Z" fill="currentColor"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 15.5292C0 20.1777 3.82209 23.9998 8.47059 23.9998C13.1191 23.9998 16.9412 20.1777 16.9412 15.5292C16.9412 10.8807 13.1191 7.05859 8.47059 7.05859C3.82209 7.05859 0 10.8807 0 15.5292ZM8.47059 19.7647C10.8097 19.7647 12.7059 17.8685 12.7059 15.5294C12.7059 13.1903 10.8097 11.2941 8.47059 11.2941C6.1315 11.2941 4.23529 13.1903 4.23529 15.5294C4.23529 17.8685 6.1315 19.7647 8.47059 19.7647Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>
      <div id="canvas-wrap" class="artboard artboard-bg">
        <canvas ref="myCanvas"></canvas>
      </div>
    </div>
  </main>
</template>
