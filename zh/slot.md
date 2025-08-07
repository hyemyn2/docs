# 插槽

用于自定义vue-pivottable-ui的选项。

:::warning
支持插槽和作用域插槽，但建议使用v-slot指令。
:::

## rendererCell

如果你想替换选择渲染器的选择UI，请使用`rendererCell`插槽。

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
      <i class="fas fa-table" style="margin-right: 0.25rem"></i>表格
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

如果你想替换选择聚合器的选择UI，可以使用这个。

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
      <i class="fas fa-calculator" style="margin-right: 0.25rem"></i>计数
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

如果你想固定`td.pvtAxisContainer`的宽度，或防止拖拽的字段溢出，可以使用这个插槽。

::: tip
`td.pvtAxisContainer`元素具有**overflow-x: auto**的CSS属性，因此如果内容溢出，将显示水平滚动。
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
    <label>colGroup固定宽度: </label>
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

这是一个替换`td.pvtOutput`中区域的插槽。

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
      <div style="padding: 10px">加载中...</div>
    </template>
  </VuePivottableUi>
  <button style="margin-top: 5px" :disabled="!loaded" @click="reload">
    <i class="fas fa-redo mr-25"></i>
    重新执行
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