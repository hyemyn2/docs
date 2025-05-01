---
layout: home
hero:
  name: "Vue Pivottable"
  text: "The official guide for vue-pivottable"
  tagline: "Flexible and easy-to-use pivot table component for Vue 3"
  actions:
    - theme: brand
      text: 시작하기
      link: /getting-started
    - theme: alt
      text: 이전 버전 (Vue 2)
      link: https://seungwoo321.github.io/vue-pivottable/
---

# Quick Start

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
