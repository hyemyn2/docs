# 高级用法

## 使用 PivotModel 进行双向绑定

`pivotModel` 属性实现了透视表状态的双向绑定，允许您：
- 实时跟踪所有用户交互
- 保存和恢复透视表配置
- 在多个组件之间同步状态
- 实现撤销/重做功能

### 基本用法

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
  console.log('透视表配置已更改:', model)
  // 保存到 localStorage、数据库等
}
</script>
```

### PivotModel 接口

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

### 状态持久化

保存和恢复透视表配置：

```vue
<script setup>
import { ref, onMounted } from 'vue'

const pivotModel = ref()

// 加载保存的状态
onMounted(() => {
  const saved = localStorage.getItem('pivotState')
  if (saved) {
    pivotModel.value = JSON.parse(saved)
  }
})

// 更改时保存状态
const onPivotModelChange = (model) => {
  localStorage.setItem('pivotState', JSON.stringify(model))
}
</script>
```

### 历史管理

使用 `usePivotModelHistory` 组合式函数实现撤销/重做功能：

```vue
<script setup>
import { ref } from 'vue'
import { usePivotModelHistory } from 'vue-pivottable'

const pivotModel = ref({
  rows: [],
  cols: [],
  // ... 初始配置
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
    <button @click="undo" :disabled="!canUndo">撤销</button>
    <button @click="redo" :disabled="!canRedo">重做</button>
    <button @click="clear">清除历史</button>
    
    <VuePivottableUi
      v-model:pivot-model="pivotModel"
      :data="data"
      :renderers="renderers"
    />
  </div>
</template>
```

## 自定义聚合器

创建自定义聚合函数：

```javascript
import { aggregatorTemplates, numberFormat } from 'vue-pivottable'

const customAggregators = {
  // 简单计数聚合器
  '自定义计数': aggregatorTemplates.count(),
  
  // 带有自定义格式的求和
  '货币求和': aggregatorTemplates.sum(
    numberFormat({ prefix: '¥', digitsAfterDecimal: 2 })
  ),
  
  // 完全自定义的聚合器
  '中位数': () => {
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

## 自定义渲染器

创建自定义可视化组件：

```vue
<!-- CustomRenderer.vue -->
<template>
  <div class="custom-renderer">
    <h3>{{ title }}</h3>
    <div class="chart-container">
      <!-- 在此处放置您的自定义可视化 -->
    </div>
  </div>
</template>

<script setup>
import { useProvidePivotData } from 'vue-pivottable'

const props = defineProps({
  // 所有透视表的 props 都会传递给渲染器
  data: Array,
  rows: Array,
  cols: Array,
  // ... 其他 props
})

// 访问计算后的透视数据
const { pivotData, rowKeys, colKeys } = useProvidePivotData(props)

const title = computed(() => 
  `${props.rows.join(', ')} vs ${props.cols.join(', ')}`
)
</script>
```

注册和使用自定义渲染器：

```vue
<script setup>
import { markRaw } from 'vue'
import CustomRenderer from './CustomRenderer.vue'

const renderers = markRaw({
  '自定义图表': {
    name: 'CustomChart',
    setup(props) {
      return () => h(CustomRenderer, props)
    }
  }
})
</script>
```

## 性能优化

### 大型数据集

对于大型数据集，请考虑：

1. **数据虚拟化**：使用虚拟化的表格渲染器
2. **延迟加载**：按需加载数据
3. **Web Workers**：在后台线程中处理数据

```javascript
// 示例：在 Web Worker 中处理数据
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

### 内存管理

透视表在卸载时会自动清理资源。对于手动清理：

```vue
<script setup>
import { onUnmounted } from 'vue'

// 资源会自动清理
onUnmounted(() => {
  // 如需要，进行额外清理
})
</script>
```

## 高级过滤

### 动态过滤器

创建动态过滤条件：

```javascript
const dynamicFilter = computed(() => {
  const filter = {}
  
  // 按日期范围过滤
  if (startDate.value && endDate.value) {
    filter.Date = (value) => {
      const date = new Date(value)
      return date >= startDate.value && date <= endDate.value
    }
  }
  
  // 按金额阈值过滤
  if (minAmount.value) {
    filter.Amount = (value) => value >= minAmount.value
  }
  
  return filter
})
```

### 程序化过滤器控制

以编程方式控制过滤器：

```javascript
// 清除所有过滤器
pivotModel.value.valueFilter = {}

// 应用特定过滤器
pivotModel.value.valueFilter = {
  Category: {
    'Electronics': false,  // 排除 Electronics
    'Clothing': false     // 排除 Clothing
  }
}

// 切换值的过滤器
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