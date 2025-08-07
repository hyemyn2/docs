---
layout: home

hero:
  name: "Vue Pivottable"
  text: "Vue 3 透视表"
  tagline: 轻松汇总、转换和可视化大型数据集
  actions:
    - theme: brand
      text: 快速开始
      link: /zh/getting-started
    - theme: alt
      text: 属性参考
      link: /zh/props

features:
  - title: Vue 3 优化
    details: 基于最新的 Vue 3 Composition API 构建，提供卓越的性能和开发体验
  - title: 交互式 UI
    details: 拖拽字段配置、过滤功能，实现动态数据探索
  - title: 可扩展
    details: 自定义渲染器、聚合器和样式，完全可定制
---

## 快速开始

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

## 安装

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

## 主要特性

### 🚀 Vue 3 支持
基于最新的 Vue 3 Composition API 构建，最大化响应式和性能。

### 🎯 交互式
用户友好的拖拽界面，轻松进行数据探索。

### 📊 多种渲染
支持表格、图表（Plotly 集成）等多种显示格式。

### ⚡ 高性能
大型数据集虚拟滚动（lazy table renderer），提供流畅体验。

### 🛠 可定制
自定义聚合器、渲染器和样式，完全可定制。

### 📝 TypeScript
完整的 TypeScript 支持，安全高效的开发。