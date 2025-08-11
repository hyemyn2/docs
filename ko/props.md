# Props

## 핵심 데이터 Props

### data

* **타입**: `Array`, `Object`, 또는 `Function`
* **기본값**: 없음
* **필수**: 예
* **사용 컴포넌트**: `VuePivottable`, `VuePivottableUi`
* **설명**: 피벗 테이블에 요약될 데이터. 객체 배열, 배열의 배열, 또는 데이터를 콜백하는 함수가 될 수 있습니다.

### vals

* **타입**: `Array<string>`
* **기본값**: `[]`
* **사용 컴포넌트**: `VuePivottable`, `VuePivottableUi`
* **설명**: 집계 함수에 사용되는 속성 이름들. 피벗 테이블에서 계산될 값을 정의합니다.

### cols

* **타입**: `Array<string>`
* **기본값**: `[]`
* **사용 컴포넌트**: `VuePivottable`, `VuePivottableUi`
* **설명**: 피벗 테이블의 열 영역에 미리 채울 속성 이름들.

### rows

* **타입**: `Array<string>`
* **기본값**: `[]`
* **사용 컴포넌트**: `VuePivottable`, `VuePivottableUi`
* **설명**: 피벗 테이블의 행 영역에 미리 채울 속성 이름들.

### attributes

* **타입**: `Array<string>`
* **기본값**: `[]`
* **필수**: 아니오
* **사용 컴포넌트**: `VuePivottable`, `VuePivottableUi`
* **설명**: 데이터에서 찾은 속성 이름 목록. 제공하지 않으면 데이터에서 자동으로 유도됩니다.

## 화면 제어 Props

### showRowTotal

* **타입**: `Boolean`
* **기본값**: `true`
* **설명**: 행 합계를 표시할지 여부를 결정합니다.

### showColTotal

* **타입**: `Boolean`
* **기본값**: `true`
* **설명**: 열 합계를 표시할지 여부를 결정합니다.

### tableMaxWidth

* **타입**: `Number`
* **기본값**: `0`
* **검증**: 0 이상이어야 함
* **사용 컴포넌트**: `VuePivottable`, `VuePivottableUi`
* **설명**: 피벗 테이블의 최대 너비를 픽셀 단위로 설정합니다. 0 값은 최대 너비가 없음을 의미합니다.

## 집계 Props

### aggregators

* **타입**: `Record<string, AggregatorTemplate>`
* **기본값**: utilities에서 가져옴
* **사용 컴포넌트**: `VuePivottable`, `VuePivottableUi`
* **설명**: 드롭다운에서 사용 가능한 집계 함수에 대한 생성자 함수 사전 (예: Sum, Count, Average).

### aggregatorName

* **타입**: `String`
* **기본값**: `'Count'`
* **설명**: 계산에 사용할 집계자를 지정하는 `aggregators` 객체의 키.

## 렌더링 Props

### renderers

* **타입**: `Object`
* **기본값**: `{}`
* **설명**: 피벗 테이블을 표시하는 데 사용할 수 있는 렌더러 컴포넌트가 포함된 객체.

### rendererName

* **타입**: `String`
* **기본값**: `'Table'`
* **설명**: 표시에 사용할 렌더러를 지정하는 `renderers` 객체의 키.

### heatmapMode

* **타입**: `String`
* **기본값**: `undefined`
* **설명**: 값에 히트맵 색상을 적용하는 방법을 지정합니다. 옵션에는 `'full'`, `'row'`, 또는 `'col'`이 있습니다.

### tableColorScaleGenerator

* **타입**: `Function`
* **기본값**: `redColorScaleGenerator`
* **설명**: 테이블 히트맵의 사용자 정의 색상 스케일을 생성하는 함수.

### tableOptions

* **타입**: `Object`
* **기본값**: `{}`
* **설명**: 셀 클릭 처리를 위한 `clickCallback`과 같은 테이블 렌더링에 대한 추가 옵션.

## 필터링 및 정렬 Props

### valueFilter

* **타입**: `Object`
* **기본값**: `{}`
* **설명**: 속성 값에 대한 필터링 구성. 키는 속성 이름이고 값은 포함하거나 제외할 레코드를 나타내는 속성 값-불리언 쌍의 객체입니다.

### sorters

* **타입**: `Function` 또는 `Object`
* **기본값**: `{}`
* **설명**: 표시를 위해 속성 값을 정렬하는 데 사용되는 함수. 속성 이름으로 호출하여 정렬 함수를 반환할 수 있습니다.

### derivedAttributes

* **타입**: `Function` 또는 `Object`
* **기본값**: `{}`
* **설명**: 기존 데이터에서 계산할 파생 속성을 정의합니다.

### rowOrder

