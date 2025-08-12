# 本地化

## 如何使用？

默认的 `locales` 在 `/src/helper/utilities.js` 中定义：

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

## 添加新语言

要支持新语言，需要向组件提供 `languagePack` 和 `locale` 两个属性。
`languagePack` 属性应包含您的自定义本地化定义，`locale` 属性应设置为您要显示的语言的键。

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
  zh: {
    localeStrings: {
      renderError: "渲染透视表结果时发生错误。",
      computeError: "计算透视表结果时发生错误。",
      uiRenderError: "渲染透视表UI时发生错误。",
      selectAll: "全选",
      selectNone: "取消选择",
      tooMany: "值太多无法显示。",
      filterResults: "筛选值",
      totals: "总计",
      only: "仅",
      vs: "对比",
      by: "按",
    },
  },
};

const locale = "en"; // 或 'zh';
</script>
```

## 示例

<iframe
  src="https://stackblitz.com/edit/vitejs-vite-aefzv3q9?embed=1&file=src%2FApp.vue&hideExplorer=1&hideNavigation=1&view=preview"
  width="100%"
  height="500"
  style="border:0; border-radius: 4px; overflow:hidden;"
  title="Vue Pivottable 示例：本地化"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-popups-to-escape-sandbox"
></iframe>