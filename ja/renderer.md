# レンダラー

## カスタムレンダラー

`vue-pivottable`は組み込みのレンダラーに加えて、カスタムレンダラーをサポートしています。現在、2つの公式カスタムレンダラーが利用可能です：Plotlyベースの`plotly-renderer`と軽量な`lazy-table-renderer`で、どちらも別途インストール可能なパッケージとして提供されています。
必要に応じて個別にインストールして使用できます。また、**独自のカスタムレンダラー関数**を定義し、`renderers`プロップを通じて渡すことで、ピボットデータの表示方法を完全にカスタマイズできます。

## plotly renderer

### 依存関係

PlotlyレンダラーはPlotly.jsの軽量なVue 3ラッパーである@clalarco/vue3-plotlyを使用して構築されています。
このライブラリは`@vue-pivottable/plotly-renderer`の依存関係として含まれているため、別途インストールする必要はありません。
Plotlyの動作をカスタマイズしたい場合は、高度な使用方法については該当するドキュメントを参照してください。

#### 組み込みチャート

Plotlyレンダラーは、すぐに使用できる9つの組み込みチャートタイプを提供します：

- エリアチャート (Area Chart)
- ドットチャート (Dot Chart)  
- グループ棒グラフ (Grouped Bar Chart)
- グループ縦棒グラフ (Grouped Column Chart)
- 折れ線グラフ (Line Chart)
- 複数円グラフ (Multiple Pie Chart)
- 散布図 (Scatter Chart)
- 積み上げ棒グラフ (Stacked Bar Chart)
- 積み上げ縦棒グラフ (Stacked Column Chart)

これらのチャートは、レンダラードロップダウンから選択するか、プログラムで設定することで直接使用できます。

### インストール

```bash
npm install @vue-pivottable/plotly-renderer
```

📦 **unpkg** : <https://unpkg.com/vue-pivottable@1.0.0-alpha.3/dist/vue-pivottable.umd.js><br/>
🌏 **jsDelivr** : <https://cdn.jsdelivr.net/npm/vue-pivottable@1.0.0-alpha.3/dist/vue-pivottable.umd.min.js>

### 使用方法

```vue
<template>
  <VuePivottableUi
    :data="[
      { color: 'blue', shape: 'circle' },
      { color: 'red', shape: 'triangle' },
    ]"
    :rows="['color']"
    :cols="['shape']"
    :renderers="renderers"
  />
</template>

<script setup>
import { markRaw } from "vue";
import { VuePivottableUi } from "vue-pivottable";
import "vue-pivottable/dist/vue-pivottable.css";
import { VuePivottableUi, Renderer } from "vue-pivottable";
import PlotlyRenderer from "@vue-pivottable/plotly-renderer";

// デフォルトレンダラーにplotlyレンダラーを追加
const renderers = markRaw({
  ...Renderer,
  ...PlotlyRenderer,
});
</script>
```

### デモ

今後更新予定

## lazy table renderer

lazy table rendererは、仮想スクロールを実装することで大規模なデータセット作業時の性能向上を目的に設計されています。ピボットテーブルの可視部分のみをレンダリングすることで、DOMサイズを大幅に削減し、レンダリング性能を向上させます。

### 主要機能

- **仮想スクロール**: IntersectionObserverを使用して可視行のみをレンダリング
- **固定行高**: 30px行高に最適化
- **チャンクベースレンダリング**: 設定可能なチャンク単位でデータをレンダリング
- **自動パディング**: 上下のパディングでスクロール位置を維持
- **Vue 3対応**: Vue 3 Composition API専用に構築

### インストール

```bash
npm install @vue-pivottable/lazy-table-renderer
```

### 使用方法

```vue
<template>
  <VuePivottableUi
    :data="largeDataset"
    :rows="['category']"
    :cols="['month']"
    :renderers="renderers"
    renderer-name="Lazy Table"
  />
</template>

<script setup>
import { markRaw } from "vue";
import { VuePivottableUi, Renderer } from "vue-pivottable";
import "vue-pivottable/dist/vue-pivottable.css";
import LazyTableRenderer from "@vue-pivottable/lazy-table-renderer";

// デフォルトレンダラーにlazy table rendererを追加
const renderers = markRaw({
  ...Renderer,
  ...LazyTableRenderer,
});

// 大規模データセットの例
const largeDataset = Array.from({ length: 10000 }, (_, i) => ({
  category: `カテゴリ ${i % 100}`,
  month: `2024-${String((i % 12) + 1).padStart(2, '0')}`,
  value: Math.floor(Math.random() * 1000)
}));
</script>
```

### 設定

lazy table rendererは標準のvue-pivottableプロップに加えて、2つの追加プロップを提供します：

| プロップ | 型 | デフォルト | 説明 |
|------|------|---------|-------------|
| `chunkSize` | Number | `50` | チャンクごとにレンダリングされる行数（現在のバージョンでは固定値） |
| `bufferSize` | Number | `1` | 可視領域の前後にレンダリングされるチャンク数（現在のバージョンでは固定値） |

### 高度な使用方法

lazy table rendererはデフォルト設定（chunkSize: 50、bufferSize: 1）で事前設定されたコンポーネントをエクスポートするため、標準インポートを通じてこれらの値を直接カスタマイズすることはできません。レンダラーはこれらのデフォルト値でほとんどのユースケースに最適化されています。

異なるチャンクサイズやバッファサイズが必要な場合：
1. パッケージをフォークしてソースコードのデフォルト値を変更
2. またはカスタマイゼーション用のプロップを受け入れるようパッケージに機能追加を要求

**注意**: プロップによるchunkSizeとbufferSizeのカスタマイゼーション機能は将来のリリースで提供される予定です。

```vue
<template>
  <VuePivottableUi
    :data="largeDataset"
    :rows="['category']"
    :cols="['month']"
    :renderers="renderers"
    renderer-name="Lazy Table"
  />
</template>

<script setup>
import { markRaw } from "vue";
import { VuePivottableUi, Renderer } from "vue-pivottable";
import "vue-pivottable/dist/vue-pivottable.css";
import LazyTableRenderer from "@vue-pivottable/lazy-table-renderer";

// デフォルト設定でlazy table rendererを使用
const renderers = markRaw({
  ...Renderer,
  ...LazyTableRenderer, // chunkSize: 50、bufferSize: 1で'Lazy Table'が含まれます
});
</script>
```

### 使用シナリオ

lazy table rendererは以下のような場合に理想的です：

- **大規模データセット**: 数千行を扱う場合
- **性能重視アプリケーション**: DOMサイズが性能に影響する場合
- **メモリ制約環境**: DOMノードを制限してメモリ使用量を削減
- **スムーズスクロール**: 大型テーブルでもスムーズなスクロール体験を維持

### 性能のヒント

1. **チャンクサイズ調整**: 大きなチャンクは再レンダリングが少ないですが、初期DOMノードが多くなります
2. **バッファサイズ**: スムーズなスクロールのために増加、性能向上のために減少
3. **行高**: レンダラーは30px行に最適化されています；カスタム高さは性能に影響する可能性があります
4. **データ構造**: 最適なレンダリングのためにデータが適切にインデックス化されていることを確認

### デモ

[ライブデモ](https://vue-pivottable.vercel.app/examples/lazy-table)で大規模データセットとともにlazy table rendererが動作する様子をご覧ください。