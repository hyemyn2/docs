# ロケール

## 使い方

デフォルトの`locales`は`/src/helper/utilities.js`で定義されています：

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

## 新しい言語の追加

新しい言語をサポートするには、コンポーネントに`languagePack`と`locale`の両方のpropsを提供する必要があります。
`languagePack`プロップにはカスタムロケール定義を含める必要があり、`locale`プロップは表示したい言語のキーに設定する必要があります。

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
  ja: {
    localeStrings: {
      renderError: "ピボットテーブルの結果をレンダリング中にエラーが発生しました。",
      computeError: "ピボットテーブルの結果を計算中にエラーが発生しました。",
      uiRenderError: "ピボットテーブルUIをレンダリング中にエラーが発生しました。",
      selectAll: "すべて選択",
      selectNone: "選択解除",
      tooMany: "表示する値が多すぎます。",
      filterResults: "値をフィルタ",
      totals: "合計",
      only: "のみ",
      vs: "対",
      by: "別",
    },
  },
};

const locale = "en"; // または 'ja';
</script>
```

## 例

<iframe
  src="https://stackblitz.com/edit/vitejs-vite-aefzv3q9?embed=1&file=src%2FApp.vue&hideExplorer=1&hideNavigation=1&view=preview"
  width="100%"
  height="500"
  style="border:0; border-radius: 4px; overflow:hidden;"
  title="Vue Pivottable 例: ロケール"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-popups-to-escape-sandbox"
></iframe>