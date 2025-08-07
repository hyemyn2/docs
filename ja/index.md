---
layout: home

hero:
  name: "Vue Pivottable"
  text: "Vue 3用ピボットテーブル"
  tagline: 大規模データセットを簡単に要約、変換、視覚化
  actions:
    - theme: brand
      text: はじめに
      link: /ja/getting-started
    - theme: alt
      text: プロップリファレンス
      link: /ja/props

features:
  - title: Vue 3最適化
    details: 最新のVue 3 Composition APIで構築され、優れたパフォーマンスとDeveloper Experienceを提供
  - title: インタラクティブUI
    details: ドラッグアンドドロップでフィールド設定、フィルタリング機能で動的なデータ探索
  - title: 拡張可能
    details: カスタムレンダラー、アグリゲータ、スタイルで完全にカスタマイズ可能
---

## クイックスタート

```vue
<template>
  <VuePivottableUi
    :data="[
      { color: 'blue', shape: 'circle' },
      { color: 'red', shape: 'triangle' }
    ]"
    :rows="['color']"
    :cols="['shape']"
  />
</template>

<script setup>
import { VuePivottableUi } from 'vue-pivottable'
import 'vue-pivottable/dist/vue-pivottable.css'
</script>
```

## インストール

::: code-group
```bash [npm]
npm install vue-pivottable
```

```bash [pnpm]
pnpm add vue-pivottable
```

```bash [yarn]
yarn add vue-pivottable
```
:::

## 主な機能

### 🚀 Vue 3対応
最新のVue 3 Composition APIで構築され、リアクティビティとパフォーマンスを最大化。

### 🎯 インタラクティブ
ユーザーフレンドリーなドラッグアンドドロップインターフェースでデータ探索を簡単に。

### 📊 多様なレンダリング
テーブル、チャート（Plotly統合）など、複数の表示形式をサポート。

### ⚡ 高性能
大規模データセット向けの仮想スクロール（lazy table renderer）でスムーズな体験。

### 🛠 カスタマイズ可能
独自のアグリゲータ、レンダラー、スタイルで完全にカスタマイズ。

### 📝 TypeScript
完全なTypeScriptサポートで安全で効率的な開発。