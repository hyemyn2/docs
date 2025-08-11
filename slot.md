# Slot

Options for customizing vue-pivottable-ui.

:::warning
Both slot and scoped slots are supported, but the use of the v-slot directive is recommended.
:::

## rendererCell

If you want to replace the selection UI that selects the renderer, use the `rendererCell` slot.

```vue{10-12}
<template>
  <VuePivottableUi
    :data="[
      { color: 'blue', shape: 'circle' },
      { color: 'red', shape: 'triangle' }
    ]"
    :rows="['color']"
    :cols="['shape']"
  >

    <template v-slot:rendererCell>
      <i class="fas fa-table" style="margin-right: 0.25rem"></i>Table
    </template>
  </VuePivottableUi>
</template>

<script setup>
import { VuePivottableUi } from 'vue-pivottable'
import 'vue-pivottable/dist/vue-pivottable.css'
</script>
```
<iframe
  src="https://stackblitz.com/edit/vitejs-vite-ub7qwho7?embed=1&file=src%2FApp.vue&hideExplorer=1&hideNavigation=1&view=preview"
  width="100%"
  height="500"
  style="border:0; border-radius: 4px; overflow:hidden;"
  title="Vite Vue3 Sample"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-popups-to-escape-sandbox"
></iframe>

## aggregatorCell

If you want to replace the select UI that selects the aggregator you can use it.

```vue{10-12}
<template>
  <VuePivottableUi
    :data="[
      { color: 'blue', shape: 'circle' },
      { color: 'red', shape: 'triangle' },
    ]"
    :rows="['color']"
    :cols="['shape']"
  >
    <template #aggregatorCell>
      <i class="fas fa-calculator" style="margin-right: 0.25rem"></i>Count
    </template>
  </VuePivottableUi>
</template>

<script setup>
import { VuePivottableUi } from 'vue-pivottable';
import 'vue-pivottable/dist/vue-pivottable.css';
</script>
```

<iframe
  src="https://stackblitz.com/edit/vitejs-vite-a6unsocw?embed=1&file=src%2FApp.vue&hideExplorer=1&hideNavigation=1&view=preview"
  width="100%"
  height="500"
  style="border:0; border-radius: 4px; overflow:hidden;"
  title="Vite Vue3 Sample"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-popups-to-escape-sandbox"
></iframe>

## colGroup

You can use this slot if you want to fix the width of `td.pvtAxisContainer`, or to prevent dragged fields from overflowing it.

::: tip
The `td.pvtAxisContainer` element has the CSS property **overflow-x: auto**, so horizontal scrolling will appear if the content overflows.
:::

```vue{10-12}
<template>
  <VuePivottableUi
    :data="[
      { color: 'blue', shapeeeeeeeeeeeeeeee: 'circle' },
      { color: 'red', shapeeeeeeeeeeeeeeee: 'triangle' },
    ]"
    :rows="['color', 'shapeeeeeeeeeeeeeeee']"
    :cols="[]"
  >
    <template v-slot:colGroup>
      <colgroup :width="colGroupFixedWidth"></colgroup>
    </template>
  </VuePivottableUi>
  <div style="margin: 5px;">
    <label>colGroupFirstWidth: </label>
    <input v-model="colGroupFirstWidth" type="number" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { VuePivottableUi } from "vue-pivottable";
import "vue-pivottable/dist/vue-pivottable.css";

const colGroupFixedWidth = ref(250);
</script>

```

<iframe
  src="https://stackblitz.com/edit/vitejs-vite-j3mz9xle?embed=1&file=src%2FApp.vue&hideExplorer=1&hideNavigation=1&view=preview"
  width="100%"
  height="500"
  style="border:0; border-radius: 4px; overflow:hidden;"
  title="Vite Vue3 Sample"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-popups-to-escape-sandbox"
></iframe>

## output

This is a slot that replaces the area in `td.pvtOutput`.

```vue{10-12}
<template>
  <VuePivottableUi
    :data="[
      { color: 'blue', shape: 'circle' },
      { color: 'red', shape: 'triangle' },
    ]"
    :rows="['color']"
    :cols="['shape']"
  >
    <template v-slot:output v-if="!loaded">
      <div style="padding: 10px">loading...</div>
    </template>
  </VuePivottableUi>
  <button style="margin-top: 5px" :disabled="!loaded" @click="reload">
    <i class="fas fa-redo mr-25"></i>
    redo
  </button>
</template>

<script setup>
import { VuePivottableUi } from 'vue-pivottable';
import 'vue-pivottable/dist/vue-pivottable.css';
import { ref, onMounted } from 'vue';

const loaded = ref(false);

const reload = () => {
  loaded.value = false;
  setTimeout(() => {
    loaded.value = true;
  }, 1000);
};

onMounted(() => {
  reload();
});
</script>

```

<iframe
  src="https://stackblitz.com/edit/vitejs-vite-d9mktvjw?embed=1&file=src%2FApp.vue&hideExplorer=1&hideNavigation=1&view=preview"
  width="100%"
  height="500"
  style="border:0; border-radius: 4px; overflow:hidden;"
  title="Vite Vue3 Sample"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-popups-to-escape-sandbox"
></iframe>
