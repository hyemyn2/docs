---
layout: home
hero:
  name: "Vue Pivottable"
  text: "vue-pivottable 공식 가이드"
  tagline: "Vue 3용 유연하고 사용하기 쉬운 피벗 테이블 컴포넌트"
  actions:
    - theme: brand
      text: 시작하기
      link: /ko/getting-started
    - theme: alt
      text: 이전 버전 (Vue 2)
      link: https://seungwoo321.github.io/vue-pivottable/
---

# 빠른 시작

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
