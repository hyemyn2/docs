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

The lazy table renderer is designed to improve performance when working with large datasets by implementing virtual scrolling. It renders only the visible portion of the pivot table, significantly reducing the DOM size and improving rendering performance.

### Key Features

- **Virtual Scrolling**: Uses IntersectionObserver to render only visible rows
- **Fixed Row Height**: Optimized for 30px row height
- **Chunk-based Rendering**: Renders data in configurable chunks
- **Automatic Padding**: Maintains scroll position with top/bottom padding
- **Vue 3 Compatible**: Built specifically for Vue 3 composition API

### Install

```bash
npm install @vue-pivottable/lazy-table-renderer
```

### Usage

```vue
<template>
  <VuePivottableUi
    :data="largeDataset"
    :rows="['category']"
    :cols="['month']"
    :renderers="renderers"
    renderer-name="Lazy Table"
  />
</template>

<script setup>
import { markRaw } from "vue";
import { VuePivottableUi, Renderer } from "vue-pivottable";
import "vue-pivottable/dist/vue-pivottable.css";
import LazyTableRenderer from "@vue-pivottable/lazy-table-renderer";

// Add lazy table renderer to default renderers
const renderers = markRaw({
  ...Renderer,
  ...LazyTableRenderer,
});

// Example large dataset
const largeDataset = Array.from({ length: 10000 }, (_, i) => ({
  category: `Category ${i % 100}`,
  month: `2024-${String((i % 12) + 1).padStart(2, '0')}`,
  value: Math.floor(Math.random() * 1000)
}));
</script>
```

### Configuration

The lazy table renderer accepts two additional props beyond the standard vue-pivottable props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `chunkSize` | Number | `50` | Number of rows rendered per chunk (fixed in current version) |
| `bufferSize` | Number | `1` | Number of chunks rendered before and after the visible area (fixed in current version) |

### Advanced Usage

Since the lazy table renderer exports a pre-configured component with default settings (chunkSize: 50, bufferSize: 1), you cannot directly customize these values through the standard import. The renderer is optimized for most use cases with these default values.

If you need different chunk or buffer sizes, you would need to:
1. Fork the package and modify the default values in the source code
2. Or request the feature to be added to the package to accept props for customization

**Note**: The ability to customize chunkSize and bufferSize through props is planned for a future release.

```vue
<template>
  <VuePivottableUi
    :data="largeDataset"
    :rows="['category']"
    :cols="['month']"
    :renderers="renderers"
    renderer-name="Lazy Table"
  />
</template>

<script setup>
import { markRaw } from "vue";
import { VuePivottableUi, Renderer } from "vue-pivottable";
import "vue-pivottable/dist/vue-pivottable.css";
import LazyTableRenderer from "@vue-pivottable/lazy-table-renderer";

// Use the lazy table renderer with default settings
const renderers = markRaw({
  ...Renderer,
  ...LazyTableRenderer, // This includes 'Lazy Table' with chunkSize: 50, bufferSize: 1
});
</script>
```

### When to Use

The lazy table renderer is ideal for:

- **Large Datasets**: When working with thousands of rows
- **Performance Critical Applications**: When DOM size impacts performance
- **Memory Constrained Environments**: Reduces memory usage by limiting DOM nodes
- **Smooth Scrolling**: Maintains smooth scrolling experience with large tables

### Performance Tips

1. **Adjust Chunk Size**: Larger chunks mean fewer re-renders but more initial DOM nodes
2. **Buffer Size**: Increase buffer for smoother scrolling, decrease for better performance
3. **Row Height**: The renderer is optimized for 30px rows; custom heights may impact performance
4. **Data Structure**: Ensure your data is properly indexed for optimal rendering

### Demo

Check out the [live demo](https://vue-pivottable.vercel.app/examples/lazy-table) to see the lazy table renderer in action with a large dataset.
