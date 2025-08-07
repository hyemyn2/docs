# 属性

## 核心数据属性

### data

* **类型**: `Array`, `Object`, 或 `Function`
* **默认值**: 无
* **必需**: 是
* **使用组件**: `VuePivottable`, `VuePivottableUi`
* **描述**: 要在透视表中聚合的数据。可以是对象数组、数组的数组，或回调数据的函数。

### vals

* **类型**: `Array<string>`
* **默认值**: `[]`
* **使用组件**: `VuePivottable`, `VuePivottableUi`
* **描述**: 用作聚合器函数参数的属性名。定义透视表中要计算的值。

### cols

* **类型**: `Array<string>`
* **默认值**: `[]`
* **使用组件**: `VuePivottable`, `VuePivottableUi`
* **描述**: 预填充到透视表列区域的属性名。

### rows

* **类型**: `Array<string>`
* **默认值**: `[]`
* **使用组件**: `VuePivottable`, `VuePivottableUi`
* **描述**: 预填充到透视表行区域的属性名。

### attributes

* **类型**: `Array<string>`
* **默认值**: `[]`
* **必需**: 否
* **使用组件**: `VuePivottable`, `VuePivottableUi`
* **描述**: 在数据中找到的属性名列表。如果未提供，将自动从数据中派生。

## 显示控制属性

### showRowTotal

* **类型**: `Boolean`
* **默认值**: `true`
* **描述**: 确定是否显示行总计。

### showColTotal

* **类型**: `Boolean`
* **默认值**: `true`
* **描述**: 确定是否显示列总计。

### tableMaxWidth

* **类型**: `Number`
* **默认值**: `0`
* **验证器**: 必须大于或等于 0
* **使用组件**: `VuePivottable`, `VuePivottableUi`
* **描述**: 设置透视表的最大宽度（像素）。值为 0 表示无最大宽度。

## 聚合属性

### aggregators

* **类型**: `Record<string, AggregatorTemplate>`
* **默认值**: 从工具导入
* **使用组件**: `VuePivottable`, `VuePivottableUi`
* **描述**: 下拉菜单中可用聚合的生成器函数字典（例如：Sum、Count、Average）。

### aggregatorName

* **类型**: `String`
* **默认值**: `'Count'`
* **描述**: `aggregators` 对象的键，指定用于计算的聚合器。

## 渲染属性

### renderers

* **类型**: `Object`
* **默认值**: `{}`
* **描述**: 包含可用于显示透视表的渲染器组件的对象。

### rendererName

* **类型**: `String`
* **默认值**: `'Table'`
* **描述**: `renderers` 对象的键，指定用于显示的渲染器。

### heatmapMode

* **类型**: `String`
* **默认值**: `undefined`
* **描述**: 指定如何将颜色热图应用于值。选项包括 `'full'`、`'row'`、`'col'`。

### tableColorScaleGenerator

* **类型**: `Function`
* **默认值**: `redColorScaleGenerator`
* **描述**: 为表格热图生成自定义颜色标尺的函数。

### tableOptions

* **类型**: `Object`
* **默认值**: `{}`
* **描述**: 表格渲染的附加选项，如处理单元格点击的 `clickCallback`。

## 筛选和排序属性

### valueFilter

* **类型**: `Object`
* **默认值**: `{}`
* **描述**: 属性值的筛选配置。键是属性名，值是属性值和布尔值对的对象，表示要包含/排除的记录。

### sorters

* **类型**: `Function` 或 `Object`
* **默认值**: `{}`
* **描述**: 用于排序属性值以进行显示的函数。可以用属性名调用以返回排序函数。

### derivedAttributes

* **类型**: `Function` 或 `Object`
* **默认值**: `{}`
* **描述**: 定义从现有数据计算的派生属性。

### rowOrder

* **类型**: `String`
* **默认值**: `'key_a_to_z'`
* **允许的值**: `'key_a_to_z'`, `'value_a_to_z'`, `'value_z_to_a'`
* **使用组件**: `VuePivottable`, `VuePivottableUi`
* **描述**: 行数据提供给渲染器的顺序。

### colOrder

* **类型**: `String`
* **默认值**: `'key_a_to_z'`
* **允许的值**: `'key_a_to_z'`, `'value_a_to_z'`, `'value_z_to_a'`
* **使用组件**: `VuePivottable`, `VuePivottableUi`
* **描述**: 列数据提供给渲染器的顺序。

## 本地化属性

### locale

* **类型**: `String`
* **默认值**: `'en'`
* **描述**: 用于国际化的区域代码。

### languagePack

* **类型**: `Object`
* **默认值**: 导入的区域
* **描述**: 包含不同语言翻译和格式选项的对象。

## VuePivottableUi 属性

这些属性专用于 `VuePivottableUi` 组件，控制交互式 UI 的行为。

### hiddenAttributes

* **类型**: `Array`
* **默认值**: `[]`
* **描述**: 从 UI 中完全省略的属性名。

### hiddenFromAggregators

* **类型**: `Array`
* **默认值**: `[]`
* **描述**: 从聚合器参数下拉菜单中排除的属性名。

### hiddenFromDragDrop

* **类型**: `Array`
* **默认值**: `[]`
* **描述**: 从 UI 的拖拽部分排除的属性名。

### restrictedFromDragDrop

* **类型**: `Array`
* **默认值**: `[]`
* **描述**: 在拖拽界面中可见但不可移动的属性名。

### menuLimit

* **类型**: `Number`
* **默认值**: `500`
* **描述**: 双击属性时在过滤菜单中显示的最大值数量。

### hideFilterBoxOfUnusedAttributes

* **类型**: `Boolean`
* **默认值**: `false`
* **描述**: 是否隐藏当前未在透视表中使用的属性的过滤框。

### pivotModel

* **类型**: `PivotModelInterface`
* **默认值**: `undefined`
* **描述**: 控制透视表状态的外部模型。通过 `v-model:pivotModel` 实现透视表配置的双向绑定。如果提供，将覆盖 rows、cols、vals 等单独的属性。模型包含：
  - `rows`: 行属性名数组
  - `cols`: 列属性名数组
  - `vals`: 值属性名数组
  - `aggregatorName`: 聚合器函数名
  - `rendererName`: 渲染器名称
  - `valueFilter`: 属性值的过滤配置
  - `rowOrder`: 行排序顺序
  - `colOrder`: 列排序顺序
  - `heatmapMode`: 热图显示模式
  
  对于保存/恢复透视表状态和与父组件同步状态很有用。

## 已删除的属性

以下属性在当前版本中已删除或更改：

### locales

* **类型**: `Object`
* **先前默认值**: 导入的 `locales`
* **状态**: 重命名为 `languagePack`
* **描述**: 以前用于提供不同语言的翻译和格式选项。

### rowTotal

* **类型**: `Boolean`
* **先前默认值**: `true`
* **状态**: 重命名为 `showRowTotal`
* **描述**: 以前用于确定是否显示行总计。

### colTotal

* **类型**: `Boolean`
* **先前默认值**: `true`
* **状态**: 重命名为 `showColTotal`
* **描述**: 以前用于确定是否显示列总计。

### sortonlyFromDragDrop

* **类型**: `Array`
* **先前默认值**: `[]`
* **状态**: 被 `restrictedFromDragDrop` 替换
* **描述**: 以前包含从 UI 的拖拽中排序的属性名。

### disabledFromDragDrop

* **类型**: `Array`
* **先前默认值**: `[]`
* **状态**: 完全删除
* **描述**: 以前包含从 UI 的拖拽部分禁用的属性名。