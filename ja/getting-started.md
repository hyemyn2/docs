---
outline: deep
---

# はじめに

## インストール

### NPM

```bash
# プロジェクトにインストール
npm install vue-pivottable
```

### PNPM

```bash
pnpm install vue-pivottable
```

### 直接ダウンロード / CDN

📦 **unpkg** : <https://unpkg.com/vue-pivottable@1.0.0-alpha.3/dist/vue-pivottable.umd.js><br/>
🌏 **jsDelivr** : <https://cdn.jsdelivr.net/npm/vue-pivottable@1.0.0-alpha.3/dist/vue-pivottable.umd.min.js>

```html
<!-- Vue後にvue-pivottableをインクルード -->
<script src="/path/to/vue.js"></script>
<script src="/path/to/vue-pivottable.umd.min.js"></script>
```

## クイックスタート

### Vue Pivottable

`VuePivottable`は静的なピボットテーブルをレンダリングする簡単なコンポーネントです。  
指定された`rows`と`cols`オプションに従って`data`を表示します。

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

> 🔴 デフォルトスタイルを適用するには`vue-pivottable.css`ファイルをインポートする必要があります。
> このCSSがないと、ピボットテーブルが正しく表示されない場合があります。

<iframe
  src="https://stackblitz.com/edit/vitejs-vite-iyiexnrn?embed=1&file=src%2FApp.vue&hideExplorer=1&hideNavigation=1&view=preview"
  width="100%"
  height="500"
  style="border:0; border-radius: 4px; overflow:hidden;"
  title="Vite Vue3 Sample"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-popups-to-escape-sandbox"
></iframe>

### Vue Pivottable UI

`VuePivottableUi`は、ユーザーが動的に`rows`と`cols`をカスタマイズできるユーザーインターフェースを提供することで機能を拡張します。
ユーザーは属性をエリア間でドラッグしたり、データにフィルターを適用したりして、ピボットテーブルの表示方法を調整できます。

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

<iframe
  src="https://stackblitz.com/edit/vitejs-vite-dviwcxsq?embed=1&file=src%2FApp.vue&hideExplorer=1&hideNavigation=1&view=preview"
  width="100%"
  height="500"
  style="border:0; border-radius: 4px; overflow:hidden;"
  title="Vite Vue3 Sample"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-popups-to-escape-sandbox"
></iframe>

### Vue Pivottable UI with Plotly Renderer

Plotlyレンダラーはコア`vue-pivottable`ライブラリにデフォルトでは含まれていませんが、別途インストールして使用できます。
詳細については https://vue-pivottable.vercel.app/renderer.html のレンダラーセクションをご確認ください。