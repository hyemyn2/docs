# Props

## Core Data Props

### data

* **Type**: `Array`, `Object`, or `Function`
* **Default**: None
* **Required**: Yes
* **Used by**: `VuePivottable`, `VuePivottableUi`
* **Description**: The data to be summarized in the pivot table. Can be an array of objects, an array of arrays, or a function that calls back with the data.

### vals

* **Type**: `Array<string>`
* **Default**: `[]`
* **Used by**: `VuePivottable`, `VuePivottableUi`
* **Description**: Attribute names used as arguments to the aggregator function. These define which values will be calculated in the pivot table.

### cols

* **Type**: `Array<string>`
* **Default**: `[]`
* **Used by**: `VuePivottable`, `VuePivottableUi`
* **Description**: Attribute names to pre-populate in the columns area of the pivot table.

### rows

* **Type**: `Array<string>`
* **Default**: `[]` 
* **Used by**: `VuePivottable`, `VuePivottableUi`
* **Description**: Attribute names to pre-populate in the rows area of the pivot table.

### attributes

* **Type**: `Array<string>`
* **Default**: `[]`
* **Required**: No
* **Used by**: `VuePivottable`, `VuePivottableUi`
* **Description**: List of attribute names found in the data. If not provided, it will be automatically derived from the data.

## Display Control Props

### showRowTotal

* **Type**: `Boolean`
* **Default**: `true`
* **Description**: Determines whether to show totals for rows.

### showColTotal

* **Type**: `Boolean`
* **Default**: `true`
* **Description**: Determines whether to show totals for columns.

### tableMaxWidth

* **Type**: `Number`
* **Default**: `0`
* **Validator**: Must be >= 0
* **Used by**: `VuePivottable`, `VuePivottableUi`
* **Description**: Sets the maximum width of the pivot table in pixels. A value of 0 means no maximum width.

## Aggregation Props

### aggregators

* **Type**: `Record<string, AggregatorTemplate>`
* **Default**: Imported from utilities
* **Used by**: `VuePivottable`, `VuePivottableUi`
* **Description**: Dictionary of generator functions for aggregations available in the dropdown (e.g., Sum, Count, Average).

### aggregatorName

* **Type**: `String`
* **Default**: `'Count'`
* **Description**: Key to the `aggregators` object specifying which aggregator to use for calculations.

## Rendering Props

### renderers

* **Type**: `Object`
* **Default**: `{}`
* **Description**: Object containing renderer components available to display the pivot table.

### rendererName

* **Type**: `String`
* **Default**: `'Table'`
* **Description**: Key to the `renderers` object specifying which renderer to use for display.

### heatmapMode

* **Type**: `String`
* **Default**: `undefined`
* **Description**: Specifies how to apply color heatmap to values. Options include `'full'`, `'row'`, or `'col'`.

### tableColorScaleGenerator

* **Type**: `Function`
* **Default**: `redColorScaleGenerator`
* **Description**: Function to generate custom color scale for the table heatmap.

### tableOptions

* **Type**: `Object`
* **Default**: `{}`
* **Description**: Additional options for table rendering, such as `clickCallback` for handling clicks on cells.

## Filtering and Sorting Props

### valueFilter

* **Type**: `Object`
* **Default**: `{}`
* **Description**: Filtering configuration for attribute values. Keys are attribute names and values are objects of attribute value-boolean pairs which denote records to include or exclude.

### sorters

* **Type**: `Function` or `Object`
* **Default**: `{}`
* **Description**: Functions used to sort attribute values for display. Can be called with an attribute name to return a sorting function.

### derivedAttributes

* **Type**: `Function` or `Object`
* **Default**: `{}`
* **Description**: Defines derived attributes to calculate from existing data.

### rowOrder

* **Type**: `String`
* **Default**: `'key_a_to_z'`
* **Allowed values**: `'key_a_to_z'`, `'value_a_to_z'`, `'value_z_to_a'`
* **Used by**: `VuePivottable`, `VuePivottableUi`
* **Description**: Order in which row data is provided to the renderer.

### colOrder

* **Type**: `String`
* **Default**: `'key_a_to_z'`
* **Allowed values**: `'key_a_to_z'`, `'value_a_to_z'`, `'value_z_to_a'`
* **Used by**: `VuePivottable`, `VuePivottableUi`
* **Description**: Order in which column data is provided to the renderer.

## Localization Props

### locale

* **Type**: `String`
* **Default**: `'en'`
* **Description**: Locale code for internationalization.

### languagePack

* **Type**: `Object`
* **Default**: Imported locales
* **Description**: Object containing translations and formatting options for different languages.

## VuePivottableUi Props

These props are specific to the `VuePivottableUi` component and control the interactive UI behavior.

### hiddenAttributes

* **Type**: `Array`
* **Default**: `[]`
* **Description**: Attribute names to completely omit from the UI.

### hiddenFromAggregators

* **Type**: `Array`
* **Default**: `[]`
* **Description**: Attribute names to exclude from the aggregator argument dropdowns.

### hiddenFromDragDrop

* **Type**: `Array`
* **Default**: `[]`
* **Description**: Attribute names to exclude from the drag and drop portion of the UI.

### restrictedFromDragDrop

* **Type**: `Array`
* **Default**: `[]`
* **Description**: Attribute names that can be viewed but not moved in the drag and drop interface.

### menuLimit

* **Type**: `Number`
* **Default**: `500`
* **Description**: Maximum number of values to list in the filter menu when double-clicking an attribute.

### hideFilterBoxOfUnusedAttributes

* **Type**: `Boolean`
* **Default**: `false`
* **Description**: Whether to hide filter boxes for attributes that are not currently being used in the pivot table.

### pivotModel

* **Type**: `PivotModelInterface`
* **Default**: `undefined`
* **Description**: External model to control the pivot table state. Allows two-way binding of the pivot table configuration through `v-model:pivotModel`. When provided, it overrides individual props like rows, cols, vals, etc. The model includes:
  - `rows`: Array of row attribute names
  - `cols`: Array of column attribute names  
  - `vals`: Array of value attribute names
  - `aggregatorName`: Name of the aggregator function
  - `rendererName`: Name of the renderer
  - `valueFilter`: Filter configuration for attribute values
  - `rowOrder`: Row sorting order
  - `colOrder`: Column sorting order
  - `heatmapMode`: Heatmap display mode
  
  Useful for saving/restoring pivot table states and syncing state with parent components.

## Removed Props

The following props have been removed or changed from the current version:

### locales

* **Type**: `Object`
* **Previously Default**: Imported `locales`
* **Status**:  Renamed to languagePack
* **Description**: Previously used to provide translations and formatting options for different languages.

### rowTotal

* **Type**: `Boolean`
* **Previously Default**: `true`
* **Status**: Renamed to `showRowTotal`
* **Description**: Previously used to determine whether to show totals for rows.

### colTotal

* **Type**: `Boolean`
* **Previously Default**: `true`
* **Status**: Renamed to `showColTotal`
* **Description**: Previously used to determine whether to show totals for columns.

### sortonlyFromDragDrop

* **Type**: `Array`
* **Previously Default**: `[]`
* **Status**: Replaced by `restrictedFromDragDrop`
* **Description**: Previously contained attribute names to sort from the drag'n'drop of the UI.

### disabledFromDragDrop

* **Type**: `Array`
* **Previously Default**: `[]`
* **Status**: Completely removed
* **Description**: Previously contained attribute names to disable from the drag'n'drop portion of the UI.
