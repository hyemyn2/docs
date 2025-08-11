# 渲染器

## 自定义渲染器

`vue-pivottable` 除了内置渲染器外，还支持自定义渲染器。目前有两个官方自定义渲染器可用：基于 Plotly 的 `plotly-renderer` 和轻量级的 `lazy-table-renderer`，两者都作为单独可安装的包提供。
您可以根据需要单独安装和使用它们。此外，您还可以**定义自己的自定义渲染器函数**并通过 `renderers` 属性传递，以完全自定义透视数据的显示方式。

## plotly renderer

### 依赖关系

Plotly 渲染器基于 @clalarco/vue3-plotly 构建，这是 Plotly.js 的轻量级 Vue 3 包装器。
该库作为 `@vue-pivottable/plotly-renderer` 的依赖项包含，因此您无需单独安装它。
如果您想自定义 Plotly 的行为，请参考其文档了解高级用法。

#### 内置图表

Plotly 渲染器提供 9 种开箱即用的内置图表类型：

- 面积图 (Area Chart)
- 点图 (Dot Chart)  
- 分组条形图 (Grouped Bar Chart)
- 分组柱状图 (Grouped Column Chart)
- 折线图 (Line Chart)
- 多饼图 (Multiple Pie Chart)
- 散点图 (Scatter Chart)
- 堆叠条形图 (Stacked Bar Chart)
- 堆叠柱状图 (Stacked Column Chart)

这些图表可以从渲染器下拉菜单中选择或通过编程方式设置直接使用。

### 安装

```bash
npm install @vue-pivottable/plotly-renderer
```

📦 **unpkg** : <https://unpkg.com/vue-pivottable@1.0.0-alpha.3/dist/vue-pivottable.umd.js><br/>
🌏 **jsDelivr** : <https://cdn.jsdelivr.net/npm/vue-pivottable@1.0.0-alpha.3/dist/vue-pivottable.umd.min.js>

### 用法

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

// 将 plotly 渲染器添加到默认渲染器
const renderers = markRaw({
  ...Renderer,
  ...PlotlyRenderer,
});
</script>
```

### 演示

即将更新

## lazy table renderer

lazy table renderer 旨在通过实现虚拟滚动来提高处理大型数据集的性能。它只渲染透视表的可见部分，大大减少 DOM 大小并提高渲染性能。

### 主要功能

- **虚拟滚动**: 使用 IntersectionObserver 仅渲染可见行
- **固定行高**: 针对 30px 行高优化
- **块基渲染**: 以可配置的块大小渲染数据
- **自动填充**: 顶部和底部填充以维护滚动位置
- **Vue 3 就绪**: 专为 Vue 3 Composition API 构建

### 安装

```bash
npm install @vue-pivottable/lazy-table-renderer
```

### 用法

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

// 将 lazy table renderer 添加到默认渲染器
const renderers = markRaw({
  ...Renderer,
  ...LazyTableRenderer,
});

// 大型数据集示例
const largeDataset = Array.from({ length: 10000 }, (_, i) => ({
  category: `类别 ${i % 100}`,
  month: `2024-${String((i % 12) + 1).padStart(2, '0')}`,
  value: Math.floor(Math.random() * 1000)
}));
</script>
```

### 配置

lazy table renderer 除了标准的 vue-pivottable 属性外，还提供了两个额外的属性：

| 属性 | 类型 | 默认值 | 描述 |
|------|------|---------|-------------|
| `chunkSize` | Number | `50` | 每个块渲染的行数（当前版本中固定值） |
| `bufferSize` | Number | `1` | 在可视区域前后渲染的块数（当前版本中固定值） |

### 高级用法

lazy table renderer 导出一个预配置默认设置（chunkSize: 50，bufferSize: 1）的组件，因此您无法通过标准导入直接自定义这些值。渲染器已针对大多数用例以这些默认值进行了优化。

如果您需要不同的块大小或缓冲区大小：
1. 分叉包并修改源代码中的默认值
2. 或请求包添加接受自定义属性的功能

**注意**: 通过属性自定义 chunkSize 和 bufferSize 的功能计划在未来版本中提供。

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

// 使用默认配置的 lazy table renderer
const renderers = markRaw({
  ...Renderer,
  ...LazyTableRenderer, // 包含带有 chunkSize: 50，bufferSize: 1 的 'Lazy Table'
});
</script>
```

### 使用场景

lazy table renderer 在以下情况下理想：

- **大型数据集**: 处理数千行时
- **性能关键应用**: DOM 大小影响性能时
- **内存受限环境**: 限制 DOM 节点以减少内存使用
- **流畅滚动**: 在大型表格中保持流畅的滚动体验

### 性能提示

1. **块大小调整**: 较大的块重新渲染较少，但初始 DOM 节点更多
2. **缓冲区大小**: 增加以获得更流畅的滚动，减少以提高性能
3. **行高**: 渲染器针对 30px 行进行了优化；自定义高度可能影响性能
4. **数据结构**: 确保数据正确索引以优化渲染

### 演示

在 [现场演示](https://vue-pivottable.vercel.app/examples/lazy-table) 中查看 lazy table renderer 处理大型数据集的效果。