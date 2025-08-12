# 高度な使用法

## PivotModelによる双方向バインディング

`pivotModel`プロパティは、ピボットテーブルの状態の双方向バインディングを可能にし、以下のことができます：
- すべてのユーザーインタラクションをリアルタイムで追跡
- ピボットテーブルの構成を保存および復元
- 複数のコンポーネント間で状態を同期
- 元に戻す/やり直し機能を実装

### 基本的な使用法

```vue
<template>
  <VuePivottableUi
    v-model:pivot-model="pivotModel"
    :data="data"
    :renderers="renderers"
    @change="onPivotModelChange"
  />
</template>

<script setup>
import { ref } from 'vue'

const pivotModel = ref({
  rows: ['Category'],
  cols: ['Date'],
  vals: ['Amount'],
  aggregatorName: 'Sum',
  rendererName: 'Table',
  valueFilter: {},
  rowOrder: 'key_a_to_z',
  colOrder: 'key_a_to_z',
  heatmapMode: ''
})

const onPivotModelChange = (model) => {
  console.log('ピボットテーブルの構成が変更されました:', model)
  // localStorage、データベースなどに保存
}
</script>
```

### PivotModelインターフェース

```typescript
interface PivotModelInterface {
  rows: string[]
  cols: string[]
  vals: string[]
  aggregatorName: string
  rendererName: string
  heatmapMode?: 'full' | 'col' | 'row' | ''
  valueFilter: Record<string, any>
  rowOrder: 'key_a_to_z' | 'value_a_to_z' | 'value_z_to_a'
  colOrder: 'key_a_to_z' | 'value_a_to_z' | 'value_z_to_a'
  timestamp?: number
  version?: string
}
```

### 状態の永続化

ピボットテーブルの構成を保存および復元：

```vue
<script setup>
import { ref, onMounted } from 'vue'

const pivotModel = ref()

// 保存された状態を読み込む
onMounted(() => {
  const saved = localStorage.getItem('pivotState')
  if (saved) {
    pivotModel.value = JSON.parse(saved)
  }
})

// 変更時に状態を保存
const onPivotModelChange = (model) => {
  localStorage.setItem('pivotState', JSON.stringify(model))
}
</script>
```

### 履歴管理

元に戻す/やり直し機能のための`usePivotModelHistory`コンポジションAPIを使用：

```vue
<script setup>
import { ref } from 'vue'
import { usePivotModelHistory } from 'vue-pivottable'

const pivotModel = ref({
  rows: [],
  cols: [],
  // ... 初期設定
})

const {
  canUndo,
  canRedo,
  undo,
  redo,
  clear
} = usePivotModelHistory(pivotModel)
</script>

<template>
  <div>
    <button @click="undo" :disabled="!canUndo">元に戻す</button>
    <button @click="redo" :disabled="!canRedo">やり直す</button>
    <button @click="clear">履歴をクリア</button>
    
    <VuePivottableUi
      v-model:pivot-model="pivotModel"
      :data="data"
      :renderers="renderers"
    />
  </div>
</template>
```

## カスタム集計関数

カスタム集計関数を作成：

```javascript
import { aggregatorTemplates, numberFormat } from 'vue-pivottable'

const customAggregators = {
  // シンプルなカウント集計
  'カスタムカウント': aggregatorTemplates.count(),
  
  // カスタムフォーマットの合計
  '通貨合計': aggregatorTemplates.sum(
    numberFormat({ prefix: '¥', digitsAfterDecimal: 0 })
  ),
  
  // 完全にカスタマイズされた集計
  '中央値': () => {
    return ([attr]) => {
      return () => ({
        values: [],
        push(record) {
          const val = parseFloat(record[attr])
          if (!isNaN(val)) {
            this.values.push(val)
          }
        },
        value() {
          if (this.values.length === 0) return null
          const sorted = [...this.values].sort((a, b) => a - b)
          const mid = Math.floor(sorted.length / 2)
          return sorted.length % 2 !== 0
            ? sorted[mid]
            : (sorted[mid - 1] + sorted[mid]) / 2
        },
        format: numberFormat()
      })
    }
  }
}
```

## カスタムレンダラー

カスタム視覚化コンポーネントを作成：

```vue
<!-- CustomRenderer.vue -->
<template>
  <div class="custom-renderer">
    <h3>{{ title }}</h3>
    <div class="chart-container">
      <!-- ここにカスタム視覚化 -->
    </div>
  </div>
</template>

<script setup>
import { useProvidePivotData } from 'vue-pivottable'

const props = defineProps({
  // すべてのピボットテーブルpropsがレンダラーに渡されます
  data: Array,
  rows: Array,
  cols: Array,
  // ... その他のprops
})

// 計算されたピボットデータにアクセス
const { pivotData, rowKeys, colKeys } = useProvidePivotData(props)

const title = computed(() => 
  `${props.rows.join(', ')} vs ${props.cols.join(', ')}`
)
</script>
```

カスタムレンダラーの登録と使用：

```vue
<script setup>
import { markRaw } from 'vue'
import CustomRenderer from './CustomRenderer.vue'

const renderers = markRaw({
  'カスタムチャート': {
    name: 'CustomChart',
    setup(props) {
      return () => h(CustomRenderer, props)
    }
  }
})
</script>
```

## パフォーマンスの最適化

### 大規模データセット

大規模データセットの場合、以下を検討してください：

1. **データの仮想化**: 仮想化されたテーブルレンダラーを使用
2. **遅延読み込み**: 必要に応じてデータを読み込む
3. **Web Workers**: バックグラウンドスレッドでデータを処理

```javascript
// 例：Web Workerでのデータ処理
const worker = new Worker('pivot-worker.js')

worker.postMessage({
  type: 'process',
  data: largeDataset,
  config: pivotModel.value
})

worker.onmessage = (e) => {
  if (e.data.type === 'result') {
    processedData.value = e.data.result
  }
}
```

### メモリ管理

ピボットテーブルはアンマウント時に自動的にリソースをクリーンアップします。手動クリーンアップの場合：

```vue
<script setup>
import { onUnmounted } from 'vue'

// リソースは自動的にクリーンアップされます
onUnmounted(() => {
  // 必要に応じて追加のクリーンアップ
})
</script>
```

## 高度なフィルタリング

### 動的フィルター

動的フィルター条件を作成：

```javascript
const dynamicFilter = computed(() => {
  const filter = {}
  
  // 日付範囲でフィルタリング
  if (startDate.value && endDate.value) {
    filter.Date = (value) => {
      const date = new Date(value)
      return date >= startDate.value && date <= endDate.value
    }
  }
  
  // 金額のしきい値でフィルタリング
  if (minAmount.value) {
    filter.Amount = (value) => value >= minAmount.value
  }
  
  return filter
})
```

### プログラムによるフィルター制御

プログラムでフィルターを制御：

```javascript
// すべてのフィルターをクリア
pivotModel.value.valueFilter = {}

// 特定のフィルターを適用
pivotModel.value.valueFilter = {
  Category: {
    'Electronics': false,  // Electronicsを除外
    'Clothing': false     // Clothingを除外
  }
}

// 値のフィルターを切り替える
const toggleFilter = (attribute, value) => {
  const currentFilter = pivotModel.value.valueFilter[attribute] || {}
  
  if (value in currentFilter) {
    delete currentFilter[value]
  } else {
    currentFilter[value] = false
  }
  
  pivotModel.value.valueFilter = {
    ...pivotModel.value.valueFilter,
    [attribute]: currentFilter
  }
}
```