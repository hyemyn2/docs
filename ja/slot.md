# スロット

vue-pivottable-uiをカスタマイズするためのオプションです。

:::warning
スロットとスコープドスロットの両方がサポートされていますが、v-slotディレクティブの使用をお勧めします。
:::

## rendererCell

レンダラーを選択する選択UIを置き換えるには、`rendererCell`スロットを使用してください。

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
    <template v-slot:rendererCell>
      <i class="fas fa-table" style="margin-right: 0.25rem"></i>テーブル
    </template>
  </VuePivottableUi>
</template>

<script>
import { VuePivottableUi } from "vue-pivottable";
import "vue-pivottable/dist/vue-pivottable.css";
export default {
  components: {
    VuePivottableUi,
  },
};
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

アグリゲータを選択する選択UIを置き換えるには、これを使用できます。

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
    <template v-slot:aggregatorCell>
      <i class="fas fa-calculator" style="margin-right: 0.25rem"></i>カウント
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

`td.pvtAxisContainer`の幅を固定したり、ドラッグされたフィールドがオーバーフローしないようにしたい場合は、このスロットを使用できます。

::: tip
`td.pvtAxisContainer`要素は**overflow-x: auto**のCSSプロパティを持っているため、コンテンツがオーバーフローした場合は水平スクロールが表示されます。
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
    <label>colGroup固定幅: </label>
    <input v-model="colGroupFixedWidth" type="number" />
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

`td.pvtOutput`内の領域を置き換えるスロットです。

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
      <div style="padding: 10px">読み込み中...</div>
    </template>
  </VuePivottableUi>
  <button style="margin-top: 5px" :disabled="!loaded" @click="reload">
    <i class="fas fa-redo mr-25"></i>
    再実行
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