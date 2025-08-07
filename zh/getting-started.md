---
outline: deep
---

# 快速开始

## 安装

### NPM

```bash
# 安装到项目
npm install vue-pivottable
```

### PNPM

```bash
pnpm install vue-pivottable
```

### 直接下载 / CDN

📦 **unpkg** : <https://unpkg.com/vue-pivottable@1.0.0-alpha.3/dist/vue-pivottable.umd.js><br/>
🌏 **jsDelivr** : <https://cdn.jsdelivr.net/npm/vue-pivottable@1.0.0-alpha.3/dist/vue-pivottable.umd.min.js>

```html
<!-- 在 Vue 之后引入 vue-pivottable -->
<script src="/path/to/vue.js"></script>
<script src="/path/to/vue-pivottable.umd.min.js"></script>
```

## 快速开始

### Vue Pivottable

`VuePivottable` 是一个简单的组件，用于渲染静态透视表。  
它根据指定的 `rows` 和 `cols` 选项显示 `data`。

```vue
<template>
  <VuePivottable
    :data="[
      { color: 'blue', shape: 'circle' },
      { color: 'red', shape: 'triangle' },
    ]"
    :rows="['color']"
    :cols="['shape']"
  />
</template>

<script setup>
import { VuePivottable } from "vue-pivottable";
import "vue-pivottable/dist/vue-pivottable.css";
</script>
```

> 🔴 需要导入 `vue-pivottable.css` 文件以应用默认样式。
> 没有此 CSS，透视表可能无法正确显示。

<iframe
  src="https://stackblitz.com/edit/vitejs-vite-iyiexnrn?embed=1&file=src%2FApp.vue&hideExplorer=1&hideNavigation=1&view=preview"
  width="100%"
  height="500"
  style="border:0; border-radius: 4px; overflow:hidden;"
  title="Vite Vue3 Sample"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-popups-to-escape-sandbox"
></iframe>

### Vue Pivottable UI

`VuePivottableUi` 通过提供用户界面来扩展功能，允许用户动态自定义 `rows` 和 `cols`。
用户可以在区域间拖拽属性，对数据应用过滤器，以调整透视表的显示方式。

```vue
<template>
  <VuePivottableUi
    :data="[
      { color: 'blue', shape: 'circle' },
      { color: 'red', shape: 'triangle' },
    ]"
    :rows="['color']"
    :cols="['shape']"
  />
</template>

<script setup>
import { VuePivottableUi } from "vue-pivottable";
import "vue-pivottable/dist/vue-pivottable.css";
</script>
```

<iframe
  src="https://stackblitz.com/edit/vitejs-vite-dviwcxsq?embed=1&file=src%2FApp.vue&hideExplorer=1&hideNavigation=1&view=preview"
  width="100%"
  height="500"
  style="border:0; border-radius: 4px; overflow:hidden;"
  title="Vite Vue3 Sample"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-popups-to-escape-sandbox"
></iframe>

### 使用 Plotly 渲染器的 Vue Pivottable UI

Plotly 渲染器默认不包含在核心 `vue-pivottable` 库中，但可以单独安装和使用。
请查看 https://vue-pivottable.vercel.app/renderer.html 中的渲染器部分了解详情。