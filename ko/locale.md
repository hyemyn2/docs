# 로케일

## 사용 방법

기본 `locales`는 `/src/helper/utilities.js`에 정의되어 있습니다:

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

## 새 언어 추가하기

새로운 언어를 지원하려면 컴포넌트에 `languagePack`과 `locale` props를 모두 제공해야 합니다.
`languagePack` prop에는 사용자 정의 로케일 정의가 포함되어야 하며, `locale` prop은 표시하려는 언어의 키로 설정해야 합니다.

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
      renderError: "피벗 테이블 결과를 렌더링하는 동안 오류가 발생했습니다.",
      computeError: "피벗 테이블 결과를 계산하는 동안 오류가 발생했습니다.",
      uiRenderError: "피벗 테이블 UI를 렌더링하는 동안 오류가 발생했습니다.",
      selectAll: "모두 선택",
      selectNone: "선택 안함",
      tooMany: "표시할 값이 너무 많습니다.",
      filterResults: "값 필터링",
      totals: "합계",
      only: "단독",
      vs: "vs",
      by: "by",
    },
  },
};

const locale = "en"; // 또는 'ko';
</script>
```

## 예제

<iframe
  src="https://stackblitz.com/edit/vitejs-vite-aefzv3q9?embed=1&file=src%2FApp.vue&hideExplorer=1&hideNavigation=1&view=preview"
  width="100%"
  height="500"
  style="border:0; border-radius: 4px; overflow:hidden;"
  title="Vue Pivottable 예제: 로케일"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-popups-to-escape-sandbox"
></iframe>