---
layout: home
hero:
  name: "Vue Pivottable"
  text: "The official guide for vue-pivottable"
  tagline: "Flexible and easy-to-use pivot table component for Vue 3"
  actions:
    - theme: brand
      text: Get started
      link: /getting-started
    - theme: alt
      text: Demo
      link: /demo
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
</script>
