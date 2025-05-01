# 언어설정

## How to use?

The default `locales` is defined in `/src/helper/utilities.js`:

```js
const locales = {
  en: {
    aggregators,
    localeStrings: {
      renderError: "An error occurred rendering the PivotTable results.",
      computeError: "An error occurred computing the PivotTable results.",
      uiRenderError: "An error occurred rendering the PivotTable UI.",
      selectAll: "Select All",
      selectNone: "Select None",
      tooMany: "(too many to list)",
      filterResults: "Filter values",
      totals: "Totals",
      vs: "vs",
      by: "by",
      cancel: "Cancel",
      only: "only",
    },
  },
  fr: {
    frAggregators,
    localeStrings: {
      renderError: "Une erreur est survenue en dessinant le tableau croisé.",
      computeError: "Une erreur est survenue en calculant le tableau croisé.",
      uiRenderError:
        "Une erreur est survenue en dessinant l'interface du tableau croisé dynamique.",
      selectAll: "Sélectionner tout",
      selectNone: "Ne rien sélectionner",
      tooMany: "(trop de valeurs à afficher)",
      filterResults: "Filtrer les valeurs",
      totals: "Totaux",
      vs: "sur",
      by: "par",
      apply: "Appliquer",
      cancel: "Annuler",
      only: "seul",
    },
  },
};

export { locales };
```

## Adding a New Language

To support a new language, provide both the `languagePack` and `locale` props to the component.
The `languagePack` prop should contain your custom locale definitions, and the `locale` prop should be set to the key of the language you want to display.

```vue
<template>
  <VuePivottableUi
    :data="[
      { color: 'blue', shape: 'circle' },
      { color: 'red', shape: 'triangle' },
    ]"
    :rows="['color']"
    :cols="['shape']"
    :languagePack="languagePack"
    :locale="locale"
  />
</template>

<script setup>
import { VuePivottableUi, PivotUtilities } from "vue-pivottable";
import "vue-pivottable/dist/vue-pivottable.css";

const languagePack = {
  en: PivotUtilities.locales.en,
  ko: {
    localeStrings: {
      renderError: "피벗 테이블 결과를 렌더링하는 동안 오류가 발생 했습니다.",
      computeError: "피벗 테이블 결과를 계산하는 동안 오류가 발생 했습니다.",
      uiRenderError: "피벗 테이블 UI를 렌더링하는 동안 오류가 발생 했습니다.",
      selectAll: "모두 선택",
      selectNone: "선택 안함",
      tooMany: "표시 할 값이 너무 많습니다.",
      filterResults: "값 필터링",
      totals: "합계",
      only: "단독",
      vs: "vs",
      by: "by",
    },
  },
};

const locale = "en"; // or 'ko';
</script>
```

## Example

<iframe
  src="https://stackblitz.com/edit/vitejs-vite-aefzv3q9?ctl=1&embed=1&file=src%2FApp.vue&hideExplorer=1&hideNavigation=1&view=preview"
  width="100%"
  height="500"
  style="border:0; border-radius: 4px; overflow:hidden;"
  title="Vue Pivottable Example: Locale"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
