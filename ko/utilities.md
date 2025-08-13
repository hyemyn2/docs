# 유틸리티

```js
import { PivotUtilities } from 'vue-pivottable'
```

## numberFormat

```js
  const usFmt = PivotUtilities.numberFormat()
  const usFmtInt = PivotUtilities.numberFormat({ digitsAfterDecimal: 0 })
  const usFmtPct = PivotUtilities.numberFormat({
    digitsAfterDecimal: 1,
    scaler: 100,
    suffix: '%'
  })
```

## sortAs

```js
const sorters = function () {
  return {
    '요일': PivotUtilities.sortAs(['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'])
  }
}
```

## aggregatorTemplates

내장 집계자 및 집계자 템플릿

```js
const aggregators = ((tpl) => ({
    '개수': tpl.count(usFmtInt),
    '고유값 개수': tpl.countUnique(usFmtInt),
    '고유값 목록': tpl.listUnique(', '),
    '합계': tpl.sum(usFmt),
    '정수 합계': tpl.sum(usFmtInt),
    '평균': tpl.average(usFmt),
    '중앙값': tpl.median(usFmt),
    '표본 분산': tpl.var(1, usFmt),
    '표본 표준편차': tpl.stdev(1, usFmt),
    '최솟값': tpl.min(usFmt),
    '최댓값': tpl.max(usFmt),
    '첫 번째': tpl.first(usFmt),
    '마지막': tpl.last(usFmt),
    '합계/합계': tpl.sumOverSum(usFmt),
    '전체 대비 합계 비율': tpl.fractionOf(tpl.sum(), 'total', usFmtPct),
    '행 대비 합계 비율': tpl.fractionOf(tpl.sum(), 'row', usFmtPct),
    '열 대비 합계 비율': tpl.fractionOf(tpl.sum(), 'col', usFmtPct),
    '전체 대비 개수 비율': tpl.fractionOf(tpl.count(), 'total', usFmtPct),
    '행 대비 개수 비율': tpl.fractionOf(tpl.count(), 'row', usFmtPct),
    '열 대비 개수 비율': tpl.fractionOf(tpl.count(), 'col', usFmtPct)
  })
)(PivotUtilities.aggregatorTemplates)
```

## locales

```js
const locales = {
  en: {
    aggregators,
    localeStrings: {
      renderError: 'An error occurred rendering the PivotTable results.',
      computeError: 'An error occurred computing the PivotTable results.',
      uiRenderError: 'An error occurred rendering the PivotTable UI.',
      selectAll: 'Select All',
      selectNone: 'Select None',
      tooMany: '(too many to list)',
      filterResults: 'Filter values',
      totals: 'Totals',
      vs: 'vs',
      by: 'by'
    }
  },
  ko: {
    koAggregators,
    localeStrings: {
      renderError: '피벗 테이블 결과를 렌더링하는 동안 오류가 발생했습니다.',
      computeError: '피벗 테이블 결과를 계산하는 동안 오류가 발생했습니다.',
      uiRenderError: '피벗 테이블 UI를 렌더링하는 동안 오류가 발생했습니다.',
      selectAll: '모두 선택',
      selectNone: '선택 안함',
      tooMany: '(표시할 항목이 너무 많습니다)',
      filterResults: '값 필터링',
      totals: '합계',
      vs: 'vs',
      by: 'by'
    }
  }
}
```