---
outline: deep
---

# Introduction

## What is VuePivottable?

**Pivot Table Component for Vue 3**

`vue-pivottable` is a Vue 3-compatible pivot table component, which is a Vue wrapper of the popular [react-pivottable](https://github.com/plotly/react-pivottable). This library allows you to easily summarize, transform, and visualize large datasets in a pivot table UI.

## Features

- **Vue 3 Composition API** built for modern development
- **Multiple aggregators and renderers** for versatile data visualization
- **Interactive UI** with drag-and-drop field configuration
- **Highly customizable** (renderers, aggregators, styles)
- **TypeScript** support for better development experience

## Basic Concepts

### What is a Pivot Table?

A pivot table is a powerful data analysis tool that aggregates data across different dimensions and displays it in a cross-tabular format.

### Components

- **VuePivottable**: Basic component that renders static pivot tables
- **VuePivottableUi**: Interactive component that allows users to dynamically modify configurations

### Data Structure

Vue Pivottable supports the following data formats:

- **Array of objects**: `[{name: "Alice", age: 25}, {name: "Bob", age: 30}]`
- **Array of arrays**: `[["Name", "Age"], ["Alice", 25], ["Bob", 30]]`
- **Functions**: Functions that provide data asynchronously

## Why Choose Vue Pivottable?

1. **Vue 3 Optimized**: Leverages the latest Vue 3 Composition API
2. **Flexibility**: Extend with custom renderers and aggregators to fit your needs
3. **Performance**: Optimized for large datasets (lazy table renderer)
4. **Developer Experience**: TypeScript support and comprehensive documentation

<br/>

![Vue Pivottable Demo](/vue-pivottable-demo.gif)

## Next Steps

- Check out [Getting Started](/getting-started) for installation and setup
- Learn about [Props](/props) in detail
- Explore [Renderer](/renderer) customization options

## Inspired

- [plotly/react-pivottable](https://github.com/plotly/react-pivottable) - React-based pivot table library
- [clalarco/vue3-plotly](https://github.com/clalarco/vue3-plotly) - vue wrapper for plotly.js

## License

VuePivottable is open-sourced software licensed under the MIT license.
