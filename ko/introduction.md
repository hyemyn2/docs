---
outline: deep
---

# 소개

## VuePivottable이란?

**Vue 3용 피벗 테이블 컴포넌트**

`vue-pivottable`은 Vue 3 호환 피벗 테이블 컴포넌트로, 인기 있는 [react-pivottable](https://github.com/plotly/react-pivottable)의 Vue 래퍼입니다. 이 라이브러리를 사용하면 피벗 테이블 UI에서 대용량 데이터셋을 쉽게 요약, 변환 및 시각화할 수 있습니다.

## 주요 기능

- **Vue 3 Composition API**로 현대적인 개발에 최적화
- **다양한 집계기 및 렌더러**로 유연한 데이터 시각화 제공
- **드래그 앤 드롭** 필드 구성이 가능한 **대화형 UI**
- **높은 커스터마이징** 가능 (렌더러, 집계기, 스타일)
- **TypeScript** 지원으로 향상된 개발 경험

## 기본 개념

### 피벗 테이블이란?

피벗 테이블은 데이터를 다양한 차원에서 집계하고 교차표 형식으로 표시하는 강력한 데이터 분석 도구입니다.

### 컴포넌트

- **VuePivottable**: 정적 피벗 테이블을 렌더링하는 기본 컴포넌트
- **VuePivottableUi**: 사용자가 동적으로 설정을 변경할 수 있는 대화형 컴포넌트

### 데이터 구조

Vue Pivottable은 다음과 같은 데이터 형식을 지원합니다:

- **객체 배열**: `[{name: "Alice", age: 25}, {name: "Bob", age: 30}]`
- **배열의 배열**: `[["이름", "나이"], ["Alice", 25], ["Bob", 30]]`
- **함수**: 비동기적으로 데이터를 제공하는 함수

## 왜 Vue Pivottable을 선택해야 할까요?

1. **Vue 3 최적화**: 최신 Vue 3 Composition API 활용
2. **유연성**: 커스텀 렌더러와 집계기로 필요에 맞게 확장
3. **성능**: 대용량 데이터셋을 위한 최적화 (lazy table renderer)
4. **개발자 경험**: TypeScript 지원과 포괄적인 문서

<br/>

![Vue Pivottable Demo](/vue-pivottable-demo.gif)

## 다음 단계

- 설치 및 설정을 위한 [시작하기](/ko/getting-started) 확인
- [속성](/ko/props) 자세히 알아보기
- [렌더러](/ko/renderer) 커스터마이징 옵션 탐색

## 영감

- [plotly/react-pivottable](https://github.com/plotly/react-pivottable) - React-based pivot table library
- [clalarco/vue3-plotly](https://github.com/clalarco/vue3-plotly) - vue wrapper for plotly.js

## 라이센스

VuePivottable은 MIT 라이센스 하에 배포되는 오픈소스 소프트웨어입니다.