* **타입**: `String`
* **기본값**: `'key_a_to_z'`
* **허용 값**: `'key_a_to_z'`, `'value_a_to_z'`, `'value_z_to_a'`
* **사용 컴포넌트**: `VuePivottable`, `VuePivottableUi`
* **설명**: 행 데이터가 렌더러에 제공되는 순서.

### colOrder

* **타입**: `String`
* **기본값**: `'key_a_to_z'`
* **허용 값**: `'key_a_to_z'`, `'value_a_to_z'`, `'value_z_to_a'`
* **사용 컴포넌트**: `VuePivottable`, `VuePivottableUi`
* **설명**: 열 데이터가 렌더러에 제공되는 순서.

## 현지화 Props

### locale

* **타입**: `String`
* **기본값**: `'en'`
* **설명**: 국제화를 위한 로케일 코드.

### languagePack

* **타입**: `Object`
* **기본값**: 가져온 locales
* **설명**: 다양한 언어에 대한 번역 및 형식 지정 옵션이 포함된 객체.

## VuePivottableUi Props

이 props는 `VuePivottableUi` 컴포넌트에 특화된 것으로 상호작용 UI 동작을 제어합니다.

### hiddenAttributes

* **타입**: `Array`
* **기본값**: `[]`
* **설명**: UI에서 완전히 생략할 속성 이름.

### hiddenFromAggregators

* **타입**: `Array`
* **기본값**: `[]`
* **설명**: 집계자 인수 드롭다운에서 제외할 속성 이름.

### hiddenFromDragDrop

* **타입**: `Array`
* **기본값**: `[]`
* **설명**: UI의 드래그 앤 드롭 부분에서 제외할 속성 이름.

### restrictedFromDragDrop

* **타입**: `Array`
* **기본값**: `[]`
* **설명**: 드래그 앤 드롭 인터페이스에서 볼 수는 있지만 이동할 수 없는 속성 이름.

### menuLimit

* **타입**: `Number`
* **기본값**: `500`
* **설명**: 속성을 더블 클릭할 때 필터 메뉴에 나열할 최대 값 수.

### hideFilterBoxOfUnusedAttributes

* **타입**: `Boolean`
* **기본값**: `false`
* **설명**: 현재 피벗 테이블에서 사용되지 않는 속성에 대한 필터 박스를 숨길지 여부.

### pivotModel

* **타입**: `PivotModelInterface`
* **기본값**: `undefined`
* **설명**: 피벗 테이블 상태를 제어하는 외부 모델. `v-model:pivotModel`을 통한 피벗 테이블 구성의 양방향 바인딩을 허용합니다. 제공되면 rows, cols, vals 등과 같은 개별 props를 오버라이드합니다. 모델에는 다음이 포함됩니다:
  - `rows`: 행 속성 이름 배열
  - `cols`: 열 속성 이름 배열
  - `vals`: 값 속성 이름 배열
  - `aggregatorName`: 집계 함수 이름
  - `rendererName`: 렌더러 이름
  - `valueFilter`: 속성 값에 대한 필터 구성
  - `rowOrder`: 행 정렬 순서
  - `colOrder`: 열 정렬 순서
  - `heatmapMode`: 히트맵 표시 모드
  
  피벗 테이블 상태를 저장/복원하고 상위 컴포넌트와 상태를 동기화하는 데 유용합니다.

## 제거된 Props

다음 props는 현재 버전에서 제거되었거나 변경되었습니다:

### locales

* **타입**: `Object`
* **이전 기본값**: 가져온 `locales`
* **상태**: `languagePack`으로 이름 변경됨
* **설명**: 이전에는 다양한 언어에 대한 번역 및 형식 지정 옵션을 제공하는 데 사용되었습니다.

### rowTotal

* **타입**: `Boolean`
* **이전 기본값**: `true`
* **상태**: `showRowTotal`으로 이름 변경됨
* **설명**: 이전에는 행 합계를 표시할지 여부를 결정하는 데 사용되었습니다.

### colTotal

* **타입**: `Boolean`
* **이전 기본값**: `true`
* **상태**: `showColTotal`으로 이름 변경됨
* **설명**: 이전에는 열 합계를 표시할지 여부를 결정하는 데 사용되었습니다.

### sortonlyFromDragDrop

* **타입**: `Array`
* **이전 기본값**: `[]`
* **상태**: `restrictedFromDragDrop`로 대체됨
* **설명**: 이전에는 UI의 드래그 앤 드롭에서 정렬할 속성 이름을 포함했습니다.

### disabledFromDragDrop

* **타입**: `Array`
* **이전 기본값**: `[]`
* **상태**: 완전히 제거됨
* **설명**: 이전에는 UI의 드래그 앤 드롭 부분에서 비활성화할 속성 이름을 포함했습니다.
