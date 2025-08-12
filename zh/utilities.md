# 工具函数

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
    '星期': PivotUtilities.sortAs(['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'])
  }
}
```

## aggregatorTemplates

内置聚合器和聚合器模板

```js
const aggregators = ((tpl) => ({
    '计数': tpl.count(usFmtInt),
    '唯一值计数': tpl.countUnique(usFmtInt),
    '唯一值列表': tpl.listUnique(', '),
    '求和': tpl.sum(usFmt),
    '整数求和': tpl.sum(usFmtInt),
    '平均值': tpl.average(usFmt),
    '中位数': tpl.median(usFmt),
    '样本方差': tpl.var(1, usFmt),
    '样本标准差': tpl.stdev(1, usFmt),
    '最小值': tpl.min(usFmt),
    '最大值': tpl.max(usFmt),
    '第一个': tpl.first(usFmt),
    '最后一个': tpl.last(usFmt),
    '求和除以求和': tpl.sumOverSum(usFmt),
    '占总计的比例': tpl.fractionOf(tpl.sum(), 'total', usFmtPct),
    '占行总计的比例': tpl.fractionOf(tpl.sum(), 'row', usFmtPct),
    '占列总计的比例': tpl.fractionOf(tpl.sum(), 'col', usFmtPct),
    '计数占总计的比例': tpl.fractionOf(tpl.count(), 'total', usFmtPct),
    '计数占行总计的比例': tpl.fractionOf(tpl.count(), 'row', usFmtPct),
    '计数占列总计的比例': tpl.fractionOf(tpl.count(), 'col', usFmtPct)
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
  zh: {
    zhAggregators,
    localeStrings: {
      renderError: '渲染透视表结果时发生错误。',
      computeError: '计算透视表结果时发生错误。',
      uiRenderError: '渲染透视表UI时发生错误。',
      selectAll: '全选',
      selectNone: '取消选择',
      tooMany: '(项目太多无法列出)',
      filterResults: '筛选值',
      totals: '合计',
      vs: 'vs',
      by: 'by'
    }
  }
}
```