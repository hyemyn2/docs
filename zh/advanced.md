# Advanced Usage

## Two-way Binding with PivotModel

The `pivotModel` prop enables two-way binding of the pivot table's state, allowing you to:
- Track all user interactions in real-time
- Save and restore pivot table configurations
- Synchronize state between multiple components
- Implement undo/redo functionality

### Basic Usage

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
  console.log('Pivot table configuration changed:', model)
  // Save to localStorage, database, etc.
}
</script>
```

### PivotModel Interface

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

### State Persistence

Save and restore pivot table configurations:

```vue
<script setup>
import { ref, onMounted } from 'vue'

const pivotModel = ref()

// Load saved state
onMounted(() => {
  const saved = localStorage.getItem('pivotState')
  if (saved) {
    pivotModel.value = JSON.parse(saved)
  }
})

// Save state on changes
const onPivotModelChange = (model) => {
  localStorage.setItem('pivotState', JSON.stringify(model))
}
</script>
```

### History Management

Use the `usePivotModelHistory` composable for undo/redo functionality:

```vue
<script setup>
import { ref } from 'vue'
import { usePivotModelHistory } from 'vue-pivottable'

const pivotModel = ref({
  rows: [],
  cols: [],
  // ... initial configuration
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
    <button @click="undo" :disabled="!canUndo">Undo</button>
    <button @click="redo" :disabled="!canRedo">Redo</button>
    <button @click="clear">Clear History</button>
    
    <VuePivottableUi
      v-model:pivot-model="pivotModel"
      :data="data"
      :renderers="renderers"
    />
  </div>
</template>
```

## Custom Aggregators

Create custom aggregation functions:

```javascript
import { aggregatorTemplates, numberFormat } from 'vue-pivottable'

const customAggregators = {
  // Simple count aggregator
  'Custom Count': aggregatorTemplates.count(),
  
  // Sum with custom formatting
  'Currency Sum': aggregatorTemplates.sum(
    numberFormat({ prefix: '$', digitsAfterDecimal: 2 })
  ),
  
  // Completely custom aggregator
  'Median': () => {
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

## Custom Renderers

Create custom visualization components:

```vue
<!-- CustomRenderer.vue -->
<template>
  <div class="custom-renderer">
    <h3>{{ title }}</h3>
    <div class="chart-container">
      <!-- Your custom visualization here -->
    </div>
  </div>
</template>

<script setup>
import { useProvidePivotData } from 'vue-pivottable'

const props = defineProps({
  // All pivot table props are passed to renderers
  data: Array,
  rows: Array,
  cols: Array,
  // ... other props
})

// Access computed pivot data
const { pivotData, rowKeys, colKeys } = useProvidePivotData(props)

const title = computed(() => 
  `${props.rows.join(', ')} vs ${props.cols.join(', ')}`
)
</script>
```

Register and use the custom renderer:

```vue
<script setup>
import { markRaw } from 'vue'
import CustomRenderer from './CustomRenderer.vue'

const renderers = markRaw({
  'Custom Chart': {
    name: 'CustomChart',
    setup(props) {
      return () => h(CustomRenderer, props)
    }
  }
})
</script>
```

## Performance Optimization

### Large Datasets

For large datasets, consider:

1. **Data virtualization**: Use a virtualized table renderer
2. **Lazy loading**: Load data on demand
3. **Web Workers**: Process data in background threads

```javascript
// Example: Processing data in a Web Worker
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

### Memory Management

The pivot table automatically cleans up resources when unmounted. For manual cleanup:

```vue
<script setup>
import { onUnmounted } from 'vue'

// Resources are automatically cleaned up
onUnmounted(() => {
  // Additional cleanup if needed
})
</script>
```

## Advanced Filtering

### Dynamic Filters

Create dynamic filter conditions:

```javascript
const dynamicFilter = computed(() => {
  const filter = {}
  
  // Filter by date range
  if (startDate.value && endDate.value) {
    filter.Date = (value) => {
      const date = new Date(value)
      return date >= startDate.value && date <= endDate.value
    }
  }
  
  // Filter by amount threshold
  if (minAmount.value) {
    filter.Amount = (value) => value >= minAmount.value
  }
  
  return filter
})
```

### Programmatic Filter Control

Control filters programmatically:

```javascript
// Clear all filters
pivotModel.value.valueFilter = {}

// Apply specific filter
pivotModel.value.valueFilter = {
  Category: {
    'Electronics': false,  // Exclude Electronics
    'Clothing': false     // Exclude Clothing
  }
}

// Toggle filter for a value
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