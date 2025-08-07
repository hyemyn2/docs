# 렌더러

## 커스텀 렌더러

`vue-pivottable`은 내장 렌더러 외에도 커스텀 렌더러를 지원합니다. 현재 두 가지 공식 커스텀 렌더러를 사용할 수 있습니다: Plotly 기반의 `plotly-renderer`와 경량화된 `lazy-table-renderer`로, 모두 별도로 설치 가능한 패키지로 제공됩니다.
필요에 따라 개별적으로 설치하여 사용할 수 있습니다. 또한 **자체 커스텀 렌더러 함수**를 정의하고 `renderers` prop을 통해 전달하여 피벗 데이터가 표시되는 방식을 완전히 커스터마이징할 수 있습니다.

## plotly renderer

### 의존성

Plotly 렌더러는 Plotly.js의 경량화된 Vue 3 래퍼인 @clalarco/vue3-plotly를 사용하여 구축되었습니다.
이 라이브러리는 `@vue-pivottable/plotly-renderer`의 의존성으로 포함되어 있으므로 별도로 설치할 필요가 없습니다.
Plotly 동작을 커스터마이징하려면 고급 사용을 위한 해당 문서를 참조하세요.

#### 내장 차트

Plotly 렌더러는 즉시 사용할 수 있는 9가지 내장 차트 유형을 제공합니다:

- 영역 차트 (Area Chart)
- 점 차트 (Dot Chart)
- 그룹 막대 차트 (Grouped Bar Chart)
- 그룹 세로 막대 차트 (Grouped Column Chart)
- 선 차트 (Line Chart)
- 다중 파이 차트 (Multiple Pie Chart)
- 산점도 (Scatter Chart)
- 누적 막대 차트 (Stacked Bar Chart)
- 누적 세로 막대 차트 (Stacked Column Chart)

이러한 차트는 렌더러 드롭다운에서 선택하거나 프로그래밍 방식으로 설정하여 직접 사용할 수 있습니다.

### 설치

```bash
npm install @vue-pivottable/plotly-renderer
```

📦 **unpkg** : <https://unpkg.com/vue-pivottable@1.0.0-alpha.3/dist/vue-pivottable.umd.js><br/>
🌏 **jsDelivr** : <https://cdn.jsdelivr.net/npm/vue-pivottable@1.0.0-alpha.3/dist/vue-pivottable.umd.min.js>

### 사용법

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

// 기본 렌더러에 plotly 렌더러 추가
const renderers = markRaw({
  ...Renderer,
  ...PlotlyRenderer,
});
</script>
```

### 데모

추후 업데이트 예정

## lazy table renderer

lazy table renderer는 가상 스크롤링을 구현하여 대용량 데이터셋 작업 시 성능을 향상시키도록 설계되었습니다. 피벗 테이블의 보이는 부분만 렌더링하여 DOM 크기를 크게 줄이고 렌더링 성능을 개선합니다.

### 주요 기능

- **가상 스크롤링**: IntersectionObserver를 사용하여 보이는 행만 렌더링
- **고정 행 높이**: 30px 행 높이에 최적화
- **청크 기반 렌더링**: 설정 가능한 청크 단위로 데이터 렌더링
- **자동 패딩**: 상단/하단 패딩으로 스크롤 위치 유지
- **Vue 3 호환**: Vue 3 composition API를 위해 특별히 제작

### 설치

```bash
npm install @vue-pivottable/lazy-table-renderer
```

### 사용법

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

// 기본 렌더러에 lazy table renderer 추가
const renderers = markRaw({
  ...Renderer,
  ...LazyTableRenderer,
});

// 대용량 데이터셋 예시
const largeDataset = Array.from({ length: 10000 }, (_, i) => ({
  category: `카테고리 ${i % 100}`,
  month: `2024-${String((i % 12) + 1).padStart(2, '0')}`,
  value: Math.floor(Math.random() * 1000)
}));
</script>
```

### 설정 옵션

lazy table renderer는 표준 vue-pivottable props 외에 두 가지 추가 props를 제공합니다:

| Prop | 타입 | 기본값 | 설명 |
|------|------|---------|-------------|
| `chunkSize` | Number | `50` | 청크당 렌더링되는 행 수 (현재 버전에서는 고정값) |
| `bufferSize` | Number | `1` | 보이는 영역 전후에 렌더링되는 청크 수 (현재 버전에서는 고정값) |

### 고급 사용법

lazy table renderer는 기본 설정(chunkSize: 50, bufferSize: 1)으로 사전 구성된 컴포넌트를 export하므로, 표준 import를 통해서는 이러한 값을 직접 커스터마이징할 수 없습니다. 렌더러는 이러한 기본값으로 대부분의 사용 사례에 최적화되어 있습니다.

다른 청크 또는 버퍼 크기가 필요한 경우:
1. 패키지를 포크하여 소스 코드의 기본값을 수정
2. 또는 커스터마이징을 위한 props를 받을 수 있도록 패키지에 기능 추가 요청

**참고**: props를 통한 chunkSize와 bufferSize 커스터마이징 기능은 향후 릴리스에서 제공될 예정입니다.

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

// 기본 설정으로 lazy table renderer 사용
const renderers = markRaw({
  ...Renderer,
  ...LazyTableRenderer, // 'Lazy Table'이 chunkSize: 50, bufferSize: 1로 포함됨
});
</script>
```

### 사용 시나리오

lazy table renderer는 다음과 같은 경우에 이상적입니다:

- **대용량 데이터셋**: 수천 개의 행을 다룰 때
- **성능이 중요한 애플리케이션**: DOM 크기가 성능에 영향을 미칠 때
- **메모리 제약 환경**: DOM 노드를 제한하여 메모리 사용량 감소
- **부드러운 스크롤링**: 대형 테이블에서도 부드러운 스크롤링 경험 유지

### 성능 팁

1. **청크 크기 조정**: 큰 청크는 재렌더링이 적지만 초기 DOM 노드가 많음
2. **버퍼 크기**: 부드러운 스크롤링을 위해 증가, 성능 향상을 위해 감소
3. **행 높이**: 렌더러는 30px 행에 최적화됨; 커스텀 높이는 성능에 영향을 미칠 수 있음
4. **데이터 구조**: 최적의 렌더링을 위해 데이터가 적절히 인덱싱되어 있는지 확인

### 데모

[라이브 데모](https://vue-pivottable.vercel.app/examples/lazy-table)에서 대용량 데이터셋과 함께 lazy table renderer가 작동하는 것을 확인해보세요.
