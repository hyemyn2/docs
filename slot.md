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
    <template #rendererCell>
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
  src="https://stackblitz.com/edit/vitejs-vite-dnbn3bnd?ctl=1&embed=1&file=src%2FApp.vue&hideExplorer=1&hideNavigation=1&view=preview"
  width="100%"
  height="500"
  style="border:0; border-radius: 4px; overflow:hidden;"
  title="Vite Vue3 Sample"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
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
  src="https://stackblitz.com/edit/vitejs-vite-xhxiizgm?ctl=1&embed=1&file=src%2FApp.vue&hideExplorer=1&hideNavigation=1&view=preview"
  width="100%"
  height="500"
  style="border:0; border-radius: 4px; overflow:hidden;"
  title="Vite Vue3 Sample"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## colGroup

You can use this slot if you want the width of `td.pvtAxisContainer` to be fixed, or if you want not the drag field to overflow `td.pvtAxisContainer` .

::: tip
`td.pvtAxisContainer` has **overflow-x:auto;** property.
:::

```vue{13-16}
<template>
  <div>
    <VuePivottableUi :data="data" :rows="rows" :cols="cols">
      <template #rendererCell>Table</template>
      <template #aggregatorCell>Count</template>
      <template #colGroup>
        <colGroup :width="colGroupFirstWidth" />
        <colGroup />
      </template>
    </VuePivottableUi>

    <div class="m-1">
      <label>colGroupFirstWidth: </label>
      <input v-model="colGroupFirstWidth" type="number" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { VuePivottableUi } from 'vue-pivottable';
import 'vue-pivottable/dist/vue-pivottable.css';

// state
const colGroupFirstWidth = ref(250);

const data = [
  { color: 'blue', shapeeeeeeeeeeeeeeee: 'circle' },
  { color: 'red', shapeeeeeeeeeeeeeeee: 'triangle' },
];

const rows = ['color', 'shapeeeeeeeeeeeeeeee'];
const cols = [];
</script>

```

<iframe
  src="https://stackblitz.com/edit/vitejs-vite-elnaubnq?ctl=1&embed=1&file=src%2FApp.vue&hideExplorer=1&hideNavigation=1&view=preview"
  width="100%"
  height="500"
  style="border:0; border-radius: 4px; overflow:hidden;"
  title="Vite Vue3 Sample"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## output

This is a slot that replaces the area in `td.pvtOutput`.

```vue{11-13}
<template>
  <div>
    <VuePivottableUi
      :data="data"
      :rows="rows"
      :cols="cols"
    >
      <template v-if="!loaded" #output>
        <div class="p-1">loading...</div>
      </template>
    </VuePivottableUi>

    <button
      class="btn btn-sm btn-secondary mt-1"
      :disabled="!loaded"
      @click="reload"
    >
      <i class="fas fa-redo mr-25"></i>
      redo
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { VuePivottableUi } from 'vue-pivottable';
import 'vue-pivottable/dist/vue-pivottable.css';

const data = [
  { color: 'blue', shape: 'circle' },
  { color: 'red', shape: 'triangle' },
];

const rows = ['color'];
const cols = ['shape'];

const loaded = ref(false);

function reload() {
  loaded.value = false;
  setTimeout(() => {
    loaded.value = true;
  }, 1000);
}

onMounted(() => {
  reload();
});
</script>
```

<iframe
  src="https://stackblitz.com/edit/vitejs-vite-ecgs6tcg?ctl=1&embed=1&file=src%2Fstyle.css&hideExplorer=1&hideNavigation=1&view=preview"
  width="100%"
  height="500"
  style="border:0; border-radius: 4px; overflow:hidden;"
  title="Vite Vue3 Sample"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>