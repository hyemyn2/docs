# 슬롯

vue-pivottable-ui를 커스터마이징하기 위한 옵션입니다.

:::warning
슬롯과 스코프드 슬롯 모두 지원되지만, v-slot 디렉티브 사용을 권장합니다.
:::

## rendererCell

렌더러를 선택하는 선택 UI를 교체하려면 `rendererCell` 슬롯을 사용하세요.

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
      <i class="fas fa-table" style="margin-right: 0.25rem"></i>테이블
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

집계자를 선택하는 선택 UI를 교체하려면 이것을 사용할 수 있습니다.

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
      <i class="fas fa-calculator" style="margin-right: 0.25rem"></i>개수
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

`td.pvtAxisContainer`의 너비를 고정하거나 드래그된 필드가 넘치지 않도록 하려면 이 슬롯을 사용할 수 있습니다.

::: tip
`td.pvtAxisContainer` 요소는 **overflow-x: auto** CSS 속성을 가지므로, 내용이 넘치면 수평 스크롤이 나타납니다.
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
    <label>colGroup 고정 너비: </label>
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

`td.pvtOutput` 영역을 교체하는 슬롯입니다.

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
      <div style="padding: 10px">로딩 중...</div>
    </template>
  </VuePivottableUi>
  <button style="margin-top: 5px" :disabled="!loaded" @click="reload">
    <i class="fas fa-redo mr-25"></i>
    다시 실행
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