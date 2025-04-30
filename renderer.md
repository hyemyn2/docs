# Renderer

## Custom Renderer

`vue-pivottable` supports custom renderers in addition to its built-in ones. Currently, two official custom renderers are available: the Plotly-based `plotly-renderer` and the lightweight `lazy-table-renderer`, both provided as separate installable packages.
You can install and use them individually as needed. Alternatively, you can define **your own custom renderer function** and pass it via the `renderers` prop to fully customize how the pivot data is displayed.

## plotly renderer

### Dependencies

Dependencies
The Plotly renderer is built using @clalarco/vue3-plotly, a lightweight Vue 3 wrapper for Plotly.js.
This library is included as a dependency of `@vue-pivottable/plotly-renderer`, so you don’t need to install it separately.
If you wish to customize Plotly behavior, refer to its documentation for more advanced usage.

#### Built-in Charts

The Plotly renderer comes with 9 built-in chart types you can use out of the box:

- Area Chart
- Dot Chart
- Grouped Bar Chart
- Grouped Column Chart
- Line Chart
- Multiple Pie Chart
- Scatter Chart
- Stacked Bar Chart
- Stacked Column Chart

These charts can be used directly by selecting them from the renderer dropdown or by setting them programmatically.

### Install

```bash
npm install @vue-pivottable/plotly-renderer
```

📦 **unpkg** : <https://unpkg.com/vue-pivottable@1.0.0-alpha.3/dist/vue-pivottable.umd.js><br/>
🌏 **jsDelivr** : <https://cdn.jsdelivr.net/npm/vue-pivottable@1.0.0-alpha.3/dist/vue-pivottable.umd.min.js>

### Usage

```vue
<template>
  <VuePivottableUi
    :data="[
      { color: 'blue', shape: 'circle' },
      { color: 'red', shape: 'triangle' },
    ]"
    :rows="['color']"
    :cols="['shape']"
    :renderers="renderers"
  />
</template>

<script setup>
import { markRaw } from "vue";
import { VuePivottableUi } from "vue-pivottable";
import "vue-pivottable/dist/vue-pivottable.css";
import { VuePivottableUi, Renderer } from "vue-pivottable";
import PlotlyRenderer from "@vue-pivottable/plotly-renderer";

// add plotly renderer to default renderer
const renderers = markRaw({
  ...Renderer,
  ...PlotlyRenderer,
});
</script>
```

### Demo

to be updated

## lazy table renderer
