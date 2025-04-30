---
outline: deep
---

# Getting Started

## Installation

### NPM

```bash
# install in your project
npm install vue-pivottable
```

### Direct Download / CDN

📦 **unpkg** : <https://unpkg.com/vue-pivottable@1.0.0-alpha.3/dist/vue-pivottable.umd.js><br/>
🌏 **jsDelivr** : <https://cdn.jsdelivr.net/npm/vue-pivottable@1.0.0-alpha.3/dist/vue-pivottable.umd.min.js>

```html
<!-- Include vue-pivottable after Vue -->
<script src="/path/to/vue.js"></script>
<script src="/path/to/vue-pivottable.umd.min.js"></script>
```

## Quick Start

### Vue Pivottable

`VuePivottable` is a simple component that renders a static pivot table.  
It displays `data` according to the specified `rows` and `cols` options.

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

> 🔴 You must import the `vue-pivottable.css` file to apply the default styling.
> Without this CSS, the pivot table may not be displayed correctly.

<iframe
  src="https://codesandbox.io/embed/quickstart-vue-pivottable-w7h7kd?view=preview&hidenavigation=1&codemirror=1&hidedevtools=1"
  style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
  title="quickstart-vue-pivottable"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

### Vue Pivottable UI

`VuePivottableUi` extends the functionality by providing a user interface
that allows users to dynamically customize `rows` and `cols`.
Users can adjust how the pivot table is displayed by dragging attributes between areas or applying filters to the data.

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

<iframe src="https://codesandbox.io/p/devbox/quickstart-vue-pivottable-ui-5zlrx8?embed=1&file=%2Fsrc%2FApp.vue?view=split"
  style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
  title="quickstart-vue-pivottable-ui"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
